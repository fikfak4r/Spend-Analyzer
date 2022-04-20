namespace SpendAnalyzer.BusinessObjects {

    export class SpdDshBrdVz {

        private varNmPrfx = "ttl-cstmrs-cnt-trnd"
        private dlg: ej.popups.Dialog
        private colSpendCategoryChrt: ej.charts.Chart;


        constructor() {




                        $("#dlg").after(`<div id='${this.varNmPrfx}-dlg'>
               <div class="detail-trend-b">
            <div class="detail-trend-containe" style="padding-top:12px">

   


<div class="mt-1">
    <ul class="list-inline main-chart mb-0">
        <li class="list-inline-item chart-border-left me-0 border-0">
            <h3 class="text-primary">$<span data-plugin="counterup">2,371</span><span class="text-muted d-inline-block font-size-15 ms-3">Income</span></h3>
        </li>
        <li class="list-inline-item chart-border-left me-0">
            <h3>
                <span data-plugin="counterup">258</span><span class="text-muted d-inline-block font-size-15 ms-3">Sales</span>
            </h3>
        </li>
        <li class="list-inline-item chart-border-left me-0">
            <h3> <span class="text-danger me-1">
                    <i class="mdi mdi-arrow-down-bold me-1 font-size-20"></i>6.24%</span><span class="d-inline-block font-size-15 ms-3 text-danger">Since last week</span></h3>
        </li>
    </ul>
</div>




                                        <div id='${this.varNmPrfx}-chrt' ></div>

                                </div>
                                         </div>
                                        </div>`)
            this.SetDlg();
            this.SetChart();
            //this.SetCstmrsTrnxnTrendChart()
        }


        public SetDlg() {

            this.dlg = new ej.popups.Dialog(
                {

                    header: 'Credit Value Trend',
                    //content: "Content comes in here",
                    width: "1085px",
                    height: "750px",
                    showCloseIcon: true,
                    //target: document.getElementById("trgt-anlys-cntnr"),
                    //position: {X:"Right",Y:"Center"},
                    //buttons: [{ buttonModel: { content: 'Click me', isPrimary: true } }],
                    animationSettings: { effect: 'SlideRight' },
                    closeOnEscape: true,
                    enableResize: true,
                    allowDragging: true,
                    isModal: true,
                    visible: false,
                    beforeOpen: (e) => {
                        e.maxHeight = null
                    }


                }
            );//Ends the Dialog

            this.dlg.appendTo("#" + `${this.varNmPrfx}-dlg`)
            //this.dlg.appendTo("#dlg")


        }

        public RenderChart(series, dataVzCntxt: SpdDshBrdVz.DataVzCntxt, header?:string) {


            if (dataVzCntxt == SpdDshBrdVz.DataVzCntxt.SectionB) {

                //this.cstmrsTrnxnTrendChartDtMgr.dataSource.json = dataSrc
                //var qry = new ej.data.Query().sortBy("DateStamp_Max");

                //this.cstmrsTrnxnTrendChart.dataSource = null;
                //this.cstmrsTrnxnTrendChart.dataSource = this.cstmrsTrnxnTrendChartDtMgr;

                this.cstmrsTrnxnTrendChart.setProperties({
                    series: series
                });
                this.cstmrsTrnxnTrendChart.animateSeries = true;
                this.cstmrsTrnxnTrendChart.animate(2500);
                //this.cstmrsTrnxnTrendChart.dataBind();
                //this.cstmrsTrnxnTrendChart.refresh();

            }
            else if (dataVzCntxt == SpdDshBrdVz.DataVzCntxt.SectionCTab1) {
                this.colSpendCategoryChrt.setProperties({
                    series: series
                });
                this.colSpendCategoryChrt.animateSeries = true;
                this.colSpendCategoryChrt.animate(2500);
            }
            else if (dataVzCntxt == SpdDshBrdVz.DataVzCntxt.SectionBTab1) {

                this.trnxnVolumeByMonth.setProperties({
                    series: series
                });
                this.trnxnVolumeByMonth.animateSeries = true;
                this.trnxnVolumeByMonth.animate(2500);

            }
            else {
      
                this.colChrt.setProperties({ series: series })
                this.dlg.header = header;
                this.dlg.show();
                this.colChrt.animateSeries = true;
                this.colChrt.animate(2500)
                //this.colChrt.refreshBound()
                
            }


        }

        private colChrt: ej.charts.Chart;
        private SetChart() {

            this.colChrt = new ej.charts.Chart({
                //Initializing Primary X Axis
                width: '1000px',
                //width: "100%",
                selectionMode:"Point",
                margin: { top: 20, right: 2 },
                //width: "745px",
                primaryXAxis: {
                    valueType: 'DateTime',
                    labelFormat: 'MMM',
                    majorGridLines: { width: 0 },
                    intervalType: 'Months',
                    //labelStyle: { color: "#FFF" },
                    labelStyle: { color: "rgb(118, 1, 4)" },
                },
                //Initializing Primary Y Axis
                primaryYAxis: {
                    //maximum: 1800,
                    //interval: 50000000,
                    intervalType : "Auto",
                    //interval: 200,
                    labelFormat: 'n0',
                    lineStyle: { width: 0 },
                    //majorGridLines: { width: 1, color: "#F5F6F8" }
                    majorGridLines: { width: 1, color: "#eee" },
                    //labelStyle: {color:"#FFF"},
                    labelStyle: { color: "rgb(118, 1, 4)" },
                },
                useGroupingSeparator: true,
                chartArea: {
                    border: {
                        width: 0
                    },

                },
                background: "rgba(255, 255, 255,0.05)",
                annotations: [{
                    //content: content,
                    //x: '75px', y: '9%', coordinateUnits: 'Pixel', region: 'Chart'
                }],
                
                //series: [
                //    {
                //        type: 'SplineArea',
                //        dataSource: [{ "x": "2020-12-31", "y": 36389307200 }, { "x": "2021-03-31", "y": 36472565500 }, { "x": "2021-02-28", "y": 32791841500 }, { "x": "2020-10-31", "y": 36508808000 }, { "x": "2021-01-31", "y": 36288025300 }, { "x": "2020-11-30", "y": 35404298300 }],
                //        query: new ej.data.Query().sortBy("x"),
                //        xName: 'x',
                //        width: 2,
                //        marker: {
                //            visible: true,
                //            width: 10,
                //            height: 10,
                //            fill: 'white',
                //            border: { width: 2, color: '#0470D8' },
                //        },
                //        yName: 'y',
                //        //fill: 'rgba(4, 112, 216, 0.8)',
                //        fill: 'rgb(245, 246, 248, 0.8)',
                //        border: { width: 3, color: '#eee' },
                //        name:"x"
                //    },

                //],
                tooltip: {
                    fill: '#707070',
                    enable: true, shared: true,
                    //format: '${series.name} : ${point.y}',
                    format: 'Count : ${point.y}',
                    header: 'Month - ${point.x} '
                },
                enableAnimation: true,
                //palettes: ['#61EFCD', '#CDDE1F', '#FEC200', '#CA765A', '#2485FA', '#F57D7D', '#C152D2',
                //    '#8854D9', '#3D4EB8', '#00BCD7'],
                palettes: ['#5b73e8', '#50a5f1', '#34c38f', '#f1b44c', '#6f42c1']
            });

            this.colChrt.appendTo('#' + `${this.varNmPrfx}-chrt`);
        }

        private cstmrsTrnxnTrendChart: ej.charts.Chart;
        public SetCstmrsTrnxnTrendChart() {

            this.cstmrsTrnxnTrendChart = new ej.charts.Chart({
                //Initializing Primary X Axis
                //width: '885px',
                margin: { top: 24 },
                //width: "745px",
                //selectionMode: "Point",
               
                primaryXAxis: {
                    valueType: 'DateTimeCategory',
                    labelFormat: 'MMM',
                    majorGridLines: { width: 0 },
                    intervalType: 'Months',
 
                    labelStyle: { color: "rgb(118, 1, 4)" },
                    labelPlacement: "OnTicks",
                    labelIntersectAction:'None'
                    //rangePadding:"Round",
                    //minimum: "2021-03-31",
                    
                },
                //Initializing Primary Y Axis
                primaryYAxis: {

                    //maximum: 1800,
                    //interval: 10000000000,
                    //interval: 50000000,
                    //desiredIntervals: 5000000000,
                    intervalType:"Auto",
                    labelFormat: 'c0',
                    lineStyle: { width: 0, },
                    majorGridLines: { width: 1, color: "#eee" },
                    labelStyle: { color: "rgb(118, 1, 4)" },
                    //minimum: 10000000000,
                    //maximum: 100000000000

                },
                //useGroupingSeparator: true,
                chartArea: {
                    border: {
                        width: 0,
                        
                    },
                },
                background:"rgba(255, 255, 255,0.05)",
                //annotations: [{
                //    //content: content,
                //    //x: '75px', y: '9%', coordinateUnits: 'Pixel', region: 'Chart'
                //}],

                tooltip: {
                    fill: '#707070',
                    enable: true, shared: true,
                    format: '${series.name} : ${point.y}',
                    header: 'Month - ${point.x} ',
                    //enableMarker:true,
                },
                enableAnimation: true,
                //palettes: ['#61EFCD', '#CDDE1F', '#FEC200', '#CA765A', '#2485FA', '#F57D7D', '#C152D2',
                //    '#8854D9', '#3D4EB8', '#00BCD7'],
                palettes: ['#5b73e8', '#50a5f1', '#34c38f', '#f1b44c', '#6f42c1']
            });

            this.cstmrsTrnxnTrendChart.appendTo('#cstmr-trnxn-trnd-chrt');

        }

        public GetGetCstmrsTrnxTrndSeries(res): ej.charts.SeriesModel[] {

            //alert('Geting seies')

            //if (this.cstmrsTrnxnTrendChart == undefined)
            //    this.SetCstmrsTrnxnTrendChart()

            var dsMgr = new ej.data.DataManager({ json: res });

            var qry = new ej.data.Query().sortBy("DateStamp");

            var series = <ej.charts.SeriesModel[]>[]

            //series.push({

            //    type: 'SplineArea',
            //    dataSource: dsMgr,
            //    query: qry,
            //    xName: 'DateStamp_Max',
            //    width: 2,
            //    marker: {
            //        visible: true,
            //        width: 10,
            //        height: 10,
            //        fill: 'white',
            //        border: { width: 2, color: '#0470D8' },
            //    },
            //    yName: 'Acid_DistinctCount',

            //    //fill: 'rgba(4, 112, 216, 0.3)',
            //    fill: 'rgb(245, 200, 248, 0.8)',//Light ash
            //    //fill: 'rgba(241, 180, 76, 0.5)',//Orange
            //    border: { width: 3, color: '#eee' },

            //});


            //var ds = [{ "DateStamp": "2021-04-30", "TotalCr": 36389307200 }, { "DateStamp": "2021-03-31", "TotalCr": 36472565500 }, { "DateStamp": "2021-05-31", "TotalCr": 32791841500 }, { "DateStamp": "2021-06-30", "TotalCr": 36508808000 }, { "DateStamp": "2021-08-31", "TotalCr": 36288025300 }, { "DateStamp": "2021-07-31", "TotalCr": 35404298300 }]
            //var ds = [{ "DateStamp": new Date(2021,4,30), "TotalCr": 36389307200 }, { "DateStamp": new Date(2021,3,31), "TotalCr": 36472565500 }, { "DateStamp": new Date(2021,5,31), "TotalCr": 32791841500 }, { "DateStamp": new Date(2021,6,30), "TotalCr": 36508808000 }, { "DateStamp": new Date(2021,8,31), "TotalCr": 36288025300 }, { "DateStamp": new Date(2021,7,31), "TotalCr": 35404298300 }]

            series.push({

                //type: 'SplineArea',
                type: 'Area',
                dataSource: new ej.data.DataManager(res),
                //dataSource: [{ "x": "2020-12-31", "y": 36389307200 }, { "x": "2021-03-31", "y": 36472565500 }, { "x": "2021-02-28", "y": 32791841500 }, { "x": "2020-10-31", "y": 36508808000 }, { "x": "2021-01-31", "y": 36288025300 }, { "x": "2020-11-30", "y": 35404298300 }],
                query: qry,
                xName: 'DateStamp', width: 2,
                marker: {

                    visible: true,
                    width: 17,
                    height: 17,
                    //fill: 'white',
                    //fill:'rgb(252, 227, 138)',
                    fill: 'rgb(255, 255, 255)',
                    //border: { width: 2, color: '#0470D8' }, 
                    //border: { width: 2, color: 'rgb(243, 141, 54)' },
                    border: { width: 1, color: 'rgb(33, 64, 220)' },
                    //border: { width: 2, color: '#FFF' },
                },
                yName: 'TotalCr', name: "Credit",
                //fill: 'rgba(4, 112, 216, 0.3)',
                //fill: 'rgba(238,238,238, 0.8)',
                //fill: 'rgba(33, 64, 220, 0.35)',
                fill: 'url(#material-gradient-chart-cr)',
                //fill: 'rgb(243, 141, 54)',
                //fill: 'rgba(241, 180, 76, 0.5)',//Orange
                //border: { width: 3, color: '#f1b44c' },
                //border: { width: 4, color: 'rgb(243, 141, 54)' },
                border: { width: 1, color: '#5b73e8' },


            });

            series.push({

                type: 'Area',
                dataSource: dsMgr,
                query: qry,
                xName: 'DateStamp', width: 2,
                marker: {
                    visible: true,
                    width: 17,
                    height: 17,
                    fill: 'white',
                    border: { width: 1, color: '#EC7063' },
                },
                yName: 'TotalDr', name: "Debit",

                //fill: 'rgba(4, 112, 216, 0.3)',
                //fill: 'rgb(205, 200, 248, 0.8)',//Light ash
                //fill: "#F0B27A",
                fill: 'url(#material-gradient-chart)',
                //fill: 'rgba(241, 180, 76, 0.5)',//Orange
                border: { width: 1, color: '#EC7063' },

            })


            return series;


        }


        private trnxnVolumeByMonth: ej.charts.Chart;
        public SetTrnxnVolumeByMonthChart() {

            this.trnxnVolumeByMonth = new ej.charts.Chart({
                //Initializing Primary X Axis
                //width: '885px',
                margin: { top: 24 },
                //width: "745px",
                selectionMode: "Point",

                primaryXAxis: {
                    valueType: 'DateTime',
                    labelFormat: 'MMM',
                    majorGridLines: { width: 0 },
                    intervalType: 'Months',
                    labelStyle: { color: "rgb(118, 1, 4)" },

                },
                //Initializing Primary Y Axis
                primaryYAxis: {

                    //maximum: 1800,
                    //interval: 10000000000,
                    //interval: 50000000,
                    //desiredIntervals: 5000000000,
                    intervalType: "Auto",
                    labelFormat: 'n0',
                    lineStyle: { width: 0, },
                    majorGridLines: { width: 1, color: "#eee" },
                    labelStyle: { color: "rgb(118, 1, 4)" },
                    //minimum: 10000000000,
                    //maximum: 100000000000

                },
                useGroupingSeparator: true,
                chartArea: {
                    border: {
                        width: 0,
                    },
                },
                background: "rgba(255, 255, 255,0.05)",
                //annotations: [{
                //    //content: content,
                //    //x: '75px', y: '9%', coordinateUnits: 'Pixel', region: 'Chart'
                //}],

                tooltip: {
                    fill: '#707070',
                    enable: true, shared: true,
                    format: '${series.name} : ${point.y}',
                    header: 'Month - ${point.x} ',
                    //enableMarker:true,
                },
                enableAnimation: true,
                //palettes: ['#61EFCD', '#CDDE1F', '#FEC200', '#CA765A', '#2485FA', '#F57D7D', '#C152D2',
                //    '#8854D9', '#3D4EB8', '#00BCD7'],
                palettes: ['#5b73e8', '#50a5f1', '#34c38f', '#f1b44c', '#6f42c1']
            });

            this.trnxnVolumeByMonth.appendTo('#trnxn-vol-by-mnth');

        }

        public GetTrnxnVolumeByMonthSeries(res): ej.charts.SeriesModel[] {


            var dsMgr = new ej.data.DataManager({ json: res });

            var qry = new ej.data.Query().sortBy("DateStamp");

            var series = <ej.charts.SeriesModel[]>[]

            series.push({

                type: 'Area',
                dataSource: new ej.data.DataManager(res),
                query: qry,
                xName: 'DateStamp', width: 2,
                marker: {

                    visible: true,
                    width: 17,
                    height: 17,
                    fill: 'rgb(255, 255, 255)',
                    border: { width: 1, color: 'rgb(33, 64, 220)' },

                },
                yName: 'TotalCr', name: "Credit",
                fill: 'url(#material-gradient-chart-cr)',

                border: { width: 1, color: '#5b73e8' },


            });

            series.push({

                type: 'Area',
                dataSource: dsMgr,
                query: qry,
                xName: 'DateStamp', width: 2,
                marker: {
                    visible: true,
                    width: 17,
                    height: 17,
                    fill: 'white',
                    border: { width: 1, color: '#EC7063' },
                },
                yName: 'TotalDr', name: "Debit",
                fill: 'url(#material-gradient-chart)',
                border: { width: 1, color: '#EC7063' },

            })


            return series;


        }



        public GetCrTrendSeries(dataSrc) {

           

            var dsMgr = new ej.data.DataManager({ json: dataSrc });

            var qry = new ej.data.Query().sortBy("DateStamp");

            //dsMgr.executeQuery(qry)



            return [{

                type: 'SplineArea',
                dataSource: dsMgr,
                query: qry,
                xName: 'DateStamp', width: 2,
                // marker: {
                //     visible: true,
                //     width: 20,
                //     height: 20,
                //     fill: 'white',
                //     border: { width: 3, color: '#0470D8' },

                //},
                marker: {
                    visible: true,
                    width: 20,
                    height: 20,
                    //fill: 'white',
                    fill: 'rgb(252, 227, 138)',
                    //border: { width: 2, color: '#0470D8' }, 
                    border: { width: 2, color: 'rgb(243, 141, 54)' },
                    //border: { width: 2, color: '#FFF' },
                },
                yName: 'TotalCr',
                enableTooltip: true,
                //fill: 'rgba(4, 112, 216, 0.3)',
                //fill: 'rgb(245, 246, 248, 0.8)',//Light ash
                //fill: 'rgba(238,238,238, 0.4)',
                //fill: 'rgba(241, 180, 76, 0.5)',//Orange
                //border: { width: 5, color: '#6f42c1' },
                border: { width: 4, color: '#eee' },
                fill: 'url(#material-gradient-chart-cr)',

                //name:"Count",

            }] 




        }



        public GetDrTrendSeries(dataSrc) {


            var dsMgr = new ej.data.DataManager({ json: dataSrc });

            var qry = new ej.data.Query().sortBy("DateStamp");

            //dsMgr.executeQuery(qry)



            return [{

                type: 'SplineArea',
                dataSource: dsMgr,
                query: qry,
                xName: 'DateStamp', width: 2,
                // marker: {
                //     visible: true,
                //     width: 20,
                //     height: 20,
                //     fill: 'white',
                //     border: { width: 3, color: '#0470D8' },

                //},
                marker: {
                    visible: true,
                    width: 20,
                    height: 20,
                    //fill: 'white',
                    fill: 'rgb(252, 227, 138)',
                    //border: { width: 2, color: '#0470D8' }, 
                    border: { width: 2, color: 'rgb(243, 141, 54)' },
                    //border: { width: 2, color: '#FFF' },
                },
                yName: 'TotalDr',
                enableTooltip: true,
                //fill: 'rgba(4, 112, 216, 0.3)',
                //fill: 'rgb(245, 246, 248, 0.8)',//Light ash
                //fill: 'rgba(238,238,238, 0.4)',
                //fill: 'rgba(241, 180, 76, 0.5)',//Orange
                //border: { width: 5, color: '#6f42c1' },
                border: { width: 4, color: '#eee' },
                fill: 'url(#material-gradient-chart-dr)',

                //name:"Count",

            }]





        }


        public SetSpendCategoryChart() {

            var counter = 1;

            this.colSpendCategoryChrt = new ej.charts.Chart({

                selectionMode: "Point",
                margin: { top: 20, right: 2 },
                primaryXAxis: {
                    //valueType: 'Category',
                    //labelFormat: '',
                    majorGridLines: { width: 0 },
                    valueType: "Category",
                    labelStyle: { color: "rgb(118, 1, 4)" },
                },
                primaryYAxis: {

                    //maximum: 1800,
                    minimum: 0,
                    //interval: 2500000,
                    intervalType:"Auto",
                    labelFormat: 'n0',
                    lineStyle: { width: 0 }, 
                    //majorGridLines: { width: 1, color: "#F5F6F8" } 
                    majorGridLines: { width: 1, color: "#eee" }, 
                    labelStyle: { color: "rgb(118, 1, 4)" }, 
                },
                useGroupingSeparator: true,
                chartArea: {
                    border: {
                        width: 0
                    },

                },
                background: "rgba(255, 255, 255,0.05)",
                annotations: [{
                    //content: content,
                    //x: '75px', y: '9%', coordinateUnits: 'Pixel', region: 'Chart'
                }],

             
                tooltip: {
                    fill: '#707070',
                    enable: true, shared: true,
                    //format: '${series.name} : ${point.y}',
                    //format: 'Count : ${point.y}',
                    //header: 'Month - ${point.x} '
                },
                enableAnimation: true,
                /*
                pointRender: (e) => {


                    switch (counter) {
                        case 1:
                            //e.fill = "rgba(255, 229, 71, 0.55)"
                            e.fill = "rgb(87, 201, 184)"
                            break;
                        case 2:
                            //e.fill = "rgba(255, 174, 43, 0.55)"
                            e.fill = "rgb(64, 64, 65)"
                            break;
                        case 3:
                            //e.fill = "rgba(255, 97, 17, 0.55)";
                            e.fill = "rgb(53, 124, 210)"
                            break;
                        case 4:
                            //e.fill = "rgb(229, 101, 144)"
                             e.fill = "#ffc000"
                            break;
                        case 5:
                            e.fill = "rgb(87, 201, 184)"
                            break;
                        case 6:
                            e.fill = "rgba(255, 97, 17, 0.55)";
                            break;
                        case 7:
                            e.fill = "rgba(205, 23, 28, 0.55)"
                            break;
                        case 8:
                            e.fill = "rgba(118, 1, 4, 0.55)"
                            break;
                        case 9:
                            e.fill = "rgba(205, 23, 28, 0.55)"
                    }
                    ++counter
                }
                */
                //palettes: ['#61EFCD', '#CDDE1F', '#FEC200', '#CA765A', '#2485FA', '#F57D7D', '#C152D2', '#8854D9', '#3D4EB8', '#00BCD7'],
                //palettes: ['#5b73e8', '#50a5f1', '#34c38f', '#f1b44c', '#6f42c1']
            });

            this.colSpendCategoryChrt.appendTo('#top-spnd-ctrgy-container-chart');

        }


        public GetSpendCategoryChartSeries(dataSrc) {


            var dsMgr = new ej.data.DataManager({ json: dataSrc });

            //var qry = new ej.data.Query().sortBy("DateStamp");

            //dsMgr.executeQuery(qry)



            return [{

                type: 'Column',
                dataSource: dsMgr,
                //query: qry,
                xName: 'SpendType', width: 2,
                
                // marker: {
                //     visible: true,
                //     width: 20,
                //     height: 20,
                //     fill: 'white',
                //     border: { width: 3, color: '#0470D8' },

                //},
                marker: {
                    visible: true,
                    width: 20,
                    height: 20,
                    //fill: 'white',
                    fill: 'rgb(252, 227, 138)',
                    //border: { width: 2, color: '#0470D8' }, 
                    border: { width: 2, color: 'rgb(243, 141, 54)' },
                    //border: { width: 2, color: '#FFF' },
                },
                yName: 'TrnxnAmt',
                enableTooltip: true,
                //fill: 'rgba(4, 112, 216, 0.3)',
                //fill: 'rgb(245, 246, 248, 0.8)',//Light ash
                //fill: 'rgba(238,238,238, 0.4)',
                //fill: 'rgba(241, 180, 76, 0.5)',//Orange
                //border: { width: 5, color: '#6f42c1' },
                border: { width: 0, color: '#eee' },
                fill: 'url(#material-gradient-pink)',
                cornerRadius: {
                    topLeft:10, topRight:10
                }
                //name:"Count",

            }]
        }


        //**************************************************************************************************************************
        public GetMonthlyAcquisitionSeries(res):ej.charts.SeriesModel[] {

            //var res1 = res.map((val, index, arr) => {
            //    return { x: val.StartRelationshipDate_Max, y: val.CustomerCount_Count }
            //}) 

            //this.colChrt.series[0].dataSource = res1
            //this.colChrt.series[0].visible = false
            //this.colChrt.refresh()
            //this.dlg.show()
            //return;

            var dsMgr = new ej.data.DataManager({ json: res });

            var qry = new ej.data.Query().sortBy("StartRelationshipDate_Max");
            dsMgr.executeQuery(qry)
          
            return [{
                       
                type: 'SplineArea',
                dataSource: dsMgr,
                query: qry,
                xName: 'StartRelationshipDate_Max', width: 2,
                // marker: {
                //     visible: true,
                //     width: 20,
                //     height: 20,
                //     fill: 'white',
                //     border: { width: 3, color: '#0470D8' },
                            
                //},
                marker: {
                    visible: true,
                    width: 20,
                    height: 20,
                    //fill: 'white',
                    fill: 'rgb(252, 227, 138)',
                    //border: { width: 2, color: '#0470D8' }, 
                    border: { width: 2, color: 'rgb(243, 141, 54)' },
                    //border: { width: 2, color: '#FFF' },
                },
                yName: 'CustomerCount_Count',
                enableTooltip:true,
                //fill: 'rgba(4, 112, 216, 0.3)',
                //fill: 'rgb(245, 246, 248, 0.8)',//Light ash
                fill: 'rgba(238,238,238, 0.4)',
                //fill: 'rgba(241, 180, 76, 0.5)',//Orange
                //border: { width: 5, color: '#6f42c1' },
                border: { width: 4, color: '#fff' },

                //name:"Count",
                       
            }] 
               

         

        }

    





    }





}

namespace SpendAnalyzer.BusinessObjects.SpdDshBrdVz {

   export enum DataVzCntxt {
        SectionA = 1,
        SectionB = 2,
        SectionC = 3,
        SectionCTab1 = 4,
        SectionACrValTrend = 5,
        SectionACrVolTrend = 6,
        SectionADrValTrend = 7,
        SectionADrVolTrend = 8,
        SectionBTab1 = 9,
    }

}