namespace SpendAnalyzer.BusinessObjects {

    export class TrgtdAnlysCrds {

        private intl: ej.base.Internationalization
        private svcRqst: SvcRqst;
        private appRpstry: AppRpstry
        public progressButton_CstmrsCnt: ej.splitbuttons.ProgressButton;
        public isCustomerCntMntlyInit: boolean;


        constructor(appRpstry: AppRpstry, svcRqst: SvcRqst) {
            this.appRpstry = appRpstry;
            this.svcRqst = svcRqst;
            this.intl = new ej.base.Internationalization();
            this.CrdsBtns();
        }


        public SetCstmrCnt(res) {
            $("#trgtd-cstmrs_cnt").text(SpdAnlyzrUtil.FormatNumber(this.intl.formatNumber(res[0].CustomerId_Count, { format: 'n0' })))
            $("#trgtd-cstmrs_cnt").counterUp();
            //$("#trgtd-cstmrs_cnt").html(Q.format('<span data-plugin="counterup" >{0}</span>', SpdAnlyzrUtil.FormatNumber(this.intl.formatNumber(res[0].CustomerId_Count, { format: 'n0' }))))
            //$("#trgtd-cstmrs_cnt").html(Q.format('<span data-plugin="counterup" >{0}</span>', 1000000))
        }


        public SetCrdsVals(res) {
            $("#trgtd-trnx_cstmrs").text(SpdAnlyzrUtil.FormatNumber(this.intl.formatNumber(res[0].Acid_DistinctCount, { format: 'n0' })))
            $("#trgtd-trnx_cstmrs").counterUp();

            $("#trgtd-trnx_cnt").text(SpdAnlyzrUtil.FormatNumber(this.intl.formatNumber(res[0].TrnxnCnt_Sum, { format: 'n0' })))
            $("#trgtd-trnx_cnt").counterUp()

            $("#trgtd-trnx_amt").text(this.intl.formatNumber(res[0].TrnxnAmt_Sum, { format: 'n0' }))
            $("#trgtd-trnx_amt").counterUp({
                delay:50,
                formatter: function (n) {
                    
                    return SpdAnlyzrUtil.FormatNumber(n);
                }})
            //$("#trgtd-trnx_amt").text(SpdAnlyzrUtil.FormatNumber(this.intl.formatNumber(res[0].TrnxnAmt_Sum, { format: 'n0' })))
            //$("#trgtd-trnx_amt").counterUp()

        }

        private CrdsBtns() {

            this.progressButton_CstmrsCnt = new ej.splitbuttons.ProgressButton({
                content: 'Details', isPrimary: true, cssClass: "e-round-corner e-outline e-flat",
                duration: 20000
            });
            this.progressButton_CstmrsCnt.appendTo('#trgtd-spinleft');

            var trnx_cstmrs_spinleft = new ej.splitbuttons.ProgressButton({
                content: 'Details', isPrimary: true, cssClass: "e-round-corner e-outline e-flat",
                duration: 20000
            });
            trnx_cstmrs_spinleft.appendTo('#trgtd-trnx_cstmrs_spinleft');

            var trnx_cnt_spinleft = new ej.splitbuttons.ProgressButton({
                content: 'Details', isPrimary: true, cssClass: "e-round-corner e-outline e-flat",
                duration: 20000
            });
            trnx_cnt_spinleft.appendTo('#trgtd-trnx_cnt_spinleft');

            var trnx_amt_spinleft = new ej.splitbuttons.ProgressButton({
                content: 'Details', isPrimary: true, cssClass: "e-round-corner e-outline e-flat",
                duration: 20000
            });
            trnx_amt_spinleft.appendTo('#trgtd-trnx_amt_spinleft');







            this.progressButton_CstmrsCnt.element.onclick = (args) => {

                this.svcRqst.Load(this.appRpstry.GetMonthlyAcquisition())



                //var rounded = new ej.progressbar.ProgressBar({
                //    type: 'Circular',
                //    value: 20,
                //    width: '60px',
                //    height: '60px',
                //    cornerRadius: 'Round',
                //    isIndeterminate: true,
                //    animation: {
                //        enable: true,
                //        duration: 2000,
                //        delay: 0,
                //    },
                //    //load: progressLoad
                //});
                //rounded.appendTo('#progress-dlg-crd');

                
            }//Ends the Click handler






        }


        private monthlyAcquisition: ej.charts.Chart;
        private monthlyTab: ej.navigations.Tab
        private cstmrsCnt_Dlg: ej.popups.Dialog

        public RndrMonthlyAcquisitionLnChrt(res) {

            this.isCustomerCntMntlyInit = true;
           
            $("#trgd-analys-monthly-acquisition-tab-pane-1").removeClass("hide");

            this.progressButton_CstmrsCnt.cssClass = 'e-round-corner e-outline e-flat'
            this.progressButton_CstmrsCnt.refresh();

            this.cstmrsCnt_Dlg = new ej.popups.Dialog(
                {

                    header: "Customer Details",
                    //content: "Content comes in here",
                    width: "795px",
                    showCloseIcon: true,
                    //target: document.getElementById("trgt-anlys-cntnr"),
                    //position: {X:"Right",Y:"Center"},
                    //buttons: [{ buttonModel: { content: 'Click me', isPrimary: true } }],
                    animationSettings: { effect: 'SlideRight' },
                    closeOnEscape: true,
                    enableResize: true,
                    allowDragging: true,

                    isModal: true,


                }
            );//Ends the Dialog

            this.cstmrsCnt_Dlg.appendTo("#trgtd-trnx_cnt_spinleft-dlg")

            var splitButton = new ej.splitbuttons.SplitButton({ items: [{ text: "Monthly" }, { text: "Weekly" }], content: "Filter", cssClass: "float-right" });
            splitButton.appendTo('#split-btn-crd');

            this.monthlyTab = new ej.navigations.Tab({
                heightAdjustMode: 'None',
                showCloseButton: false,
                items: [
                    { header: { 'text': 'Customer Acquisition Trends' }, content: '#trgd-analys-monthly-acquisition-tab-pane-1' },
                    { header: { 'text': 'Customer Acquisition By Branch' }, content: '#trgd-analys-monthly-acquisition-tab-pane-2', },

                ],
            })

            this.monthlyTab.appendTo("#trgd-analys-monthly-acquisition-tab")


            var dsMgr = new ej.data.DataManager({ json: res });

            var qry = new ej.data.Query().sortBy("StartRelationshipDate_Max")


            this.monthlyAcquisition = new ej.charts.Chart({
                //Initializing Primary X Axis
                //width: '885px',
                margin: { top: 40, },
                primaryXAxis: {
                    valueType: 'DateTime',
                    labelFormat: 'MMM',
                    majorGridLines: { width: 0 },
                    intervalType: 'Months'
                },
                //Initializing Primary Y Axis
                primaryYAxis: {
                    //maximum: 1800,
                    interval: 100,
                    labelFormat: 'n0',
                },
                useGroupingSeparator: true,
                chartArea: {
                    border: {
                        width: 0
                    }
                },
                annotations: [{
                    //content: content,
                    //x: '75px', y: '9%', coordinateUnits: 'Pixel', region: 'Chart'
                }],
                series: [
                    {
                        type: 'Column',
                        dataSource: dsMgr,
                        query:qry,
                        xName: 'StartRelationshipDate_Max', width: 2, marker: {
                            visible: true,
                            width: 10,
                            height: 10,
                            fill: 'white',
                            border: { width: 2, color: '#0470D8' },
                        },
                        yName: 'CustomerId_Count',
                        fill: 'rgba(4, 112, 216, 0.3)',
                        border: { width: 0.5, color: '#0470D8' },

                    },

                ],
                tooltip: {
                    fill: '#707070',
                    enable: true, shared: true,
                    format: '${series.name} : ${point.y}',
                    header: 'Month - ${point.x} '
                },
                enableAnimation: true,
                //palettes: ['#61EFCD', '#CDDE1F', '#FEC200', '#CA765A', '#2485FA', '#F57D7D', '#C152D2',
                //    '#8854D9', '#3D4EB8', '#00BCD7'],
                palettes: ['#5b73e8', '#50a5f1', '#34c38f', '#f1b44c', '#6f42c1']
            });
            this.monthlyAcquisition.appendTo('#trgd-analys-monthly-acquisition-chrt');

        }

        public UpdateMonthlyAcquisitionLnChrt(res) {

            this.progressButton_CstmrsCnt.cssClass = 'e-round-corner e-outline e-flat'
            this.progressButton_CstmrsCnt.refresh();
            this.cstmrsCnt_Dlg.show();

            var dsMgr = new ej.data.DataManager({ json: res });

            var qry = new ej.data.Query().sortBy("StartRelationshipDate_Max")

            var series = []


            this.monthlyAcquisition.setProperties({
                //Initializing Chart Series
                series: [{
                    type: 'Column',
                    dataSource: dsMgr,
                    query: qry,
                    xName: 'StartRelationshipDate_Max', width: 2, marker: {
                        visible: true,
                        width: 10,
                        height: 10,
                        fill: 'white',
                        border: { width: 2, color: '#0470D8' },
                    },
                    yName: 'CustomerId_Count',
                    fill: 'rgba(4, 112, 216, 0.3)',
                    border: { width: 0.5, color: '#0470D8' },

                }],

            });

            this.monthlyAcquisition.dataBind();
            this.monthlyAcquisition.refresh();

        }



    }

}