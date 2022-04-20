namespace SpendAnalyzer.BusinessObjects {

    export class ModelController {

        private appRpstry: AppRpstry;
        private svcRqst: SvcRqst;
        private intl: ej.base.Internationalization
        private modelVz: ModelVz
        private progressBar: ej.progressbar.ProgressBar;
        private dataLayer: ModelDL;


        private tooltipBOBR: ej.popups.Tooltip

        constructor(appRpstry: AppRpstry) {
            this.appRpstry = appRpstry;
            this.svcRqst = new SvcRqst();

            this.dataLayer = new ModelDL(this.appRpstry);

            this.SetHndlrs();
            this.modelVz = new ModelVz()

            this.progressBar = new ej.progressbar.ProgressBar({
                type: 'Circular',
                value: 20,
                width: '160px',
                height: '160px',
                cornerRadius: 'Round',
                isIndeterminate: true,
                animation: {
                    enable: true,
                    duration: 2000,
                    delay: 0,
                },
                //load: progressLoad
            });
            this.progressBar.appendTo('#mdl-dshbrd-prgrss-a');


            this.intl = new ej.base.Internationalization();
            this.SetTootlTip();


        }

        private _dataVzCntxt: ModelVz.DataVzCntxt

        get DataVzCntxt() { return this._dataVzCntxt; }
        set DataVzCntxt(val) { this._dataVzCntxt = val }

        public Start() {

            $("#mdl-dshbrd-container-a").hide();             
                                                             
            $(this.progressBar.element).show();              
            this.DataVzCntxt = ModelVz.DataVzCntxt.BOBR
            this.dataLayer.GetBOBR();


            //this.svcRqst.Load(this.appRpstry.GetBOBR());     

            //this.svcRqst.Load(this.appRpstry.GetEHVDM())
            //this.modelVz.RenderChart(this.modelVz.GetBOBRSeries(this.appRpstry.GetBOBR()), AppRpstryCntxt.GetBOBR)
            //this.modelVz.RenderChart(this.modelVz.GetEHVDMSeries(this.appRpstry.GetEHVDM()), AppRpstryCntxt.GetEHVDM)
            //this.modelVz.RenderChart(this.modelVz.GetDRIPSeries(this.appRpstry.GetDRIP()), AppRpstryCntxt.GetDRIP)
            //this.modelVz.RenderChart(this.modelVz.GetRGSSeries(this.appRpstry.GetRGS()), AppRpstryCntxt.GetRGS)

        }

        private SetHndlrs() {

            this.dataLayer.onReady = (res) => {
                if (this.DataVzCntxt == ModelVz.DataVzCntxt.BOBR) {

                    $(this.progressBar.element).hide();

                    $("#mdl-dshbrd-container-a").removeClass("hidden")
                    $("#mdl-dshbrd-container-a").slideDown(2500, () => {

                        this.modelVz.SetBOBRChart();
                        this.modelVz.RenderChart(this.modelVz.GetBOBRSeries(res), ModelVz.DataVzCntxt.BOBR)

                        this.DataVzCntxt = ModelVz.DataVzCntxt.EHVDM
                        this.dataLayer.GetEHVDM();

                    });

                } else if (this.DataVzCntxt == ModelVz.DataVzCntxt.EHVDM) {

                    this.modelVz.SetEHVDMChart();
                    this.modelVz.RenderChart(this.modelVz.GetEHVDMSeries(res), ModelVz.DataVzCntxt.EHVDM);

                    this.DataVzCntxt = ModelVz.DataVzCntxt.DRIP
                    this.dataLayer.GetDRIP()

                }
                else if (this.DataVzCntxt == ModelVz.DataVzCntxt.DRIP) {

                    this.modelVz.SetDRIPChart();
                    this.modelVz.RenderChart(this.modelVz.GetDRIPSeries(res), ModelVz.DataVzCntxt.DRIP)

                    this.DataVzCntxt = ModelVz.DataVzCntxt.RGS
                    this.dataLayer.GetRGS();

                }
                else if (this.DataVzCntxt == ModelVz.DataVzCntxt.RGS) {

                    this.modelVz.SetRGSChart();
                    this.modelVz.RenderChart(this.modelVz.GetRGSSeries(res), ModelVz.DataVzCntxt.RGS)

                }



            }

        }

        private SetTootlTip() {
            this.tooltipBOBR = new ej.popups.Tooltip({
                //cssClass: 'e-tooltip-template-css',
                //Set tooltip open mode

                opensOn: 'Click',
                //Set tooltip content
                content: `<div class='row'><div class='col-lg-12'>
                <div class="card border border-info">
                    <div class="card-header bg-transparent border-success">
                        <h5 class="my-0 text-info"><i class="uil uil-info-circle me-3"></i>Success Card</h5>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title ">card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div></div>`,
            });
            //Render initialized Tooltip component
            this.tooltipBOBR.appendTo('#bobr-tooltip');
        }

    }
}