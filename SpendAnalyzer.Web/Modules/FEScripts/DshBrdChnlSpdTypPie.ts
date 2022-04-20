namespace SpendAnalyzer.BusinessObjects {
    export class DshBrdChnlSpdTypPie {

        private _Pie: ej.charts.AccumulationChart;
        private _ds: any
        private _ani: ej.base.Animation;

        constructor() {
            this.Pie();
            this._ani = new ej.base.Animation({ name: 'FadeIn', duration: 2000 })
        }

        private Pie() {


            this._Pie = new ej.charts.AccumulationChart({
                enableAnimation: true,
                enableSmartLabels: true,
                width: '100%',
                height: '350px',
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
                chartMouseClick: (e) => { this.PointClick(e) },
                

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

            this._Pie.appendTo('#dshBrdChnlSpdTypPie');
            //this.UpdatePie();
        }

        public UpdatePie(res) {
            this._ds = res;

            this._Pie.series = this.GetSeries(res);
            this._Pie.dataBind();
            this._Pie.refresh();

            //this._ani.animate("#dshBrdChnlSpdTypPie")

        }

        private PieDrl() {

            this._Pie = new ej.charts.AccumulationChart({
                width: '100%',
                height: '350px',
                series: [{}],
                textRender: function (args) {
                    args.text = args.point.x + ' ' + args.point.y + ' %';
                },
                annotations: [{
                    content: '<div id="back" style="cursor:pointer;padding:3px;width:30px; height:30px;">' +
                        '<img src="/Content/images/back-arrow.png" id="back" />', region: 'Series', x: '50%', y: '50%'
                }],
                enableSmartLabels: true,
                chartMouseClick:  (args) => {

                    this._Pie.destroy();
                    this._Pie.removeSvg();
                    this._Pie = null;
                    this.Pie();
                    this.UpdatePie(this._ds);
                }, legendSettings: { visible: false}
                
            })

        }


        private PointClick(args: ej.charts.IMouseEventArgs) {


            this._Pie.destroy();
            this._Pie.removeSvg();
            this._Pie = null;


            var index = ej.charts.indexFinder(args.target);
            var chnnl = '';

            if (!isNaN(index.point)) {
                //alert(JSON.stringify(this._ds[index.point].Chnnl))
                chnnl = this._ds[index.point].Chnnl;
            }

            var _hrdrs = new HrdrsRpstry()
            _hrdrs.Load('SpdSmryChnlSpdTyp', chnnl.replace(" ", "_"), 'Amt');

            var sgltnRpstry = new SngltnRpstry();

            var sgntnAggrgRpstry = new SngltnAggrgtRpstry();


            _hrdrs.onLoad = (hrdrs: HrdrsRpstry) => {

                var cl = _hrdrs.getCols(hrdrs.Res);

                var clRplc = Q.format("REPLACE(REPLACE(REPLACE(Chnl, '__{0}', ''), '_', ' '), '{1}', '')", hrdrs.Suffix, chnnl)


                //======================================================================
                var clSm = hrdrs.Res.map((val, index, arr) => {
                    return Q.format("Sum({0}) as {0}", val.COLUMN_NAME)
                }).join(',');

                ///return;

                sgntnAggrgRpstry.Load(cl, clSm, clRplc, 'SpdSmryChnlSpdTyp', '2020-10-01', '2021-06-01')

                sgntnAggrgRpstry.onLoad = (res) => {
                    //alert(JSON.stringify(res))
                    this.PieDrl()
                    this._Pie.series = this.GetSeries2(res);
                    this._Pie.appendTo('#dshBrdChnlSpdTypPie');
                    this._ani.animate("#dshBrdChnlSpdTypPie")

                    //this._Pie.dataBind();
                    //this._Pie.refresh();

                }

                return;
                //======================================================================
              


            }



            //if (!isNaN(index.point)) {
            //    //alert(JSON.stringify(this._ds[index.point].SpendType))


            //    //alert('In here')
            //    Q.serviceRequest('/Services/BusinessObjects/SpendDt/ProcessRequest', RstRepstry.GetForCrd(), res => {
            //        alert(JSON.stringify(res))
            //    },
            //        { error: function (x, y, z) { alert("Error: " + JSON.stringify(x) + '\\n' + y + '\\n' + z); } }
            //    )


            //    //console.log(JSON.stringify(rqstSndr.GetObj()))
            //    //alert(JSON.stringify(rqstSndr.GetObj()))
            //}

        }


        private GetSeries(ds): ej.charts.AccumulationSeriesModel[] {

            return [{
                //dataSource: [{ x: 'Labour', y: 18, text: '18%' }, { x: 'Legal', y: 8, text: '8%' },
                //{ x: 'Production', y: 15, text: '15%' }, { x: 'License', y: 11, text: '11%' },
                //{ x: 'Facilities', y: 18, text: '18%' }, { x: 'Taxes', y: 14, text: '14%' },
                //{ x: 'Insurance', y: 16, text: '16%' }],
                type: "Pie",
                dataSource: ds,
                xName: 'Chnnl',
                yName: 'Amt',
                radius: '83%',
                startAngle: 0,
                endAngle: 360,
                innerRadius: '50%',
                dataLabel: {
                    name: 'Chnnl',
                    visible: true,
                    position: 'Outside',
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

        private GetSeries2(ds): ej.charts.AccumulationSeriesModel[] {

            return [{
                //dataSource: [{ x: 'Labour', y: 18, text: '18%' }, { x: 'Legal', y: 8, text: '8%' },
                //{ x: 'Production', y: 15, text: '15%' }, { x: 'License', y: 11, text: '11%' },
                //{ x: 'Facilities', y: 18, text: '18%' }, { x: 'Taxes', y: 14, text: '14%' },
                //{ x: 'Insurance', y: 16, text: '16%' }],
               
                type: "Pie",
                dataSource: ds,
                xName: 'Chnnl',
                yName: 'Amt',
                radius: '83%',
                startAngle: 0,
                endAngle: 360,
                innerRadius: '50%',
                dataLabel: {
                    name: 'Chnnl',
                    visible: true,
                    position: 'Outside',
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