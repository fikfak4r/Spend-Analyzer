namespace SpendAnalyzer.BusinessObjects {

    export class SvcRqst implements EventTarget {


        private delegate = document.createDocumentFragment()
        public onLoad: (res: any) => void;
        private dataStoreList: Array<DataStore>;
        private dataStore: DataStore;


        constructor() {
            this.dataStoreList = new Array<DataStore>();
            this.dataStore = new DataStore();
        }

        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void {
            this.delegate.addEventListener.apply(this.delegate, [type, listener])
        }
        dispatchEvent(event: Event): boolean {
            return this.delegate.dispatchEvent.apply(this.delegate, [event]);
        }
        removeEventListener(type: string, callback: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void {
            return this.delegate.removeEventListener.apply(this.delegate, callback)
        }


        public Load(rqstObj, appRpstryCntxt?: AppRpstryCntxt, cache?:boolean) {


            if (!this.Exist(appRpstryCntxt)) {
                
                Q.serviceRequest('/Services/Administration/User/ProcessRequest', rqstObj, res => {

                    if (cache) {
                        this.Cache(appRpstryCntxt, res);
                    }

                    this.onLoad(res);


                }, { error: function (x, y, z) { alert("Error: " + JSON.stringify(x) + '\\n' + y + '\\n' + z); } })

            }
            else {
                this.onLoad(this.dataStore.data);
            }



        }//Ends the Load 


        private Exist(appRpstryCntxt:AppRpstryCntxt) {

            if (this.GetCached(appRpstryCntxt) != undefined)
                return true;
           
            return false;

        }

        public GetCached(appRpstryCntxt: AppRpstryCntxt) {

            var arrList = this.dataStoreList.filter((val, index, arr) => {
                return val.appRpstryCntxt == appRpstryCntxt
            })

            if (arrList != undefined && arrList.length >= 1) {

                this.dataStore.data = arrList[0].data

                return arrList[0].data
               
            }

            return null

        }

        private Cache(appRpstryCntxt: AppRpstryCntxt, data) {

            this.dataStoreList.push({ appRpstryCntxt: appRpstryCntxt, data: data });

        }

        public RemoveCache(appRpstryCntxt: AppRpstryCntxt) {

            for (var x = 0; x < this.dataStoreList.length; x++) {

                if (this.dataStoreList[x].appRpstryCntxt == appRpstryCntxt) {

                    this.dataStoreList.splice(x, 1);

                    break;

                }

            }//Ends the for loop

        }


    }


    class DataStore {
         appRpstryCntxt: AppRpstryCntxt
         data: object
    }



}