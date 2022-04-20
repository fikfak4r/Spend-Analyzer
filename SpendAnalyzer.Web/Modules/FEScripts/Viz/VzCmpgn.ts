namespace SpendAnalyzer.BusinessObjects {

    export class VzCmpgn {

        private usCsBySgmntPie: ej.charts.AccumulationChart;


        constructor() {
            this.SetUsCsBySgmntPieChart();
        }


        public RenderChart(series, appRpstryCntxt: AppRpstryCntxt) {


            if (appRpstryCntxt == AppRpstryCntxt.GetUseCaseBySgmntForPieChart) {
                //alert(series)
                this.usCsBySgmntPie.setProperties({ series: series })
                this.usCsBySgmntPie.animateSeries = true;
                this.usCsBySgmntPie.animate(2500)
                //this.usCsBySgmntPie.series = series
                //this.usCsBySgmntPie.dataBind();
                //this.usCsBySgmntPie.refresh();

            }
        }



        private SetUsCsBySgmntPieChart() {


            this.usCsBySgmntPie = new ej.charts.AccumulationChart({
                enableAnimation: true,
                enableSmartLabels: true,
                width: '100%',
                height: '350px',
                margin: { top: 0, bottom: 0 },
                //series: [
                //    {
                //        dataSource: [{ x: 'Labour', y: 18, text: '18%' }, { x: 'Legal', y: 8, text: '8%' },
                //        { x: 'Production', y: 15, text: '15%' }, { x: 'License', y: 11, text: '11%' },
                //        { x: 'Facilities', y: 18, text: '18%' }, { x: 'Taxes', y: 14, text: '14%' },
                //        { x: 'Insurance', y: 16, text: '16%' }],
                //        xName: 'x',
                //        yName: 'y',
                //        radius: '83%',
                //        startAngle: 0,
                //        endAngle: 360,
                //        innerRadius: '45%',
                //        dataLabel: {
                //            name: 'x',
                //            visible: true,
                //            position: 'Outside',
                //            connectorStyle: { length: '10%' },
                //            font: {
                //                color: 'Black',
                //                size: '14px',
                //                fontFamily: 'Roboto'
                //            }
                //        },
                //        animation: { enable: false },
                //        palettes: ['#61EFCD', '#CDDE1F', '#FEC200', '#CA765A', '#2485FA', '#F57D7D', '#C152D2',
                //            '#8854D9', '#3D4EB8', '#00BCD7']
                //    }
                //] ,

                tooltip: { enable: true, format: '${point.x} : <b>${point.y}</b>' },
                legendSettings: {
                    visible: true
                },
                //chartMouseClick: (e) => { this.PointClick(e) },


                //textRender: function (args) {
                //    args.series.dataLabel.font.size = getFontSize(pie.initialClipRect.width);
                //    pie.animateSeries = true;
                //    if (args.text.indexOf('Others') > -1) {
                //        args.text = 'Others';
                //    }
                //},
                //animationComplete: function (args) {
                //    var element = document.getElementById('total-expense_datalabel_Series_0');
                //    if (!isNOU(element)) { element.style.visibility = 'visible'; }
                //}
            });

            this.usCsBySgmntPie.appendTo('#cmpgn-dshbrd-usecase-by-sgmnt');

        }

        public GetUsCsBySgmntPieChartSeries(ds): ej.charts.AccumulationSeriesModel[] {

            return [{
                //dataSource: [{ x: 'Labour', y: 18, text: '18%' }, { x: 'Legal', y: 8, text: '8%' },
                //{ x: 'Production', y: 15, text: '15%' }, { x: 'License', y: 11, text: '11%' },
                //{ x: 'Facilities', y: 18, text: '18%' }, { x: 'Taxes', y: 14, text: '14%' },
                //{ x: 'Insurance', y: 16, text: '16%' }],
                type: "Pie",
                dataSource: ds,
                xName: 'x',
                yName: 'y',
                radius: '83%',
                startAngle: 0,
                endAngle: 360,
                innerRadius: '50%',
                dataLabel: {
                    name: 'x',
                    visible: false,
                    position: 'Inside',
                    connectorStyle: { length: '10%' },
                    font: {
                        color: 'Black',
                        size: '14px',
                        fontFamily: 'Roboto'
                    },
                },
                animation: { enable: false },
                palettes: ['#61EFCD', '#CDDE1F', '#FEC200', '#CA765A', '#2485FA', '#F57D7D', '#C152D2',
                    '#8854D9', '#3D4EB8', '#00BCD7'],


            }]

        }



    }
}