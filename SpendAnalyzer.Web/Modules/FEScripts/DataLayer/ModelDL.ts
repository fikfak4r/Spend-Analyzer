namespace SpendAnalyzer.BusinessObjects {

    export class ModelDL implements EventTarget {


        private delegate = document.createDocumentFragment()

        private appRpstry: AppRpstry;
        private svcRqst: SvcRqst;
        private model: Array<ModelDL.Model>

        


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
            this.model = new Array<ModelDL.Model>();


            this.SetHndlr();


        }


        private _dataLayerCntxt;
        get DataLayerCntxt() { return this._dataLayerCntxt; }         
        set DataLayerCntxt(val) { this._dataLayerCntxt = val; }      
  
        public GetBOBR() {
            this.DataLayerCntxt = DataLayerCntxt.BOBR
            this.svcRqst.Load(this.appRpstry.GetBOBR());    
        }

        public GetEHVDM() {
            this.DataLayerCntxt = DataLayerCntxt.EHVDM;
            this.svcRqst.Load(this.appRpstry.GetEHVDM())

        }

        public GetDRIP() {
            this.DataLayerCntxt = DataLayerCntxt.DRIP
            this.svcRqst.Load(this.appRpstry.GetDRIP())
        }

        public GetRGS() {
            this.DataLayerCntxt = DataLayerCntxt.RGS
            this.svcRqst.Load(this.appRpstry.GetRGS())
        }


        private SetHndlr() {

            this.svcRqst.onLoad = (res) => {

                this.model.splice(0, this.model.length)

                if (this.DataLayerCntxt == DataLayerCntxt.BOBR) {

                    this.model.push({ x: "New User", y: res[0].NEWUSER_Sum })
                    this.model.push({ x: "Flat", y: res[0].FLAT_Sum })
                    this.model.push({ x: "Droppers", y: res[0].DROPPERS_Sum })
                    this.model.push({ x: "Non Users", y: res[0].NONUSER_Sum })

                    this.onReady(this.model);

                }
                else if (this.DataLayerCntxt == DataLayerCntxt.EHVDM) {

                    this.model.push({ x: "Total Base", y: res[0].HVCOUNT_Sum + res[0].LVCOUNT_Sum })
                    this.model.push({ x: "High Value", y: Number("-" + res[0].HVCOUNT_Sum) })
                    this.model.push({ x: "Low Value", y: Number("-" + res[0].LVCOUNT_Sum) })

                    this.onReady(this.model);


                }
                else if (this.DataLayerCntxt == DataLayerCntxt.DRIP) {

                    this.model.push({ x: "D", y: res[0].DAILY_Sum })
                    this.model.push({ x: "R", y: res[0].REGULAR_Sum })
                    this.model.push({ x: "I", y: res[0].IRREGULAR_Sum })
                    this.model.push({ x: "P", y: res[0].POOR_Sum });

                    this.onReady(this.model);


                } else if (this.DataLayerCntxt == DataLayerCntxt.RGS) {

                    this.model.push({ x: "0-7", y: res[0].RGS7_Sum })
                    this.model.push({ x: "8-15", y: res[0].RGS15_Sum })
                    this.model.push({ x: "16-30", y: res[0].RGS30_Sum })
                    this.model.push({ x: "31-60", y: res[0].RGS60_Sum })
                    this.model.push({ x: "61-90", y: res[0].RGS90_Sum })
                    this.model.push({ x: "91-180", y: res[0].RGS180_Sum })

                    this.onReady(this.model);


                }

            }


        }//Ends SetHndlr()




    }

  

    enum DataLayerCntxt {
        BOBR = 1,
        EHVDM = 2,
        DRIP = 3,
        RGS = 4
    }


}


namespace SpendAnalyzer.BusinessObjects.ModelDL {


    export interface Model {
        x,
        y,
    }

    

}