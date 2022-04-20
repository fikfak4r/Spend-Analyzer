namespace SpendAnalyzer.BusinessObjects {
    export class TrgrtdAnlysLnChrt {
        private _lnChrt: ej.charts.Chart;
        public IsInitiated: boolean;
        constructor() {

        }

        public Init(res) {

            this.IsInitiated = true;

            var content = '<p style="font-family:Roboto;font-size: 16px;font-weight: 400;font-weight: 400;letter-spacing: 0.02em;line-height: 16px;color: #797979 !important;">Expenses</p>'


            var dsMgr = new ej.data.DataManager({ json: res });

            var qry = new ej.data.Query().sortBy("DateStamp_Max").group("Channel")

            var series = []


            dsMgr.executeQuery(qry).then((e) => {


                series = e.result.map((val, index, arr) => {
                    //alert(val.key)
                    return this.GetSeries(val.key, val.items);
                })

                this.GetLineChart(series)

                // this._lnChrt.setProperties({
                //    //Initializing Chart Series
                //     series: series,

                //});

            })//Ends DataManage then method




        }


        private GetLineChart(series) {

     

            this._lnChrt = new ej.charts.Chart({
                //Initializing Primary X Axis
                enableAnimation:true,
                width: '985px',
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
                    interval: 1000000000,
                    labelFormat: 'c0',
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
                series: series,
                //series: [
                //    {
                //        type: 'Column',
                //        //dataSource: lineDS,
                //        xName: 'DateTime', width: 2, marker: {
                //            visible: true,
                //            width: 10,
                //            height: 10,
                //            fill: 'white',
                //            border: { width: 2, color: '#0470D8' },
                //        },
                //        yName: 'Amount', name: 'Amount',
                //        fill: 'rgba(4, 112, 216, 0.3)',
                //        border: { width: 0.5, color: '#0470D8' },

                //    },

                //],
                tooltip: {
                    fill: '#707070',
                    enable: true, shared: true,
                    format: '${series.name} : ${point.y}',
                    header: 'Month - ${point.x} '
                },
                //palettes: ['#61EFCD', '#CDDE1F', '#FEC200', '#CA765A', '#2485FA', '#F57D7D', '#C152D2',
                //    '#8854D9', '#3D4EB8', '#00BCD7'],
                palettes: ['#5b73e8', '#50a5f1', '#34c38f', '#f1b44c', '#6f42c1']
            });
            this._lnChrt.appendTo('#dshBrdChnlSpdTypPie-spd-anlyzr-cntnt');

        




            /*
            SpendSmryService.GetLinePoints({}, res => {
                alert(JSON.stringify(res))
                var dsMgr = new ej.data.DataManager({ json: res });

                this._linechartObj.setProperties({
                    //Initializing Chart Series
                    series: [
                        {
                            type: 'Area',
                            dataSource: res,
                            xName: 'DateStamp', width: 2,
                            marker: {
                                visible: true,
                                width: 10,
                                height: 10,
                                fill: 'white',
                                border: { width: 2, color: '#0470D8' },
                            },
                            legendShape: 'Circle',
                            yName: 'Amount', name: 'Amount',
                            fill: 'rgba(4, 112, 216, 0.3)',
                            border: { width: 0.5, color: '#0470D8' }
                        }]
                });

                this._linechartObj.refresh();

            });
            */
        }


        private GetSeries(name, ds) {
                    return {
                        type: 'Column',
                            dataSource: ds,
                            xName: 'DateStamp_Max', width: 2,
                            //opacity:0.5,
                            marker: {
                                visible: true,
                                width: 10,
                                height: 10,
                                fill: 'white',
                                //border: { width: 2, color: '#0470D8' },
                            },
                            legendShape: 'Circle',
                            yName: 'TrnxnAmt_Sum', name: name,
                            //fill: 'rgba(4, 112, 216, 0.3)',
                            border: { width: 0.5, color: '#0470D8' }
                        }
        }


        public UpdateLnChart(res) {



            var dsMgr = new ej.data.DataManager({ json: res });

            var qry = new ej.data.Query().sortBy("DateStamp_Max").group("Channel")

            var series = []


            dsMgr.executeQuery(qry).then((e) => {


                series = e.result.map((val, index, arr) => {
                    //alert(val.key)
                    return this.GetSeries(val.key, val.items);
                })

          

                 this._lnChrt.setProperties({
                    //Initializing Chart Series
                     series: series,

                 });

                this._lnChrt.dataBind();
                this._lnChrt.refresh();

            })//Ends DataManage then method


        }

        private prog_Bar;

        public ShowPreLoader() {

            $("#trgtd-anlys-col-bar-prog-bar").removeClass('hide')
            $("#dshBrdChnlSpdTypPie-spd-anlyzr-cntnt").hide()

            if (this.prog_Bar) {
                $("#trgtd-anlys-col-bar-prog-bar").show()
                return;
            }


            this.prog_Bar = new ej.progressbar.ProgressBar({
                    type: 'Circular',
                    value: 20,
                    width: '60px',
                    height: '60px',
                    cornerRadius: 'Round',
                    isIndeterminate: true,
                    animation: {
                        enable: true,
                        duration: 2000,
                        delay: 0,
                    },
                    //load: progressLoad
                });
            this.prog_Bar.appendTo('#trgtd-anlys-col-bar-prog-bar');
            

        }

        public HidePreLoader() {
            $("#trgtd-anlys-col-bar-prog-bar").hide();
            $("dshBrdChnlSpdTypPie-spd-anlyzr-cntnt").show();
        }

    }


}