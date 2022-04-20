namespace SpendAnalyzer.BusinessObjects {

    export class ChnnlAnlytcsDL implements EventTarget {


        private delegate = document.createDocumentFragment();

        private appRpstry: AppRpstry;
        private svcRqst: SvcRqst;
        private chnnlAnlyticsTrnxnSmryLst: Array<ChnnlAnlytcsDL.ChannelTrnxnSmry>;
       
        


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

            this.chnnlAnlyticsTrnxnSmryLst = new Array<ChnnlAnlytcsDL.ChannelTrnxnSmry>();

            this.SetHndlr();


        }


        private _dataLayerCntxt;
        get DataLayerCntxt() { return this._dataLayerCntxt; }         
        set DataLayerCntxt(val) { this._dataLayerCntxt = val; }      
  
        public GetChannelsTrxnSmry() {

            this._dataLayerCntxt = DataLayerCntxt.ChannelAnalyticsSmry;
            this.svcRqst.Load(this.appRpstry.GetChnnls());

        }

        public GetUSSD6MthsSmry() {

            this._dataLayerCntxt = DataLayerCntxt.GetUSSD6MthsSmry;   
            this.svcRqst.Load(this.appRpstry.GetUSSD6MthsSmry());

        }
   

        private SetHndlr() {

            this.svcRqst.onLoad = (res) => {


                if (this._dataLayerCntxt == DataLayerCntxt.ChannelAnalyticsSmry) {

                    //alert(JSON.stringify(res))


                    this.chnnlAnlyticsTrnxnSmryLst.slice(0, this.chnnlAnlyticsTrnxnSmryLst.length)

                    var arr = ["USSD:USSD", "MBM:Mobile Banking", "IBM:Internet Banking", "ATM:ATM", "POS:POS", "WHATSAPP:Whatsapp", "CASH:Cash", "OTC:OTC", "CHQ:Cheque"];


                    arr.forEach((val, index, arr) => {
                        this.chnnlAnlyticsTrnxnSmryLst.push(this.GetData(res, val));
                    });

                    this.onReady(this.chnnlAnlyticsTrnxnSmryLst);

                }
                else if (this._dataLayerCntxt == DataLayerCntxt.GetUSSD6MthsSmry) {

                    this.onReady(this.GetTrnxSmry(res));
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

            //alert(JSON.stringify(trndQry.executeLocal(dsMgr)))


            return <ChnnlAnlytcsDL.ChannelTrnxnSmry>{ Channel: valLst[1], TrnxnCnt: vol, TrnxnAmt: valSum }


        }

        private GetTrnxSmry(res) {


            var ds = new Array<SpdDshBrdDL.TrnxSumry>()

            res.forEach((val, index, arr) => {

                  ds.push(<ChnnlAnlytcsDL.ChannelTrnxnSmry>{ DateStamp: DtMgr.GetDate(val.Nm), TrnxnAmt: val.Val, TrnxnCnt : 0, Channel:"" })

            })//Ends the ForEach block

            return ds;

        }

    }

  

    enum DataLayerCntxt {

        ChannelAnalyticsSmry = 1,
        GetUSSD6MthsSmry = 3,

    }


}


namespace SpendAnalyzer.BusinessObjects.ChnnlAnlytcsDL {


    export interface ChannelTrnxnSmry {

        DateStamp,
        Channel,
        TrnxnCnt,
        TrnxnAmt,

    }

    

}