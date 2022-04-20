namespace SpendAnalyzer.BusinessObjects {

    export class TmpltDL implements EventTarget {


        private delegate = document.createDocumentFragment()

        private appRpstry: AppRpstry;
        private svcRqst: SvcRqst;

        


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


            this.SetHndlr();


        }


        private _dataLayerCntxt;
        get DataLayerCntxt() { return this._dataLayerCntxt; }         
        set DataLayerCntxt(val) { this._dataLayerCntxt = val; }      
  

   

        private SetHndlr() {

            this.svcRqst.onLoad = (res) => {





            }


        }//Ends SetHndlr()




    }

  

    enum DataLayerCntxt {
     
    }


}


namespace SpendAnalyzer.BusinessObjects.SpdDshBrdDL {


    export interface NewInterface {

    }

    

}