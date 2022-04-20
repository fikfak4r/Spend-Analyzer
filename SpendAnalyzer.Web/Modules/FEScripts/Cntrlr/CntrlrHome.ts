namespace SpendAnalyzer.BusinessObjects {
    export class CntrlrHome implements EventTarget {

        private delegate = document.createDocumentFragment()
        public onComplete: () => void;
        public onLoad: () => void;


        private appRpstry: AppRpstry;
        private svcRqst: SvcRqst;
        private intl: ej.base.Internationalization
        private progressBar: ej.progressbar.ProgressBar;
        private progressBarForActiveCstmrs: ej.progressbar.ProgressBar;
        private isLoaded: boolean = false;

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

            this.SetHndlrs();

            this.intl = new ej.base.Internationalization();


            this.progressBar = new ej.progressbar.ProgressBar({
                type: 'Circular',
                value: 20,
                width: '80px',
                height: '80px',
                cornerRadius: 'Round',
                isIndeterminate: true,
                animation: {
                    enable: true,
                    duration: 2000,
                    delay: 0,
                },
                //load: progressLoad
            });

            this.progressBar.appendTo('#cstmrs-div-prgrss');


            this.progressBarForActiveCstmrs = new ej.progressbar.ProgressBar({
                type: 'Circular',
                value: 20,
                width: '80px',
                height: '80px',
                cornerRadius: 'Round',
                isIndeterminate: true,
                animation: {
                    enable: true,
                    duration: 2000,
                    delay: 0,
                },
                //load: progressLoad
            });
            this.progressBarForActiveCstmrs.appendTo('#actv-cstmrs-div-prgrss');

            
            $("#cstmrs-div").click(() => {
                alert('Not yet implemented')
                //this.svcRqst.Load((this.appRpstry.GetMonthlyAcquisition()))
            })

            $("#actv-cstmrs-div").click(() => {
                alert('Not yet implemented')
                //this.svcRqst.Load(this.appRpstry.GetCstmrsTrnxTrndByMnth())
                //this.svcRqst.Load((this.appRpstry.GetMonthlyAcquisition()))
            })
        }


        public Start() {

            $("#cstmrs-div").hide();
            $("#actv-cstmrs-div").hide()

            $(this.progressBar.element).show();
            $(this.progressBarForActiveCstmrs.element).show();

            this.svcRqst.Load(this.appRpstry.GetHome());
        
        }


  



        private SetHndlrs() {

            this.svcRqst.onLoad = (res) => {


                if (this.appRpstry.AppRpstryCntxt == AppRpstryCntxt.GetHome) {
                    
                    $(this.progressBar.element).hide();
                    $(this.progressBarForActiveCstmrs.element).hide();

                    $("#cstmrs-div").removeClass("hidden")
                    $("#cstmrs-div").show();

                    $("#actv-cstmrs-div").removeClass("hidden")
                    $("#actv-cstmrs-div").slideDown(1500, () => {
                        this.Render(res)
                    });



                } 


                



            }

        }



        private Render(res) {


            $("#customer-cnt").text(this.intl.formatNumber(res[0].CUSTOMERCOUNT_Sum, { format: 'n0' }))
            $("#customer-cnt").counterUp({
                delay: 150,
                formatter: function (n) {

                    //return n;
                    return SpdAnlyzrUtil.FormatNumber(n);
                }
            })


            $("#actv-cstmr-cnt").text(this.intl.formatNumber(res[0].ACTIVECUSTOMER_Sum, { format: 'n0' }))
            $("#actv-cstmr-cnt").counterUp({
                delay: 150,
                formatter: function (n) {

                    //return n;
                    return SpdAnlyzrUtil.FormatNumber(n);
                }
            })


            if (!this.isLoaded) {
                this.isLoaded = true;
                this.onLoad();
            }



        }


      






    }
}