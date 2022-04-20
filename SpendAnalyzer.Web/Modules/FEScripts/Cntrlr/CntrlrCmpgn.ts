namespace SpendAnalyzer.BusinessObjects {
    export class CntrlrCmpgn {

        private appRpstry: AppRpstry;
        private svcRqst: SvcRqst;
        private intl: ej.base.Internationalization
        private vzCmpgn: VzCmpgn
        private progressBar: ej.progressbar.ProgressBar;


        constructor(appRpstry: AppRpstry) {
            this.appRpstry = appRpstry;
            this.svcRqst = new SvcRqst();

            this.SetHndlrs()

            this.vzCmpgn = new VzCmpgn();

        }

        public Start() {
            //this.svcRqst.Load(this.appRpstry.GetUseCaseBySgmntForPieChart())
            this.vzCmpgn.RenderChart(this.vzCmpgn.GetUsCsBySgmntPieChartSeries(this.appRpstry.GetUseCaseBySgmntForPieChart()), AppRpstryCntxt.GetUseCaseBySgmntForPieChart)

        }

        private SetHndlrs() {

            this.svcRqst.onLoad = (res) => {

                if (this.appRpstry.AppRpstryCntxt == AppRpstryCntxt.GetUseCaseBySgmntForPieChart) {
                    this.vzCmpgn.RenderChart(this.vzCmpgn.GetUsCsBySgmntPieChartSeries(res), AppRpstryCntxt.GetUseCaseBySgmntForPieChart)
                }
            }
        }


    }
}