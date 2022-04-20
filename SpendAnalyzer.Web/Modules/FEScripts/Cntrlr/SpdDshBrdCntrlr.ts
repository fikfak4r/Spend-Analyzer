namespace SpendAnalyzer.BusinessObjects {
    export class SpdDshBrdCntrlr implements EventTarget {

        private delegate = document.createDocumentFragment()
        public onComplete: () => void;
        public onLoad: () => void;

        private appRpstry: AppRpstry;
        private svcRqst: SvcRqst;
        private dataLayer: SpdDshBrdDL;

        private intl: ej.base.Internationalization
        private spdDshBrdVz: SpdDshBrdVz
        private progressBar: ej.progressbar.ProgressBar;
        private progressBarB: ej.progressbar.ProgressBar;
        private progressBarC: ej.progressbar.ProgressBar;
        private dataTrend: Array<any>;

        private isLoaded: boolean = false;  
        private cntrlrCntxt: number;  

        private spnd_dshbrd_container_b_tab: ej.navigations.Tab;
        private spnd_dshbrd_container_c_tab: ej.navigations.Tab;


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
            //this.svcRqst = new SvcRqst();
            this.dataLayer = new SpdDshBrdDL(this.appRpstry);

            this.SetHndlrs();
            this.spdDshBrdVz = new SpdDshBrdVz()


            this.intl = new ej.base.Internationalization();

            this.dataTrend = new Array<any>();

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
            this.progressBar.appendTo('#spnd-dshbrd-prgrss-a');

            this.progressBarB = new ej.progressbar.ProgressBar({
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

            this.progressBarB.appendTo('#spnd-dshbrd-prgrss-b');
            $(this.progressBarB.element).hide();

            this.progressBarC = new ej.progressbar.ProgressBar({
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
            this.progressBarC.appendTo('#spnd-dshbrd-prgrss-c');
            $(this.progressBarC.element).hide();

          

            this.spnd_dshbrd_container_b_tab = new ej.navigations.Tab({
                heightAdjustMode: 'Content',
                showCloseButton: false,
                items: [

                    { header: { 'text': 'Transaction Value by Month' }, content: '#spnd-dshbrd-container-b-tab-cntnr-a', },
                    { header: { 'text': 'Transaction Volume by Month' }, content: '#spnd-dshbrd-container-b-tab-cntnr-b', },

                ], selected: (e) => {

                    if (e.selectedIndex == 1) {

                        $("#spnd-dshbrd-container-b-tab-cntnr-b").removeClass("hide")

                        this.DataVzCntxt = SpdDshBrdVz.DataVzCntxt.SectionBTab1;
                        this.dataLayer.GetTrnxSumryForVol();

                    }

                }
                
            })
            this.spnd_dshbrd_container_b_tab.appendTo('#spnd-dshbrd-container-b-tab');



            this.spnd_dshbrd_container_c_tab = new ej.navigations.Tab({
                heightAdjustMode: 'Content',
                showCloseButton: false,
                items: [
                    { header: { 'text': 'Cards' }, content: '#spnd-dshbrd-container-c-tab-cntnr-a', },
                    { header: { 'text': 'Chart' }, content: '#spnd-dshbrd-container-c-tab-cntnr-b', },

                ], selected: (e) => {

                    if (e.selectedIndex == 1) {
                        this.DataVzCntxt = SpdDshBrdVz.DataVzCntxt.SectionCTab1
                        //this.dataLayer.GetSectionCTab1();
                        this.dataLayer.GetSectionC();

                        //this.cntrlrCntxt = this.CntrlrCntxt_GetSpendCategoryChart;
                        //this.svcRqst.Load(this.appRpstry.GetTopSpndCatgrs(), AppRpstryCntxt.GetTopSpndCatgrs)
                    }

                }

            })
            this.spnd_dshbrd_container_c_tab.appendTo('#spnd-dshbrd-container-c-tab');



            
            $("#customer-cnt").click(() => {
                this.svcRqst.Load((this.appRpstry.GetMonthlyAcquisition()))
            })

            $("#spd-dshbrd-cstmrs-cnt-div").click(() => {
                //this.svcRqst.Load(this.appRpstry.GetCstmrsTrnxTrndByMnth())
                this.svcRqst.Load((this.appRpstry.GetMonthlyAcquisition()))

            })

            

            $("#spd-dshbrd-ttl-cr-val-div").click(() => {


                this.DataVzCntxt = SpdDshBrdVz.DataVzCntxt.SectionACrValTrend
                this.dataLayer.GetTrnxSumry();


            })

            $("#spd-dshbrd-ttl-dr-val-div").click(() => {

                this.DataVzCntxt = SpdDshBrdVz.DataVzCntxt.SectionADrValTrend
                this.dataLayer.GetTrnxSumry();

            })

            $("#spd-dshbrd-ttl-cr-vol-div").click(() => {

                this.DataVzCntxt = SpdDshBrdVz.DataVzCntxt.SectionACrVolTrend
                this.dataLayer.GetTrnxSumryForVol()

            })

            $("#spd-dshbrd-ttl-dr-vol-div").click(() => {

                this.DataVzCntxt = SpdDshBrdVz.DataVzCntxt.SectionADrVolTrend
                this.dataLayer.GetTrnxSumryForVol();

            })


        }


        private _dataVzCntxt: SpdDshBrdVz.DataVzCntxt

        get DataVzCntxt() { return this._dataVzCntxt; }
        set DataVzCntxt(val) { this._dataVzCntxt = val }


        public Start() {


            $("#spnd-dshbrd-container-a").hide();
            $("#spnd-dshbrd-container-b").hide();
            $("#spnd-dshbrd-container-c").hide();

            $(this.progressBar.element).show();

            this.DataVzCntxt = SpdDshBrdVz.DataVzCntxt.SectionA;

            this.dataLayer.GetSectionA()

        }


     

        public SetCrdsVals(res) {

            $("#spd-dshbrd-trnx-cstmrs").text(SpdAnlyzrUtil.FormatNumber(this.intl.formatNumber(res[0].Acid_DistinctCount, { format: 'n0' })))
            $("#spd-dshbrd-trnx-cstmrs").counterUp();

            $("#spd-dshbrd-trnx-cnt").text(SpdAnlyzrUtil.FormatNumber(this.intl.formatNumber(res[0].TrnxnCnt_Sum, { format: 'n0' })))
            $("#spd-dshbrd-trnx-cnt").counterUp()

            $("#spd-dshbrd-trnx-amt").text(this.intl.formatNumber(res[0].TrnxnAmt_Sum, { format: 'n0' }))
            $("#spd-dshbrd-trnx-amt").counterUp({
                delay: 50,
                formatter: function (n) {

                    return SpdAnlyzrUtil.FormatNumber(n);
                }
            })
            //$("#trgtd-trnx_amt").text(SpdAnlyzrUtil.FormatNumber(this.intl.formatNumber(res[0].TrnxnAmt_Sum, { format: 'n0' })))
            //$("#trgtd-trnx_amt").counterUp()

        }


        private SetHndlrs() {


            this.dataLayer.onReady = (data) => {


                if (this.DataVzCntxt == SpdDshBrdVz.DataVzCntxt.SectionA) {

                    $(this.progressBar.element).hide();

                    $("#spnd-dshbrd-container-a").removeClass("hidden")
                    $("#spnd-dshbrd-container-a").slideDown(2500, () => {

                        this.RenderSectionA(data);
                        $(this.progressBarB.element).show()

                        this.DataVzCntxt = SpdDshBrdVz.DataVzCntxt.SectionB;
                        this.dataLayer.GetSectionB();

                    });

                }
                else if (this.DataVzCntxt == SpdDshBrdVz.DataVzCntxt.SectionB) {

                    let dataObj = <SpdDshBrdDL.SestionB>data;
                    
                    $("#last-6-mnths-ttlcr").text(this.intl.formatNumber(dataObj.TotalCrValue, { format: 'n0' }));
                    $("#last-6-mnths-ttldr").text(this.intl.formatNumber(dataObj.TotalDrValue, { format: 'n0' }));


                    $(this.progressBarB.element).hide();


                    $("#spnd-dshbrd-container-b").removeClass("hidden");
                    $("#spnd-dshbrd-container-b").slideDown(2500, () => {

                        this.spdDshBrdVz.SetCstmrsTrnxnTrendChart()
                        this.spdDshBrdVz.RenderChart(this.spdDshBrdVz.GetGetCstmrsTrnxTrndSeries(dataObj.Trends), SpdDshBrdVz.DataVzCntxt.SectionB)


                        $(this.progressBarC.element).show()

                        this.DataVzCntxt = SpdDshBrdVz.DataVzCntxt.SectionC
                        this.dataLayer.GetSectionC();

                    });

                }
                else if (this.DataVzCntxt == SpdDshBrdVz.DataVzCntxt.SectionC) {


                    $(this.progressBarC.element).hide();
                    $("#top-spnd-ctrgy-container").children().remove();


                    let dataObj = <Array<SpdDshBrdDL.SestionC>>data;


                    $("#spnd-dshbrd-container-c").removeClass("hidden")
                    $("#spnd-dshbrd-container-c").slideDown(2500, () => {


                        dataObj.forEach((val, index, arr) => {
                            $("#top-spnd-ctrgy-container").append(this.GetTopSpndCtgryTmplt(val.SpendType, val.TrnxnCnt, val.TrnxnAmt))
                        })

                    });

                    this.onLoad()

                }
                else if (this.DataVzCntxt == SpdDshBrdVz.DataVzCntxt.SectionCTab1) {

                    let dataObj = <Array<SpdDshBrdDL.SestionC>>data;
                    this.spdDshBrdVz.SetSpendCategoryChart();
                    this.spdDshBrdVz.RenderChart(this.spdDshBrdVz.GetSpendCategoryChartSeries(dataObj), SpdDshBrdVz.DataVzCntxt.SectionCTab1)

                }
                else if (this.DataVzCntxt == SpdDshBrdVz.DataVzCntxt.SectionACrValTrend) {

                    let dataObj = <Array<SpdDshBrdDL.TrnxSumry>>data;
                    this.spdDshBrdVz.RenderChart(this.spdDshBrdVz.GetCrTrendSeries(dataObj), SpdDshBrdVz.DataVzCntxt.SectionACrValTrend, "Credit Transaction in Last 6 Months");

                }
                else if (this.DataVzCntxt == SpdDshBrdVz.DataVzCntxt.SectionACrVolTrend) {

                    let dataObj = <Array<SpdDshBrdDL.TrnxSumry>>data;

                    this.spdDshBrdVz.RenderChart(this.spdDshBrdVz.GetCrTrendSeries(dataObj), SpdDshBrdVz.DataVzCntxt.SectionACrVolTrend)


                }
                else if (this.DataVzCntxt == SpdDshBrdVz.DataVzCntxt.SectionADrValTrend) {

                    let dataObj = <Array<SpdDshBrdDL.TrnxSumry>>data;
                    this.spdDshBrdVz.RenderChart(this.spdDshBrdVz.GetDrTrendSeries(dataObj), SpdDshBrdVz.DataVzCntxt.SectionADrValTrend, "Debit Transaction in Last 6 Months");

                }
                else if (this.DataVzCntxt == SpdDshBrdVz.DataVzCntxt.SectionADrVolTrend) {

                    let dataObj = <Array<SpdDshBrdDL.TrnxSumry>>data;
                    this.spdDshBrdVz.RenderChart(this.spdDshBrdVz.GetDrTrendSeries(dataObj), SpdDshBrdVz.DataVzCntxt.SectionADrVolTrend)

                }
                else if (this.DataVzCntxt == SpdDshBrdVz.DataVzCntxt.SectionBTab1) {
                    let dataObj = <Array<SpdDshBrdDL.TrnxSumry>>data;



                    var dsMgr = new ej.data.DataManager({ json: dataObj });

                    var ttlCrqry = new ej.data.Query().group("TrnxType").aggregate("sum", "TotalCr");

                    var ttlCr = ttlCrqry.executeLocal(dsMgr)[0].aggregates["TotalCr - sum"]

                    $("#last-6-mnths-ttlcr-cnt").text(this.intl.formatNumber(ttlCr, { format: 'n0' }));


                    var ttlDrqry = new ej.data.Query().group("TrnxType").aggregate("sum", "TotalDr");

                    var ttlDr = ttlDrqry.executeLocal(dsMgr)[0].aggregates["TotalDr - sum"]

                    $("#last-6-mnths-ttldr-cnt").text(this.intl.formatNumber(ttlDr, { format: 'n0' }));


                    this.spdDshBrdVz.SetTrnxnVolumeByMonthChart()
                    this.spdDshBrdVz.RenderChart(this.spdDshBrdVz.GetTrnxnVolumeByMonthSeries(dataObj), SpdDshBrdVz.DataVzCntxt.SectionBTab1)


                }
            }

            return;


        }


        private RenderSectionA(data) {


            $("#customer-cnt").counterUp({
                delay: 150,
                formatter: function (n) {

                    //return n;
                    return SpdAnlyzrUtil.FormatNumber(n);
                }
            })

            $("#actv-cstmr-cnt").counterUp({
                delay: 150,
                formatter: function (n) {

                    //return n;
                    return SpdAnlyzrUtil.FormatNumber(n);
                }
            })

            var dataObj = <SpdDshBrdDL.SestionA>data;

            $("#customer-cnt").text(this.intl.formatNumber(dataObj.CustomerCount, { format: 'n0' }));
            $("#actv-cstmr-cnt").text(this.intl.formatNumber(dataObj.ActiveCustomers, { format: 'n0' }));



            $("#spd-dshbrd-ttl-cr-cnt").text(dataObj.CrVolume != null ? this.intl.formatNumber(dataObj.CrVolume, { format: 'n0' }):0)
            $("#spd-dshbrd-ttl-cr-cnt").counterUp({
                delay: 150,
                formatter: function (n) {

                    //return n;
                    return SpdAnlyzrUtil.FormatNumber(n);
                }
            })

            $("#spd-dshbrd-ttl-cr-val").text(dataObj.CrValue != null ? this.intl.formatNumber(dataObj.CrValue, { format: 'n0' }) : 0)
            $("#spd-dshbrd-ttl-cr-val").counterUp({
                delay: 150,
                formatter: function (n) {

                    //return n;
                    return SpdAnlyzrUtil.FormatNumber(n);
                }
            });

            $("#spd-dshbrd-ttl-dr-cnt").text(dataObj.DrVolume != null ? this.intl.formatNumber(dataObj.DrVolume, { format: 'n0' }):0)
            $("#spd-dshbrd-ttl-dr-cnt").counterUp({
                delay: 150,
                formatter: function (n) {

                    //return n;
                    return SpdAnlyzrUtil.FormatNumber(n);
                }
            })

            $("#spd-dshbrd-ttl-dr-val").text(dataObj.DrValue != null ? this.intl.formatNumber(dataObj.DrValue, { format: 'n0' }):0)
            $("#spd-dshbrd-ttl-dr-val").counterUp({
                delay: 150,
                formatter: function (n) {

                    //return n;
                    return SpdAnlyzrUtil.FormatNumber(n);
                }
            })

            $("#ttl-net-inflow").text(dataObj.CrValue != null ? this.intl.formatNumber(dataObj.CrValue - dataObj.DrValue, { format: 'n0' }):0)
            $("#ttl-net-inflow").counterUp({
                delay: 150,
                formatter: function (n) {

                    //return n;
                    return SpdAnlyzrUtil.FormatNumber(n);
                }
            })

        }//Ends the Render()


        private cnt = 1
        private soft_bg;
        private GetTopSpndCtgryTmplt(spndTyp, val, vol) {
            
            if (this.cnt == 5)
                this.cnt = 1

            if (this.cnt == 1) {
                this.soft_bg = 'bg-soft-primary'
            }
            else if (this.cnt == 2)
                this.soft_bg = 'bg-soft-warning'
            else if (this.cnt == 3)
                this.soft_bg = 'bg-soft-success'
            else if (this.cnt == 4)
                this.soft_bg = 'bg-soft-danger'

            ++this.cnt;

            return ` <div class="col-xl-4 col-sm-6">
                                <div class="card spd-anlyzr-crd">
                                    <div class="card-body">
                                        <div class="d-flex align-items-start">
                                            <div class="flex-shrink-0 me-4">
                                                <div class="avatar-sm">
                                                    <span class="avatar-title ${this.soft_bg} text-primary font-size-16 rounded-circle">
                                                        ${spndTyp.substr(0, 1).toUpperCase()}
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="flex-grow-1 align-self-center">
                                                <div class="border-bottom pb-1">

                                                    <h5 class="text-truncate font-size-16 mb-1">
                                                        <a class="text-dark">${spndTyp}</a>
                                                    </h5>
                                                    <!--<p>&nbsp;</p>-->
                                                    <!--
                                                    <p class="text-muted">
                                                        <i class="mdi mdi-account me-1"></i> Clifton Taylor
                                                    </p>
                                                    -->
                                                </div>
                                                <div class="row">
                                                    <div class="col-6">
                                                        <div class="mt-3">
                                                            <p class="text-muted mb-2">Value</p>
                                                            <h5 class="font-size-20 mb-0">&#x20A6;${SpdAnlyzrUtil.FormatNumber(this.intl.formatNumber(val, { format: 'n0' }))}</h5>
                                                        </div>
                                                    </div>
                                                    <div class="col-6">
                                                        <div class="mt-3">
                                                            <p class="text-muted mb-2">Volume</p>
                                                            <h5 class="font-size-20 mb-0">${SpdAnlyzrUtil.FormatNumber(this.intl.formatNumber(vol, { format: 'n0' }))}</h5>
                                                        </div>
                                                    </div>
                                                    <p class="text-muted mt-3 mb-0">
                                                        <span class="text-success me-1">
                                                            <i class="mdi mdi-arrow-up-bold me-1"></i>2.65%
                                                        </span> since last week
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
`
        }








    }





}