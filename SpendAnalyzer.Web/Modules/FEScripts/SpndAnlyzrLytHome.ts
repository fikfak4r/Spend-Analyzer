namespace SpendAnalyzer.BusinessObjects {
    export class SpndAnlyzrLytHome {

        private appRpstry: AppRpstry;
        
        private cntrlrHome: CntrlrHome;
        ;
        private sdBr: SdBr;
        


        constructor() {

            
            this.appRpstry = new SpendAnalyzer.BusinessObjects.AppRpstry();

            this.appRpstry.PropStartDate = '2020-10-01'
            this.appRpstry.PropEndDate = '2021-03-31'

            this.sdBr = new SpendAnalyzer.BusinessObjects.SdBr(this.appRpstry)

            this.sdBr.GetSubmitButton().element.onclick = (args) => {

                this.sdBr.UpdateValues();

                this.cntrlrHome.Start();

            }

            this.cntrlrHome = new SpendAnalyzer.BusinessObjects.CntrlrHome(this.appRpstry);
            this.cntrlrHome.onLoad = () => {

                    this.sdBr.FetchBranches();
            }

            this.cntrlrHome.Start();

        }



    

    }

}