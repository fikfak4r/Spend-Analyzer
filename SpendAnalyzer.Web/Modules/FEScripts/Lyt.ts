namespace SpendAnalyzer.BusinessObjects {

    let intl;
    let spdAnlyzrTab: ej.navigations.Tab;
    let dashboard: ej.layouts.DashboardLayout;
    let trgt_alys_lyt: ej.layouts.DashboardLayout;


    export class Lyt {

        private trgrtdLyt: TrgrdLyt;


        constructor() {
            ej.base.enableRipple(true);
            intl = new ej.base.Internationalization();

            this.trgrtdLyt = new TrgrdLyt()

            this.SetSdBr();
            this.SdBrPaneOneComp('2020-10-01', '2020-11-30');

            spdAnlyzrTab = new ej.navigations.Tab({
                heightAdjustMode: 'None',
                showCloseButton: false,
                items: [
                    //{ header: { 'text': 'Summary' }, content: '#dashbrd' },
                    { header: { 'text': 'Dashboard' }, content: '#targted-analysis', },
                    { header: { 'text': 'Analysis by Customer' }, content: '#analysis-by-individual', },
                   
                ], selected: (e) => {

                    if(e.selectedIndex == 0)
                    {

                    }
                    else if (e.selectedIndex == 1) {

                        if (!trgt_alys_lyt) {

                            

                            $("#trgt-anlys-cntnr").removeClass("hide")

                            //trgt_alys_lyt = new ej.layouts.DashboardLayout({
                            //    cellSpacing: [10, 10],
                            //    columns: 8,

                            //})
                            //trgt_alys_lyt.appendTo('#trgt-anlys-lyt');

                        }

                        //trgt_alys_lyt.refresh();
                    }


                }
            });
            spdAnlyzrTab.appendTo('#spd-anlyzr-tab');

            this.trgrtdLyt.SetSdBr();

            //We're commenting this out for now
            /*
            dashboard = new ej.layouts.DashboardLayout({
                cellSpacing: [10, 10],
                columns: 8,
            })
            dashboard.appendTo('#dashboardLayout');
            */

            //var grandSplitter = new ej.layouts.Splitter(
            //    {
            //        orientation: "Vertical",
            //        height: '100%',
                    
            //        paneSettings: [
            //            { size: '25%', min: '25%' },
            //            { size: '75%', min: '45%' },
            //        ],
            //        width: '100%'
            //    })
            //grandSplitter.appendTo("#sidebar-splitter");
            

            

         

        }


        private SetSdBr() {



        }

        private CrdsBtns() {




            var progressButton = new ej.splitbuttons.ProgressButton({
                content: 'Details', isPrimary: true, cssClass: "e-round-corner e-outline e-success e-flat",
                duration: 20000
            });
            progressButton.appendTo('#spinleft');
            ej.base.rippleEffect($("#spinleft")[0])



            var trnx_cstmrs_spinleft = new ej.splitbuttons.ProgressButton({
                content: 'Details', isPrimary: true, cssClass: "e-round-corner e-outline e-success e-flat",
                duration: 20000
            });
            trnx_cstmrs_spinleft.appendTo('#trnx_cstmrs_spinleft');

            var trnx_cnt_spinleft = new ej.splitbuttons.ProgressButton({
                content: 'Details', isPrimary: true, cssClass: "e-round-corner e-outline e-success e-flat",
                duration: 20000
            });
            trnx_cnt_spinleft.appendTo('#trnx_cnt_spinleft');

            var trnx_amt_spinleft = new ej.splitbuttons.ProgressButton({
                content: 'Details', isPrimary: true, cssClass: "e-round-corner e-outline e-success e-flat",
                duration: 20000
            });
            trnx_amt_spinleft.appendTo('#trnx_amt_spinleft');

            
            
            



            var dshBrdCrdRpstry = new DshBrdCrdRpstry();

            dshBrdCrdRpstry.Load('2020-10-01', '2021-06-01')

            dshBrdCrdRpstry.onLoad = (res) => {
                //alert(JSON.stringify(res));
                //alert(SpdAnlyzrUtil.FormatNumber(intl.formatNumber(res[0].Amount_Sum, { format: 'n0' })))
                $("#trnx_cstmrs").text(SpdAnlyzrUtil.FormatNumber(intl.formatNumber(res[0].Cstmrs_Max, { format: 'n0' })))
                $("#trnx_amt").text(SpdAnlyzrUtil.FormatNumber(intl.formatNumber(res[0].Amount_Sum, { format: 'n0' })))
                $("#trnx_cnt").text(SpdAnlyzrUtil.FormatNumber(intl.formatNumber(res[0].TrnxCnt_Sum, { format: 'n0' })))
                this.Load2();
            }



        }


        public Load() {

            this.CrdsBtns();



            return;


            var dshBrdChnlSpdTypPie = new DshBrdChnlSpdTypPie();
            var dsdBrdTp10ChnnlGrd = new DsdBrdTp10ChnnlGrd();


            var _hrdrs = new HrdrsRpstry()
            _hrdrs.Load('SpdSmryChnl', '', 'Amt');

            var sgltnRpstry = new SngltnRpstry();

            var sgntnAggrgRpstry = new SngltnAggrgtRpstry();


            _hrdrs.onLoad = (hrdrs: HrdrsRpstry) => {

                //alert(JSON.stringify(hrdrs))

                var cl = _hrdrs.getCols(hrdrs.Res);
                //alert(cl)

                var clRplc = Q.format("REPLACE(REPLACE(Chnl, '__{0}', ''), '_', ' ')", hrdrs.Suffix)


                //======================================================================

                /*
                sgltnRpstry.Load(clRplc, cl, 'SpdSmryChnl', '2020-10-01', '2021-06-01')

                sgltnRpstry.onLoad = (res) => {
                    //alert(JSON.stringify(res))
                    //console.log(JSON.stringify(res))
                    dsdBrdTp10ChnnlGrd.Load(res)
                }
                */

                //=====================================================================



                var clSm = hrdrs.Res.map((val, index, arr) => {
                    return Q.format("Sum({0}) as {0}", val.COLUMN_NAME)
                }).join(',');

                sgntnAggrgRpstry.Load(cl, clSm, clRplc, 'SpdSmryChnl', '2020-10-01', '2021-06-01')

                sgntnAggrgRpstry.onLoad = (res) => {

                    dshBrdChnlSpdTypPie.UpdatePie(res)

                    dsdBrdTp10ChnnlGrd.Load(res)
                    //this.Load2()


                    //sgltnRpstry.Load(clRplc, cl, 'SpdSmryChnl', '2020-10-01', '2021-06-01')

                    //sgltnRpstry.onLoad = (res) => {
                    //    //alert(JSON.stringify(res))
                    //    //console.log(JSON.stringify(res))
                    //    dsdBrdTp10ChnnlGrd.Load(res)
                    //}


                }




            }


            //public Load() {


            //    var dashboard = new ej.layouts.DashboardLayout({
            //        cellSpacing: [10, 10],
            //        columns: 6,
            //        panels: [{
            //            'sizeX': 4, 'sizeY': 3, 'row': 0, 'col': 0,
            //            header: '<div class="e-header-text">Header Area</div><div class="header-border"></div>',
            //            content: '<div class="panel-content">Content Area</div>'
            //        },
            //        {
            //            'sizeX': 2, 'sizeY': 3, 'row': 0, 'col': 4,
            //            header: '<div class="e-header-text">Header Area</div><div class="header-border"></div>',
            //            content: '<div class="panel-content">Content Area</div>'
            //        },
            //        {
            //            'sizeX': 6, 'sizeY': 1, 'row': 3, 'col': 0,
            //            header: '<div class="e-header-text">Header Area</div><div class="header-border"></div>',
            //            content: '<div class="panel-content">Content Area</div>'
            //        }
            //        ]
            //    });
            //    dashboard.appendTo('#dynamicLayout');

            //}  

        }//Ends the Loads method


        public Load2() {
            var dshBrdChnlSpdTypPie = new DshBrdChnlSpdTypPie();
            var dsdBrdTp10ChnnlGrd = new DsdBrdTp10ChnnlGrd();


            var _hrdrs = new HrdrsRpstry()
            _hrdrs.Load('SpdSmryChnl', '', 'Amt');

            var sgltnRpstry = new SngltnRpstry();

            var sgntnAggrgRpstry = new SngltnAggrgtRpstry();


            _hrdrs.onLoad = (hrdrs: HrdrsRpstry) => {

                //alert(JSON.stringify(hrdrs))

                var cl = _hrdrs.getCols(hrdrs.Res);
                //alert(cl)

                var clRplc = Q.format("REPLACE(REPLACE(Chnl, '__{0}', ''), '_', ' ')", hrdrs.Suffix)




                var clSm = hrdrs.Res.map((val, index, arr) => {
                    return Q.format("Sum({0}) as {0}", val.COLUMN_NAME)
                }).join(',');

                sgntnAggrgRpstry.Load(cl, clSm, clRplc, 'SpdSmryChnl', '2020-10-01', '2021-06-01')

                sgntnAggrgRpstry.onLoad = (res) => {

                    dshBrdChnlSpdTypPie.UpdatePie(res)

                    dsdBrdTp10ChnnlGrd.Load(res)
                    this.Load3();

                }


            }

        }


        public Load3() {


            var dsdBrdTp10SpdTypGrd = new DsdBrdTp10SpdTypGrd();


            var _hrdrs = new HrdrsRpstry()
            _hrdrs.Load('SpdSmrySpdTyp', '', 'Amt');

            var sgltnRpstry = new SngltnRpstry();

            var sgntnAggrgRpstry = new SngltnAggrgtRpstry();


            _hrdrs.onLoad = (hrdrs: HrdrsRpstry) => {


                var cl = _hrdrs.getCols(hrdrs.Res);

                var clRplc = Q.format("REPLACE(REPLACE(Chnl, '__{0}', ''), '_', ' ')", hrdrs.Suffix)


                var clSm = hrdrs.Res.map((val, index, arr) => {
                    return Q.format("Sum({0}) as {0}", val.COLUMN_NAME)
                }).join(',');
               
                sgntnAggrgRpstry.Load(cl, clSm, clRplc, 'SpdSmrySpdTyp', '2020-10-01', '2021-06-01')

                sgntnAggrgRpstry.onLoad = (res) => {

                    dsdBrdTp10SpdTypGrd.Load(res)

                }


            }

        }//Ends the Load2 method


        private SdBrPaneOneComp(_startDate, _endDate) {
            //var dateRangePickerObject = new ej.calendars.DateRangePicker({
            //    format: 'MM/dd/yyyy', change: this.onDateRangeChange,
            //    startDate: _startDate,
            //    endDate: _endDate,
            //    showClearButton: false,
            //    allowEdit: false,
            //    presets: [
            //        { label: 'Last Month', start: new Date('10/1/2017'), end: new Date('10/31/2017') },
            //        { label: 'Last 3 Months', start: new Date('9/1/2017'), end: new Date('11/30/2017') },
            //        { label: 'All Time', start: new Date('6/1/2017'), end: new Date('11/30/2017') }
            //    ]
            //});
            //dateRangePickerObject.appendTo('#daterange');
        }

        public onDateRangeChange(args) {
        }

    }
}