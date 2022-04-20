namespace SpendAnalyzer.BusinessObjects {


    export class ChnnlAnlytcsVz {

        private varNmPrfx = "chnnl-trend-"
        private dlg: ej.popups.Dialog
        private trnxnByValue: ej.charts.Chart;



        constructor() {

            $("#chnnl-dlg").after(`<div id='${this.varNmPrfx}-dlg'>
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

            this.SetDlg()
            this.SetChart();

        }


        public SetDlg() {

            this.dlg = new ej.popups.Dialog(
                {

                    header: '',
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
                    visible: false,
                    isModal: true,
                    beforeOpen: (e) => {
                        e.maxHeight = null
                    }


                }
            );//Ends the Dialog

            this.dlg.appendTo("#" + `${this.varNmPrfx}-dlg`)


        }

        private chart: ej.charts.Chart;
        private SetChart() {

            this.chart = new ej.charts.Chart({
                //Initializing Primary X Axis
                width: '1000px',
                //width: "100%",
                selectionMode: "Point",
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
                    //minimum: 0,
                    intervalType: "Auto",
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
                //tooltip: {
                //    fill: '#707070',
                //    enable: true, shared: true,
                //    //format: '${series.name} : ${point.y}',
                //    format: 'Count : ${point.y}',
                //    header: 'Month - ${point.x} '
                //},
                enableAnimation: true,
                //palettes: ['#61EFCD', '#CDDE1F', '#FEC200', '#CA765A', '#2485FA', '#F57D7D', '#C152D2',
                //    '#8854D9', '#3D4EB8', '#00BCD7'],
                palettes: ['#5b73e8', '#50a5f1', '#34c38f', '#f1b44c', '#6f42c1']
            });


            this.chart.appendTo('#' + `${this.varNmPrfx}-chrt`);
        }


        public GetSeries(dataSrc):ej.charts.SeriesModel {

            var dsMgr = new ej.data.DataManager({ json: dataSrc });

            var qry = new ej.data.Query().sortBy("DateStamp");

            //dsMgr.executeQuery(qry)

            return <ej.charts.SeriesModel>[{
                
                type: 'Area',
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
                yName: 'TrnxnAmt',
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


        public SetTrnxnByValueChart() {

            var counter = 1;

            this.trnxnByValue = new ej.charts.Chart({

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
                    intervalType: "Auto",
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
       
            });

            this.trnxnByValue.appendTo('#trnxn-by-value-chart');

        }

        public GetTrnxnByValueSeries(dataSrc) {


            var dsMgr = new ej.data.DataManager({ json: dataSrc });

            //var qry = new ej.data.Query().sortBy("DateStamp");

            //dsMgr.executeQuery(qry)



            return [{

                type: 'Bar',
                dataSource: dsMgr,
                //query: qry,
                xName: 'Channel', width: 2,

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
                    topLeft: 10, topRight: 10
                }
                //name:"Count",

            }]
        }


        public RenderChart(header, series, dataVzCntxt: ChnnlAnlytcsVz.DataVzCntxt) {

            if (dataVzCntxt == ChnnlAnlytcsVz.DataVzCntxt.TrnxnByValue) {
                this.trnxnByValue.setProperties({ series: series });
                this.trnxnByValue.animateSeries = true;
                this.trnxnByValue.animate(2500)
            }
            else {
                this.chart.setProperties({ series: series });
                this.dlg.header = header
                this.dlg.show();
                this.chart.animateSeries = true;
                this.chart.animate(2500)
                //this.colChrt.refreshBound()
            }

        }

    }
}

namespace SpendAnalyzer.BusinessObjects.ChnnlAnlytcsVz {

    export enum DataVzCntxt {

        ChannelAnalyticsSmry = 1,
        ChannelSmryDetails = 2,
        Channel6MthsSmry = 3,
        TrnxnByValue = 4,
        TrnxnByVolume = 5,

    }

}