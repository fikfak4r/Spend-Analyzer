namespace SpendAnalyzer.BusinessObjects {

    export class SpdDshBrdDL implements EventTarget {


        private delegate = document.createDocumentFragment()

        private appRpstry: AppRpstry;
        private svcRqst: SvcRqst;
        private sectionAData: SpdDshBrdDL.SestionA;
        private sectionBData: SpdDshBrdDL.SestionB;
        private sectionCData: Array<SpdDshBrdDL.SestionC>;
        private trnxSumry: Array<SpdDshBrdDL.TrnxSumry>;
        


        public onReady: (res: any) => void;

        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void {
            this.delegate.addEventListener.apply(this.delegate, [type, listener])
        }
        dispatchEvent(event: Event): boolean {
            return this.delegate.dispatchEvent.apply(this.delegate, [event]);
        }
        removeEventListener(type: string, callback: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void {
            return this.delegate.removeEventListener.apply(this.delegate, callback)
        }


        constructor(appRpstry: AppRpstry) {


            this.appRpstry = appRpstry;
            this.svcRqst = new SvcRqst();
            this.sectionAData = <SpdDshBrdDL.SestionA>{ CustomerCount: 0, ActiveCustomers: 0 }
            this.sectionBData = <SpdDshBrdDL.SestionB>{ TotalCr: 0, TotalDr: 0, Trends: [] };
            this.sectionCData = new Array<SpdDshBrdDL.SestionC>();
            this.trnxSumry = new Array<SpdDshBrdDL.TrnxSumry>();


            this.SetHndlr();


        }


        private _dataLayerCntxt
        get DataLayerCntxt() { return this._dataLayerCntxt; }
        set DataLayerCntxt(val) { this._dataLayerCntxt = val }



        public GetSectionA() {
            this.DataLayerCntxt = DataLayerCntxt.SectionA;
            this.svcRqst.Load(this.appRpstry.GetHome())
        }

        public GetSectionB() {
            this.DataLayerCntxt = DataLayerCntxt.SectionB;
            this.svcRqst.Load(this.appRpstry.GetMonthlyTrend(), AppRpstryCntxt.GetMonthlyTrend, false);
        }

        public GetSectionC() {
            this.DataLayerCntxt = DataLayerCntxt.SectionC;
            this.svcRqst.Load(this.appRpstry.GetTopSpndCatgrs(), AppRpstryCntxt.GetTopSpndCatgrs, false);
        }

        public GetSectionCTab1() {
            //this.svcRqst.Load(this.appRpstry.GetTopSpndCatgrs(), AppRpstryCntxt.GetTopSpndCatgrs)
        }

        public GetTrnxSumry() {

            this.DataLayerCntxt = DataLayerCntxt.TrnxSumry;
            this.svcRqst.Load(this.appRpstry.GetMonthlyTrend(), AppRpstryCntxt.GetMonthlyTrend, false);

        }

        public GetTrnxSumryForVol() {
            this.DataLayerCntxt = DataLayerCntxt.TrnxSumryForVol;
            this.svcRqst.Load(this.appRpstry.GetMonthlyVolTrend(), AppRpstryCntxt.GetMonthlyVolTrend, false);
        }

   

        private SetHndlr() {

            this.svcRqst.onLoad = (res) => {


                if (this.DataLayerCntxt == DataLayerCntxt.SectionA) {

                    this.sectionAData.CustomerCount = res[0].CUSTOMERCOUNT_Sum;
                    this.sectionAData.ActiveCustomers = res[0].ACTIVECUSTOMER_Sum

                    this.DataLayerCntxt = DataLayerCntxt.SectionA2

                    this.svcRqst.Load(this.appRpstry.GetDshBrdA())
                }
                else if (this.DataLayerCntxt == DataLayerCntxt.SectionA2) {

                    this.sectionAData.CrValue = res[0].CRVAL_Sum
                    this.sectionAData.CrVolume = res[0].CRVOL_Sum
                    this.sectionAData.DrValue = res[0].DRVAL_Sum
                    this.sectionAData.DrVolume = res[0].DRVOL_Sum

                    this.onReady(this.sectionAData);

                }
                else if (this.DataLayerCntxt == DataLayerCntxt.SectionB) {


                    var ds = this.GetTrnxSmry(res)

                    var dsMgr = new ej.data.DataManager({ json: ds });

                    var ttlCrqry = new ej.data.Query().group("trnxtype").aggregate("sum", "TotalCr");

                    var ttlCr = ttlCrqry.executeLocal(dsMgr)[0].aggregates["TotalCr - sum"]


                    var ttlDrqry = new ej.data.Query().group("trnxtype").aggregate("sum", "TotalDr");

                    var ttlDr = ttlDrqry.executeLocal(dsMgr)[0].aggregates["TotalDr - sum"]

                    //this.sectionBData.TotalCr = ttlCr;
                    //this.sectionBData.TotalDr = ttlDr;
                    this.sectionBData.Trends = ds;
          

                    this.DataLayerCntxt = DataLayerCntxt.SectionBLabel

                    this.svcRqst.Load(this.appRpstry.GetDshBrdA())


                }
                else if (this.DataLayerCntxt == DataLayerCntxt.SectionBLabel) {


                    this.sectionBData.TotalCrValue = res[0].CRVAL_Sum;
                    this.sectionBData.TotalCrVolume = res[0].CRVOL_Sum;
                    this.sectionBData.TotalDrValue = res[0].DRVAL_Sum;
                    this.sectionBData.TotalDrVolume = res[0].DRVOL_Sum;

                    this.onReady(this.sectionBData);

                }
                else if (this.DataLayerCntxt == DataLayerCntxt.SectionC) {

                    this.sectionCData.splice(0, this.sectionCData.length)

                    var arr = ["SPEND1:TRANSPORT", "SPEND2:UTILITY BILLS", "SPEND3:VEHICLE", "SPEND4:TRANSPORT", "SPEND5:BETTING", "SPEND6:PHONE", "SPEND7:LOAN REPAYMENT", "SPEND8:INVOICE REPAYMENT", "SPEND9:UNCLASSIFIED"];


                    arr.forEach((val, index, arr) => {
                        this.sectionCData.push(this.GetData(res, val))
                    })


                    this.onReady(this.sectionCData);

                }
                else if (this.DataLayerCntxt == DataLayerCntxt.TrnxSumry) {

                    this.onReady(this.GetTrnxSmry(res));


                }
                else if (this.DataLayerCntxt == DataLayerCntxt.TrnxSumryForVol) {
                    this.onReady(this.GetTrnxSmry(res))
                }



            }


        }//Ends SetHndlr()


        private GetData(ds, val: string) {


            var valLst = val.split(":");

            var dsMgr = new ej.data.DataManager({ json: ds });

            var qry = new ej.data.Query().where("Nm", "startswith", valLst[0])
                .where("Nm", "endswith", "VOL_Sum").group("BANK_Max")
                .aggregate("sum", "Val")

            var vol = qry.executeLocal(dsMgr)[0].aggregates["Val - sum"];

            var qryVal = new ej.data.Query().where("Nm", "startswith", valLst[0])
                .where("Nm", "endswith", "VALUE_Sum").group("BANK_Max")
                .aggregate("sum", "Val")

            var valSum = qryVal.executeLocal(dsMgr)[0].aggregates["Val - sum"];


            var trndQry = new ej.data.Query().where("Nm", "startswith", valLst[0])
                .where("Nm", "endswith", "VALUE_Sum")


            return  <SpdDshBrdDL.SestionC>{ SpendType: valLst[1], TrnxnCnt: valSum, TrnxnAmt: vol }


        }

        private GetTrnxSmry(res) {


            var ds = new Array<SpdDshBrdDL.TrnxSumry>()

            Object.getOwnPropertyNames(res[0]).forEach((val, index, arr) => {

                var date = "";

                if (/(CRED){1}/.test(val)) {

                    ds.push(<SpdDshBrdDL.TrnxSumry>{ DateStamp: DtMgr.GetDate(val), TrnxType: "drcr", TotalCr: res[0][val], TotalDr: res[0][val.replace(/CRED/, 'DEB')] })


                }


            })//Ends the ForEach block

            return ds;

        }
   
        private GetTrnxSmryForVol(res) {


            var ds = new Array<SpdDshBrdDL.TrnxSumry>()

            Object.getOwnPropertyNames(res[0]).forEach((val, index, arr) => {

                var date = "";

                if (/(CRED){1}/.test(val)) {

                    ds.push(<SpdDshBrdDL.TrnxSumry>{ DateStamp: DtMgr.GetDate(val), TrnxType: "drcr", TotalCrVolume: res[0][val], TotalDrVolume: res[0][val.replace(/CRED/, 'DEB')] })


                }


            })//Ends the ForEach block

            return ds;

        }


    }

  

    enum DataLayerCntxt {
        SectionA = 1,
        SectionA2 = 2,
        SectionB = 3,
        SectionBLabel = 7,
        SectionC = 4,
        TrnxSumry = 5,
        TrnxSumryForVol = 6,
    }


}


namespace SpendAnalyzer.BusinessObjects.SpdDshBrdDL {


    export interface SestionA {
        CustomerCount,
        ActiveCustomers,
        CrValue,
        CrVolume,
        DrValue,
        DrVolume,
    }

    export interface SestionB {
        TotalCr,
        TotalDr,
        TotalCrValue,
        TotalCrVolume,
        TotalDrValue,
        TotalDrVolume,
        Trends:Array<TrnxSumry>
    }

    export interface SestionC {
        SpendType,
        TrnxnCnt,
        TrnxnAmt
    }


    export interface TrnxSumry {
        DateStamp,
        TrnxType,
        TotalCr,
        TotalCrVolume,
        TotalDr,
        TotalDrVolume,
    }

}