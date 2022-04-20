namespace SpendAnalyzer.BusinessObjects {

    export class ModelVz {

        private chartBOBR: ej.charts.Chart;
        private chartEHVDM: ej.charts.Chart;
        private chartDRIP: ej.charts.Chart;
        private chartRGS: ej.charts.Chart;

        constructor() {
            //this.SetBOBRChart()
            //this.SetEHVDMChart();
            //this.SetDRIP()
            //this.SetRGSChart()
        }


        public RenderChart(series, dataVzCntxt: ModelVz.DataVzCntxt) {


            if (dataVzCntxt == ModelVz.DataVzCntxt.BOBR) {

                this.chartBOBR.setProperties({ series: series })

                this.chartBOBR.animateSeries = true;
                this.chartBOBR.animate(2500)

            } else if (dataVzCntxt == ModelVz.DataVzCntxt.EHVDM) {

                this.chartEHVDM.setProperties({ series: series })

                this.chartEHVDM.animateSeries = true;
                this.chartEHVDM.animate(2500)

            }
            else if (dataVzCntxt == ModelVz.DataVzCntxt.DRIP) {

                this.chartDRIP.setProperties({ series: series })

                this.chartDRIP.animateSeries = true;
                this.chartDRIP.animate(2500)

            }
            else if (dataVzCntxt == ModelVz.DataVzCntxt.RGS) {

                this.chartRGS.setProperties({ series: series })

                this.chartRGS.animateSeries = true;
                this.chartRGS.animate(2500)

            }

        }
    

        public SetBOBRChart() {

            var counter = 1;

            this.chartBOBR = new ej.charts.Chart({
                //Initializing Primary X Axis
                //width: '100%',
                //width: "100%",

                margin: { top: 40, right: 2 },
                //width: "745px",
                primaryXAxis: {
                    //valueType: 'DateTime',
                    //labelFormat: 'MMM',
                    majorGridLines: { width: 0 },
                    //intervalType: 'Months',
                    valueType: "Category",
                    interval: 1,
                    labelStyle: { color: "rgb(118, 1, 4)" },
                },
                //Initializing Primary Y Axis
                primaryYAxis: {
                    //maximum: 1800,
                    //interval: 1500000,
                    intervalType:"Auto",
                    //labelFormat: '',
                    lineStyle: { width: 0 },
                    //majorGridLines: { width: 1, color: "#F5F6F8" }
                    majorGridLines: { width: 1, color: "#eee" },
                    labelStyle: { color: "rgb(118, 1, 4)" },
                    
                },
                //useGroupingSeparator: true,
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
                palettes: ['#61EFCD', '#CDDE1F', '#FEC200', '#CA765A', '#2485FA', '#F57D7D', '#C152D2',
                    '#8854D9', '#3D4EB8', '#00BCD7'],
                //palettes: ['#5b73e8', '#50a5f1', '#34c38f', '#f1b44c', '#6f42c1'],
                pointRender: (e) => {
                    
                    switch (counter) {
                        case 1:
                            e.fill = "rgba(255, 229, 71, 0.65)"
                            break;
                        case 2:
                            e.fill = "rgba(255, 174, 43, 0.65)"
                            break;
                        case 3:
                            e.fill = "rgba(255, 97, 17, 0.65)";
                            break;
                        case 4:
                            e.fill = "rgba(205, 23, 28, 0.65)"
                            break;
                        case 5:
                            e.fill = "rgba(118, 1, 4, 0.65)"
                            break;
                    }
                    ++counter
                }, axisLabelRender: (e) => {
                    //e.text = SpdAnlyzrUtil.FormatNumber(e.text)
                }
                
            });

            this.chartBOBR.appendTo('#bobr-chrt-new');
        }

        public GetBOBRSeries(res): ej.charts.SeriesModel[] {

            //alert('Geting seies')

            //if (this.cstmrsTrnxnTrendChart == undefined)
            //    this.SetCstmrsTrnxnTrendChart()

            var dsMgr = new ej.data.DataManager({ json: res });

            var qry = new ej.data.Query().sortBy("DateStamp_Max");

            var series = <ej.charts.SeriesModel[]>[];

            //res.forEach((val, index, arr) => {
            //    series.push({

            //        type: 'Column',
            //        dataSource: new ej.data.DataManager({ json: [val] }),
            //        xName: 'x',
            //        width: 0,
            //        negativeFillColor: "#e56590",


            //        marker: {
            //            visible: true,
            //            width: 20,
            //            height: 20,
            //            //fill: 'white',
            //            fill: 'rgb(252, 227, 138)',
            //            //border: { width: 2, color: '#0470D8' }, 
            //            border: { width: 2, color: 'rgb(243, 141, 54)' },
            //            //border: { width: 2, color: '#FFF' },
            //        },
            //        yName: 'y',
            //        enableTooltip: true,
            //        //fill: 'rgba(4, 112, 216, 0.3)',//Light sweet blue
            //        //fill: 'rgb(245, 246, 248, 0.8)',//Light ash
            //        //fill: 'rgba(238,238,238, 0.4)',

            //        //fill: 'rgba(241, 180, 76, 0.5)',//Orange
            //        //border: { width: 5, color: '#6f42c1' },
            //        border: { width: 0, color: 'rgb(4, 112, 216)' },
                    
            //        //name:"Count",

            //    })
            //})



            return [{

                    type: 'Column',
                    dataSource: dsMgr,
                    xName: 'x',
                    width: 0,
                    negativeFillColor: "#e56590",


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
                    yName: 'y',
                    enableTooltip: true,
                    //fill: 'rgba(4, 112, 216, 0.3)',//Light sweet blue
                    //fill: 'rgb(245, 246, 248, 0.8)',//Light ash
                    //fill: 'rgba(238,238,238, 0.4)',

                    //fill: 'rgba(241, 180, 76, 0.5)',//Orange
                    //border: { width: 5, color: '#6f42c1' },
                    border: { width: 0, color: 'rgb(4, 112, 216)' },

                    //name:"Count",

                }]


            

            //return series;





        }

        public SetEHVDMChart() {

            var counter = 1;

            this.chartEHVDM = new ej.charts.Chart({
                //Initializing Primary X Axis
                width: '95%',
                //width: "100%",

                margin: { top: 40, right: 2 },
                //width: "745px",
                primaryXAxis: {
                    //valueType: 'DateTime',
                    //labelFormat: 'MMM',
                    
                    majorGridLines: { width: 0 },
                    //intervalType: 'Months',
                    valueType: "Category",
                    interval: 1,
                    labelStyle: { color: "rgb(118, 1, 4)" },
                },
                //Initializing Primary Y Axis
                primaryYAxis: {
                    //maximum: 1800,
                    minimum:0,
                    //interval: 2500000,
                    intervalType:"Auto",
                    labelFormat: 'n0',
                    lineStyle: { width: 0 },
                    //majorGridLines: { width: 1, color: "#F5F6F8" }
                    majorGridLines: { width: 1, color: "#eee" },
                    labelStyle: { color: "rgb(118, 1, 4)" },
                },
                //useGroupingSeparator: true,
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
                //palettes: ['#61EFCD', '#CDDE1F', '#FEC200', '#CA765A', '#2485FA', '#F57D7D', '#C152D2',
                //    '#8854D9', '#3D4EB8', '#00BCD7'],
                //palettes: ['#5b73e8', '#50a5f1', '#34c38f', '#f1b44c', '#6f42c1'],
                pointRender: (e) => {
                    switch (counter) {
                        case 1:
                            e.fill = "rgba(79, 43, 175, 0.65)"
                            break;
                        case 2:
                            e.fill = "rgba(97, 55, 227, 0.65)"
                            break;
                        case 3:
                            e.fill = "rgba(57, 33, 120, 0.65)";
                            break;
                        case 4:
                            e.fill = "rgba(205, 23, 28, 0.65)"
                            break;
                        case 5:
                            e.fill = "rgba(118, 1, 4, 0.65)"
                            break;
                    }
                    ++counter
                }
            });

            this.chartEHVDM.appendTo('#ehvdm-chrt');
        }

        public GetEHVDMSeries(res): ej.charts.SeriesModel[] {

            //alert('Geting seies')

            //if (this.cstmrsTrnxnTrendChart == undefined)
            //    this.SetCstmrsTrnxnTrendChart()

            var dsMgr = new ej.data.DataManager({ json: res });

            var qry = new ej.data.Query().sortBy("DateStamp_Max");

            var series = <ej.charts.SeriesModel[]>[]

         

            return [{

                type: 'Waterfall',
                dataSource: dsMgr,
                xName: 'x',
                width: 0,

                marker: {
                    visible: true,
                    width: 20,
                    height: 20,
                    //fill: 'white',
                    fill: 'rgb(252, 227, 138)',
                    //border: { width: 2, color: '#0470D8' }, 
                    border: { width: 2, color: '#1D2671' },
                    //border: { width: 2, color: '#FFF' },
                    dataLabel: { visible: true, font: { color: '#ffffff', size: "28" } }
                }, 
              
                connector: { color: '#5F6A6A', width: 2,type:"Line" },
                 
                yName: 'y',
                enableTooltip: true,
                //fill: 'rgba(4, 112, 216, 0.3)',
                //fill: 'rgb(245, 246, 248, 0.8)',//Light ash
                //fill: 'rgba(238,238,238, 0.4)',

                //fill: 'rgba(241, 180, 76, 0.5)',//Orange
                //border: { width: 5, color: '#6f42c1' },
                border: { width: 0, color: '#fff' },
                animation: {enable:true}
                
                //name:"Count",

            }]



        }

        public SetDRIPChart() {

            var counter = 1;

            this.chartDRIP = new ej.charts.Chart({
                //Initializing Primary X Axis
                width: '100%',
                //width: "100%",

                margin: { top: 40, right: 2 },
                //width: "745px",
                primaryXAxis: {
                    //valueType: 'DateTime',
                    //labelFormat: 'MMM',
                    majorGridLines: { width: 0 },
                    //intervalType: 'Months',
                    valueType: "Category",
                    interval: 1,
                    labelStyle: { color: "rgb(118, 1, 4)" },
                },
                //Initializing Primary Y Axis
                primaryYAxis: {
                    //maximum: 1800,
                    //interval: 1250000,
                    intervalType:"Auto",
                    labelFormat: 'n0',
                    lineStyle: { width: 0 },
                    //majorGridLines: { width: 1, color: "#F5F6F8" }
                    majorGridLines: { width: 1, color: "#eee" },
                    labelStyle: { color: "rgb(118, 1, 4)" },
                },
                //useGroupingSeparator: true,
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
                //palettes: ['#61EFCD', '#CDDE1F', '#FEC200', '#CA765A', '#2485FA', '#F57D7D', '#C152D2',
                //    '#8854D9', '#3D4EB8', '#00BCD7'],
                //palettes: ['#5b73e8', '#50a5f1', '#34c38f', '#f1b44c', '#6f42c1'],
                pointRender: (e) => {
                    switch (counter) {

                        case 1:
                            e.fill = "rgba(255, 229, 71, 0.65)"
                            break;
                        case 2:
                            e.fill = "rgba(255, 174, 43, 0.65)"
                            break;
                        case 3:
                            e.fill = "rgba(255, 97, 17, 0.65)";
                            break;
                        case 4:
                            e.fill = "rgba(205, 23, 28, 0.65)"
                            break;
                        case 5:
                            e.fill = "rgba(118, 1, 4, 0.65)"
                            break;

                    }
                    ++counter
                }
            });

            this.chartDRIP.appendTo('#drip-chrt');
        }

        public GetDRIPSeries(res): ej.charts.SeriesModel[] {

            //alert('Geting seies')

            //if (this.cstmrsTrnxnTrendChart == undefined)
            //    this.SetCstmrsTrnxnTrendChart()

            var dsMgr = new ej.data.DataManager({ json: res });

            var qry = new ej.data.Query().sortBy("DateStamp_Max");

            var series = <ej.charts.SeriesModel[]>[]

            return [{

                type: 'Column',
                dataSource: dsMgr,
                xName: 'x',
                width: 0,
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
                yName: 'y',
                enableTooltip: true,
                //fill: 'rgba(4, 112, 216, 0.3)',
                //fill: 'rgb(245, 246, 248, 0.8)',//Light ash
                //fill: 'rgba(238,238,238, 0.4)',

                //fill: 'rgba(241, 180, 76, 0.5)',//Orange
                //border: { width: 5, color: '#6f42c1' },
                border: { width: 0, color: '#fff' },

                //name:"Count",

            }]





        }


        public SetRGSChart() {

            var counter = 1;

            this.chartRGS = new ej.charts.Chart({
                //Initializing Primary X Axis
                width: '100%',
                //width: "100%",

                margin: { top: 40, right: 2 },
                //width: "745px",
                primaryXAxis: {
                    //valueType: 'DateTime',
                    //labelFormat: 'MMM',
                    majorGridLines: { width: 0 },
                    //intervalType: 'Months',
                    valueType: "Category",
                    interval: 1,
                    labelStyle: { color: "rgb(118, 1, 4)" },
                },
                //Initializing Primary Y Axis
                primaryYAxis: {
                    //maximum: 1800,
                    //interval: 1250000,
                    intervalType:"Auto",
                    labelFormat: 'n0',
                    lineStyle: { width: 0 },
                    //majorGridLines: { width: 1, color: "#F5F6F8" }
                    majorGridLines: { width: 1, color: "#eee" },
                    labelStyle: { color: "rgb(118, 1, 4)" },
                },
                //useGroupingSeparator: true,
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
                //palettes: ['#61EFCD', '#CDDE1F', '#FEC200', '#CA765A', '#2485FA', '#F57D7D', '#C152D2',
                //    '#8854D9', '#3D4EB8', '#00BCD7'],
                //palettes: ['#5b73e8', '#50a5f1', '#34c38f', '#f1b44c', '#6f42c1'],
                pointRender: (e) => {
                    switch (counter) {
                        case 1:
                            e.fill = "rgba(255, 229, 71, 0.65)"
                            break;
                        case 2:
                            e.fill = "rgba(255, 174, 43, 0.65)"
                            break;
                        case 3:
                            e.fill = "rgba(255, 97, 17, 0.65)";
                            break;
                        case 4:
                            e.fill = "rgba(205, 23, 28, 0.65)"
                            break;
                        case 5:
                            e.fill = "rgba(118, 1, 4, 0.65)"
                            break;
                    }
                    ++counter
                }
            });

            this.chartRGS.appendTo('#rgs-chrt');
        }

        public GetRGSSeries(res): ej.charts.SeriesModel[] {

            //alert('Geting seies')

            //if (this.cstmrsTrnxnTrendChart == undefined)
            //    this.SetCstmrsTrnxnTrendChart()

            var dsMgr = new ej.data.DataManager({ json: res });

            var qry = new ej.data.Query().sortBy("DateStamp_Max");

            var series = <ej.charts.SeriesModel[]>[]

            return [{

                type: 'Column',
                dataSource: dsMgr,
                xName: 'x',
                width: 0,
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
                yName: 'y',
                enableTooltip: true,
                //fill: 'rgba(4, 112, 216, 0.3)',
                //fill: 'rgb(245, 246, 248, 0.8)',//Light ash
                //fill: 'rgba(238,238,238, 0.4)',

                //fill: 'rgba(241, 180, 76, 0.5)',//Orange
                //border: { width: 5, color: '#6f42c1' },
                border: { width: 0, color: '#fff' },

                //name:"Count",

            }]





        }


    }
}

namespace SpendAnalyzer.BusinessObjects.ModelVz {

    export enum DataVzCntxt {
        BOBR = 1,
        EHVDM = 2,
        DRIP = 3,
        RGS = 4
    }
}