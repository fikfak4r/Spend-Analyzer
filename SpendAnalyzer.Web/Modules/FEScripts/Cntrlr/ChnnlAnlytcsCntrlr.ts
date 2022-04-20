namespace SpendAnalyzer.BusinessObjects {

    let chnnlAnlytcsVz_Global: ChnnlAnlytcsCntrlr;

    export class ChnnlAnlytcsCntrlr {

        private appRpstry: AppRpstry;
        private intl: ej.base.Internationalization
        public chnnlAnlytcsVz: ChnnlAnlytcsVz
        public dataLayer: ChnnlAnlytcsDL;

        public static chnnlAnlytcsCntrlr: ChnnlAnlytcsCntrlr
        private progressBar: ej.progressbar.ProgressBar;
        private channel_analytics_tab: ej.navigations.Tab;



        constructor(appRpstry: AppRpstry) {

            this.appRpstry = appRpstry;
            this.dataLayer = new ChnnlAnlytcsDL(this.appRpstry);
            

            this.SetHndlrs();
            this.chnnlAnlytcsVz = new ChnnlAnlytcsVz();
            chnnlAnlytcsVz_Global = this;

            this.intl = new ej.base.Internationalization();
            SpendAnalyzer.BusinessObjects.ChnnlAnlytcsCntrlr.chnnlAnlytcsCntrlr = this;


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

            this.progressBar.appendTo('#chnl-anlytcs-prgrss');



            this.channel_analytics_tab = new ej.navigations.Tab({
                heightAdjustMode: 'Content',
                showCloseButton: false,
                items: [
                    { header: { 'text': 'Cards' }, content: '#chnnls-container', cssClass: "chnnl-analytics-tab-pane" },
                    { header: { 'text': 'Transaction by Value' }, content: '#chnnl-analytics-trnx-value-by-months-tab-b', cssClass: "" },
                    { header: { 'text': 'Transaction by Volume' }, content: '#chnnl-analytics-trnx-value-by-months-tab-c', },


                ], selected: (e) => {

                    if (e.selectedIndex == 1) {

                        $("#chnnl-analytics-trnx-value-by-months-tab-b").removeClass("hide");
                        this.DataVzCntxt = ChnnlAnlytcsVz.DataVzCntxt.TrnxnByValue;
                        this.dataLayer.GetChannelsTrxnSmry()

                    }
                    else if (e.selectedIndex == 2) {

                        $("#chnnl-analytics-trnx-value-by-months-tab-c").removeClass("hide");

                    }


                }

            });

            this.channel_analytics_tab.appendTo('#chnnl-analytics-tab');

        }//Ends the constructor


        private _dataVzCntxt: ChnnlAnlytcsVz.DataVzCntxt;

        get DataVzCntxt() { return this._dataVzCntxt; }
        set DataVzCntxt(val) { this._dataVzCntxt = val; }


        public Start() {


            $("#chnnls-container").children().remove();
            $("#chnnls-container").hide()
            $("#channel-analytics-tab-container").hide()
            $(this.progressBar.element).show();

            this.DataVzCntxt = ChnnlAnlytcsVz.DataVzCntxt.ChannelAnalyticsSmry;
            this.dataLayer.GetChannelsTrxnSmry();

        }



        private SetHndlrs() {

            this.dataLayer.onReady = (res) => {


                if (this.DataVzCntxt == ChnnlAnlytcsVz.DataVzCntxt.ChannelAnalyticsSmry) {

                    $(this.progressBar.element).hide();

                    $("#channel-analytics-tab-container").removeClass('hide')
                    $("#channel-analytics-tab-container").show()

                    var cnt = 1;
                    var dataObj = <Array<ChnnlAnlytcsDL.ChannelTrnxnSmry>>res


                    $("#chnnl-analytics-tab").removeClass('hide');
                    $("#chnnl-analytics-tab").show();

                    dataObj.forEach((val, index, arr) => {

                        var id = "id-" + cnt

                        $("#chnnls-container").append(this.LoadCards(id, val.Channel, val.TrnxnCnt, val.TrnxnAmt));

                        $("#" + id).click(() => {
                            //this.DataVzCntxt = ChnnlAnlytcsVz.DataVzCntxt.ChannelSmryDetails;
                            //this.chnnlAnlytcsVz.RenderChart(val.Channel, null, null)
                            this.GetChannel6MthsSmry(val.Channel);
                        })

                        ++cnt;
                    });

                    $("#chnnls-container").slideDown(2500);

                }
                else if (this.DataVzCntxt == ChnnlAnlytcsVz.DataVzCntxt.Channel6MthsSmry) {

                    this.chnnlAnlytcsVz.RenderChart("USSD", this.chnnlAnlytcsVz.GetSeries(res), null)
                } else if (this.DataVzCntxt == ChnnlAnlytcsVz.DataVzCntxt.TrnxnByValue) {

                    this.chnnlAnlytcsVz.SetTrnxnByValueChart();
                    this.chnnlAnlytcsVz.RenderChart(null, this.chnnlAnlytcsVz.GetTrnxnByValueSeries(res), ChnnlAnlytcsVz.DataVzCntxt.TrnxnByValue)

                }





            }

        }

        private GetChannel6MthsSmry(channel) {
            this.DataVzCntxt = ChnnlAnlytcsVz.DataVzCntxt.Channel6MthsSmry;
            this.dataLayer.GetUSSD6MthsSmry()
        }

        private GetUSSD6MthsSmry() {

        }
        

        private cnt = 1
        private soft_bg;
        private small_chart;
        private LoadCards(id, spndTyp, vol, val) {


            if (this.cnt == 5)
                this.cnt = 1

            if (this.cnt == 1) {
                this.small_chart = '<div id="apexcharts3tggsyox" class="apexcharts-canvas apexcharts3tggsyox apexcharts-theme-light" style="width: 70px; height: 40px;"><svg id="SvgjsSvg1504" width="70" height="40" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" class="apexcharts-svg" xmlns:data="ApexChartsNS" transform="translate(0, 0)" style="background: transparent;"><g id="SvgjsG1506" class="apexcharts-inner apexcharts-graphical" transform="translate(0, 0)"><defs id="SvgjsDefs1505"><linearGradient id="SvgjsLinearGradient1510" x1="0" y1="0" x2="0" y2="1"><stop id="SvgjsStop1511" stop-opacity="0.4" stop-color="rgba(216,227,240,0.4)" offset="0"></stop><stop id="SvgjsStop1512" stop-opacity="0.5" stop-color="rgba(190,209,230,0.5)" offset="1"></stop><stop id="SvgjsStop1513" stop-opacity="0.5" stop-color="rgba(190,209,230,0.5)" offset="1"></stop></linearGradient><clipPath id="gridRectMask3tggsyox"><rect id="SvgjsRect1516" width="74" height="40" x="-2" y="0" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clipPath><clipPath id="gridRectMarkerMask3tggsyox"><rect id="SvgjsRect1517" width="74" height="44" x="-2" y="-2" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clipPath></defs><line id="SvgjsLine1515" x1="21.72727550159801" y1="0" x2="21.72727550159801" y2="40" stroke-dasharray="3" class="apexcharts-xcrosshairs" x="21.72727550159801" y="0" width="1" height="40" fill="url(#SvgjsLinearGradient1510)" filter="none" fill-opacity="0.9" stroke-width="0"></line><g id="SvgjsG1532" class="apexcharts-xaxis" transform="translate(0, 0)"><g id="SvgjsG1533" class="apexcharts-xaxis-texts-g" transform="translate(0, 2.75)"></g></g><g id="SvgjsG1546" class="apexcharts-grid"><g id="SvgjsG1547" class="apexcharts-gridlines-horizontal" style="display: none;"><line id="SvgjsLine1549" x1="0" y1="0" x2="70" y2="0" stroke="#e0e0e0" stroke-dasharray="0" class="apexcharts-gridline"></line><line id="SvgjsLine1550" x1="0" y1="8" x2="70" y2="8" stroke="#e0e0e0" stroke-dasharray="0" class="apexcharts-gridline"></line><line id="SvgjsLine1551" x1="0" y1="16" x2="70" y2="16" stroke="#e0e0e0" stroke-dasharray="0" class="apexcharts-gridline"></line><line id="SvgjsLine1552" x1="0" y1="24" x2="70" y2="24" stroke="#e0e0e0" stroke-dasharray="0" class="apexcharts-gridline"></line><line id="SvgjsLine1553" x1="0" y1="32" x2="70" y2="32" stroke="#e0e0e0" stroke-dasharray="0" class="apexcharts-gridline"></line><line id="SvgjsLine1554" x1="0" y1="40" x2="70" y2="40" stroke="#e0e0e0" stroke-dasharray="0" class="apexcharts-gridline"></line></g><g id="SvgjsG1548" class="apexcharts-gridlines-vertical" style="display: none;"></g><line id="SvgjsLine1556" x1="0" y1="40" x2="70" y2="40" stroke="transparent" stroke-dasharray="0"></line><line id="SvgjsLine1555" x1="0" y1="1" x2="0" y2="40" stroke="transparent" stroke-dasharray="0"></line></g><g id="SvgjsG1518" class="apexcharts-bar-series apexcharts-plot-series"><g id="SvgjsG1519" class="apexcharts-series" rel="1" seriesName="seriesx1" data:realIndex="0"><path id="SvgjsPath1521" d="M 1.5909090909090908 40L 1.5909090909090908 30L 4.7727272727272725 30L 4.7727272727272725 30L 4.7727272727272725 40L 4.7727272727272725 40z" fill="rgba(91,115,232,0.85)" fill-opacity="1" stroke-opacity="1" stroke-linecap="square" stroke-width="0" stroke-dasharray="0" class="apexcharts-bar-area" index="0" clip-path="url(#gridRectMask3tggsyox)" pathTo="M 1.5909090909090908 40L 1.5909090909090908 30L 4.7727272727272725 30L 4.7727272727272725 30L 4.7727272727272725 40L 4.7727272727272725 40z" pathFrom="M 1.5909090909090908 40L 1.5909090909090908 40L 4.7727272727272725 40L 4.7727272727272725 40L 4.7727272727272725 40L 1.5909090909090908 40" cy="30" cx="7.954545454545454" j="0" val="25" barHeight="10" barWidth="3.1818181818181817"></path><path id="SvgjsPath1522" d="M 7.954545454545454 40L 7.954545454545454 13.600000000000001L 11.136363636363637 13.600000000000001L 11.136363636363637 13.600000000000001L 11.136363636363637 40L 11.136363636363637 40z" fill="rgba(91,115,232,0.85)" fill-opacity="1" stroke-opacity="1" stroke-linecap="square" stroke-width="0" stroke-dasharray="0" class="apexcharts-bar-area" index="0" clip-path="url(#gridRectMask3tggsyox)" pathTo="M 7.954545454545454 40L 7.954545454545454 13.600000000000001L 11.136363636363637 13.600000000000001L 11.136363636363637 13.600000000000001L 11.136363636363637 40L 11.136363636363637 40z" pathFrom="M 7.954545454545454 40L 7.954545454545454 40L 11.136363636363637 40L 11.136363636363637 40L 11.136363636363637 40L 7.954545454545454 40" cy="13.600000000000001" cx="14.318181818181817" j="1" val="66" barHeight="26.4" barWidth="3.1818181818181817"></path><path id="SvgjsPath1523" d="M 14.318181818181817 40L 14.318181818181817 23.6L 17.5 23.6L 17.5 23.6L 17.5 40L 17.5 40z" fill="rgba(91,115,232,0.85)" fill-opacity="1" stroke-opacity="1" stroke-linecap="square" stroke-width="0" stroke-dasharray="0" class="apexcharts-bar-area" index="0" clip-path="url(#gridRectMask3tggsyox)" pathTo="M 14.318181818181817 40L 14.318181818181817 23.6L 17.5 23.6L 17.5 23.6L 17.5 40L 17.5 40z" pathFrom="M 14.318181818181817 40L 14.318181818181817 40L 17.5 40L 17.5 40L 17.5 40L 14.318181818181817 40" cy="23.6" cx="20.68181818181818" j="2" val="41" barHeight="16.4" barWidth="3.1818181818181817"></path><path id="SvgjsPath1524" d="M 20.68181818181818 40L 20.68181818181818 4.399999999999999L 23.86363636363636 4.399999999999999L 23.86363636363636 4.399999999999999L 23.86363636363636 40L 23.86363636363636 40z" fill="rgba(91,115,232,0.85)" fill-opacity="1" stroke-opacity="1" stroke-linecap="square" stroke-width="0" stroke-dasharray="0" class="apexcharts-bar-area" index="0" clip-path="url(#gridRectMask3tggsyox)" pathTo="M 20.68181818181818 40L 20.68181818181818 4.399999999999999L 23.86363636363636 4.399999999999999L 23.86363636363636 4.399999999999999L 23.86363636363636 40L 23.86363636363636 40z" pathFrom="M 20.68181818181818 40L 20.68181818181818 40L 23.86363636363636 40L 23.86363636363636 40L 23.86363636363636 40L 20.68181818181818 40" cy="4.399999999999999" cx="27.045454545454543" j="3" val="89" barHeight="35.6" barWidth="3.1818181818181817"></path><path id="SvgjsPath1525" d="M 27.045454545454543 40L 27.045454545454543 14.8L 30.227272727272727 14.8L 30.227272727272727 14.8L 30.227272727272727 40L 30.227272727272727 40z" fill="rgba(91,115,232,0.85)" fill-opacity="1" stroke-opacity="1" stroke-linecap="square" stroke-width="0" stroke-dasharray="0" class="apexcharts-bar-area" index="0" clip-path="url(#gridRectMask3tggsyox)" pathTo="M 27.045454545454543 40L 27.045454545454543 14.8L 30.227272727272727 14.8L 30.227272727272727 14.8L 30.227272727272727 40L 30.227272727272727 40z" pathFrom="M 27.045454545454543 40L 27.045454545454543 40L 30.227272727272727 40L 30.227272727272727 40L 30.227272727272727 40L 27.045454545454543 40" cy="14.8" cx="33.40909090909091" j="4" val="63" barHeight="25.2" barWidth="3.1818181818181817"></path><path id="SvgjsPath1526" d="M 33.40909090909091 40L 33.40909090909091 30L 36.590909090909086 30L 36.590909090909086 30L 36.590909090909086 40L 36.590909090909086 40z" fill="rgba(91,115,232,0.85)" fill-opacity="1" stroke-opacity="1" stroke-linecap="square" stroke-width="0" stroke-dasharray="0" class="apexcharts-bar-area" index="0" clip-path="url(#gridRectMask3tggsyox)" pathTo="M 33.40909090909091 40L 33.40909090909091 30L 36.590909090909086 30L 36.590909090909086 30L 36.590909090909086 40L 36.590909090909086 40z" pathFrom="M 33.40909090909091 40L 33.40909090909091 40L 36.590909090909086 40L 36.590909090909086 40L 36.590909090909086 40L 33.40909090909091 40" cy="30" cx="39.772727272727266" j="5" val="25" barHeight="10" barWidth="3.1818181818181817"></path><path id="SvgjsPath1527" d="M 39.772727272727266 40L 39.772727272727266 22.4L 42.954545454545446 22.4L 42.954545454545446 22.4L 42.954545454545446 40L 42.954545454545446 40z" fill="rgba(91,115,232,0.85)" fill-opacity="1" stroke-opacity="1" stroke-linecap="square" stroke-width="0" stroke-dasharray="0" class="apexcharts-bar-area" index="0" clip-path="url(#gridRectMask3tggsyox)" pathTo="M 39.772727272727266 40L 39.772727272727266 22.4L 42.954545454545446 22.4L 42.954545454545446 22.4L 42.954545454545446 40L 42.954545454545446 40z" pathFrom="M 39.772727272727266 40L 39.772727272727266 40L 42.954545454545446 40L 42.954545454545446 40L 42.954545454545446 40L 39.772727272727266 40" cy="22.4" cx="46.136363636363626" j="6" val="44" barHeight="17.6" barWidth="3.1818181818181817"></path><path id="SvgjsPath1528" d="M 46.136363636363626 40L 46.136363636363626 32L 49.318181818181806 32L 49.318181818181806 32L 49.318181818181806 40L 49.318181818181806 40z" fill="rgba(91,115,232,0.85)" fill-opacity="1" stroke-opacity="1" stroke-linecap="square" stroke-width="0" stroke-dasharray="0" class="apexcharts-bar-area" index="0" clip-path="url(#gridRectMask3tggsyox)" pathTo="M 46.136363636363626 40L 46.136363636363626 32L 49.318181818181806 32L 49.318181818181806 32L 49.318181818181806 40L 49.318181818181806 40z" pathFrom="M 46.136363636363626 40L 46.136363636363626 40L 49.318181818181806 40L 49.318181818181806 40L 49.318181818181806 40L 46.136363636363626 40" cy="32" cx="52.499999999999986" j="7" val="20" barHeight="8" barWidth="3.1818181818181817"></path><path id="SvgjsPath1529" d="M 52.499999999999986 40L 52.499999999999986 25.6L 55.681818181818166 25.6L 55.681818181818166 25.6L 55.681818181818166 40L 55.681818181818166 40z" fill="rgba(91,115,232,0.85)" fill-opacity="1" stroke-opacity="1" stroke-linecap="square" stroke-width="0" stroke-dasharray="0" class="apexcharts-bar-area" index="0" clip-path="url(#gridRectMask3tggsyox)" pathTo="M 52.499999999999986 40L 52.499999999999986 25.6L 55.681818181818166 25.6L 55.681818181818166 25.6L 55.681818181818166 40L 55.681818181818166 40z" pathFrom="M 52.499999999999986 40L 52.499999999999986 40L 55.681818181818166 40L 55.681818181818166 40L 55.681818181818166 40L 52.499999999999986 40" cy="25.6" cx="58.863636363636346" j="8" val="36" barHeight="14.4" barWidth="3.1818181818181817"></path><path id="SvgjsPath1530" d="M 58.863636363636346 40L 58.863636363636346 24L 62.045454545454525 24L 62.045454545454525 24L 62.045454545454525 40L 62.045454545454525 40z" fill="rgba(91,115,232,0.85)" fill-opacity="1" stroke-opacity="1" stroke-linecap="square" stroke-width="0" stroke-dasharray="0" class="apexcharts-bar-area" index="0" clip-path="url(#gridRectMask3tggsyox)" pathTo="M 58.863636363636346 40L 58.863636363636346 24L 62.045454545454525 24L 62.045454545454525 24L 62.045454545454525 40L 62.045454545454525 40z" pathFrom="M 58.863636363636346 40L 58.863636363636346 40L 62.045454545454525 40L 62.045454545454525 40L 62.045454545454525 40L 58.863636363636346 40" cy="24" cx="65.2272727272727" j="9" val="40" barHeight="16" barWidth="3.1818181818181817"></path><path id="SvgjsPath1531" d="M 65.2272727272727 40L 65.2272727272727 18.4L 68.40909090909089 18.4L 68.40909090909089 18.4L 68.40909090909089 40L 68.40909090909089 40z" fill="rgba(91,115,232,0.85)" fill-opacity="1" stroke-opacity="1" stroke-linecap="square" stroke-width="0" stroke-dasharray="0" class="apexcharts-bar-area" index="0" clip-path="url(#gridRectMask3tggsyox)" pathTo="M 65.2272727272727 40L 65.2272727272727 18.4L 68.40909090909089 18.4L 68.40909090909089 18.4L 68.40909090909089 40L 68.40909090909089 40z" pathFrom="M 65.2272727272727 40L 65.2272727272727 40L 68.40909090909089 40L 68.40909090909089 40L 68.40909090909089 40L 65.2272727272727 40" cy="18.4" cx="71.59090909090907" j="10" val="54" barHeight="21.6" barWidth="3.1818181818181817"></path></g><g id="SvgjsG1520" class="apexcharts-datalabels" data:realIndex="0"></g></g><line id="SvgjsLine1557" x1="0" y1="0" x2="70" y2="0" stroke="#b6b6b6" stroke-dasharray="0" stroke-width="1" class="apexcharts-ycrosshairs"></line><line id="SvgjsLine1558" x1="0" y1="0" x2="70" y2="0" stroke-dasharray="0" stroke-width="0" class="apexcharts-ycrosshairs-hidden"></line><g id="SvgjsG1559" class="apexcharts-yaxis-annotations"></g><g id="SvgjsG1560" class="apexcharts-xaxis-annotations"></g><g id="SvgjsG1561" class="apexcharts-point-annotations"></g></g><rect id="SvgjsRect1514" width="0" height="0" x="0" y="0" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fefefe"></rect><g id="SvgjsG1545" class="apexcharts-yaxis" rel="0" transform="translate(-18, 0)"></g><g id="SvgjsG1507" class="apexcharts-annotations"></g></svg><div class="apexcharts-legend" style="max-height: 20px;"></div><div class="apexcharts-tooltip apexcharts-theme-light" style="left: 22.2273px; top: -13.5px;"><div class="apexcharts-tooltip-series-group apexcharts-active" style="order: 1; display: flex;"><span class="apexcharts-tooltip-marker" style="background-color: rgba(91, 115, 232, 0.85); display: none;"></span><div class="apexcharts-tooltip-text" style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;"><div class="apexcharts-tooltip-y-group"><span class="apexcharts-tooltip-text-label"></span><span class="apexcharts-tooltip-text-value">89</span></div><div class="apexcharts-tooltip-z-group"><span class="apexcharts-tooltip-text-z-label"></span><span class="apexcharts-tooltip-text-z-value"></span></div></div></div></div><div class="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light"><div class="apexcharts-yaxistooltip-text"></div></div></div>'
            }
            else if (this.cnt == 2)
                this.small_chart = '<div id="apexchartsn8jolc0j" class="apexcharts-canvas apexchartsn8jolc0j apexcharts-theme-light" style="width: 45px; height: 46px;"><svg id="SvgjsSvg2184" width="45" height="46" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" class="apexcharts-svg" xmlns:data="ApexChartsNS" transform="translate(0, 0)" style="background: transparent;"><g id="SvgjsG2186" class="apexcharts-inner apexcharts-graphical" transform="translate(0, 0)"><defs id="SvgjsDefs2185"><clipPath id="gridRectMaskn8jolc0j"><rect id="SvgjsRect2188" width="51" height="47" x="-3" y="-1" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clipPath><clipPath id="gridRectMarkerMaskn8jolc0j"><rect id="SvgjsRect2189" width="49" height="49" x="-2" y="-2" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clipPath></defs><g id="SvgjsG2190" class="apexcharts-radialbar"><g id="SvgjsG2191"><g id="SvgjsG2192" class="apexcharts-tracks"><g id="SvgjsG2193" class="apexcharts-radialbar-track apexcharts-track" rel="1"><path id="apexcharts-radialbarTrack-0" d="M 22.5 7.134146341463413 A 15.365853658536587 15.365853658536587 0 1 1 22.497318152626402 7.134146575498747" fill="none" fill-opacity="1" stroke="rgba(242,242,242,0.85)" stroke-opacity="1" stroke-linecap="butt" stroke-width="4.258536585365854" stroke-dasharray="0" class="apexcharts-radialbar-area" data:pathOrig="M 22.5 7.134146341463413 A 15.365853658536587 15.365853658536587 0 1 1 22.497318152626402 7.134146575498747"></path></g></g><g id="SvgjsG2195"><g id="SvgjsG2197" class="apexcharts-series apexcharts-radial-series" seriesName="seriesx1" rel="1" data:realIndex="0"><path id="SvgjsPath2198" d="M 22.5 7.134146341463413 A 15.365853658536587 15.365853658536587 0 1 1 7.886204749611055 27.248309913566267" fill="none" fill-opacity="0.85" stroke="rgba(52,195,143,0.85)" stroke-opacity="1" stroke-linecap="butt" stroke-width="4.390243902439025" stroke-dasharray="0" class="apexcharts-radialbar-area apexcharts-radialbar-slice-0" data:angle="252" data:value="70" index="0" j="0" data:pathOrig="M 22.5 7.134146341463413 A 15.365853658536587 15.365853658536587 0 1 1 7.886204749611055 27.248309913566267"></path></g><circle id="SvgjsCircle2196" r="13.23658536585366" cx="22.5" cy="22.5" class="apexcharts-radialbar-hollow" fill="transparent"></circle></g></g></g><line id="SvgjsLine2199" x1="0" y1="0" x2="45" y2="0" stroke="#b6b6b6" stroke-dasharray="0" stroke-width="1" class="apexcharts-ycrosshairs"></line><line id="SvgjsLine2200" x1="0" y1="0" x2="45" y2="0" stroke-dasharray="0" stroke-width="0" class="apexcharts-ycrosshairs-hidden"></line></g><g id="SvgjsG2187" class="apexcharts-annotations"></g></svg><div class="apexcharts-legend"></div></div>'
            else if (this.cnt == 3)
                this.small_chart = '<div id="apexchartswrh2urob" class="apexcharts-canvas apexchartswrh2urob apexcharts-theme-light" style="width: 45px; height: 46px;"><svg id="SvgjsSvg2201" width="45" height="46" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" class="apexcharts-svg" xmlns:data="ApexChartsNS" transform="translate(0, 0)" style="background: transparent;"><g id="SvgjsG2203" class="apexcharts-inner apexcharts-graphical" transform="translate(0, 0)"><defs id="SvgjsDefs2202"><clipPath id="gridRectMaskwrh2urob"><rect id="SvgjsRect2205" width="51" height="47" x="-3" y="-1" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clipPath><clipPath id="gridRectMarkerMaskwrh2urob"><rect id="SvgjsRect2206" width="49" height="49" x="-2" y="-2" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clipPath><filter id="SvgjsFilter2292" filterUnits="userSpaceOnUse" width="200%" height="200%" x="-50%" y="-50%"><feComponentTransfer id="SvgjsFeComponentTransfer2293" result="SvgjsFeComponentTransfer2293Out" in="SourceGraphic"><feFuncR id="SvgjsFeFuncR2294" type="linear" slope="0.5"></feFuncR><feFuncG id="SvgjsFeFuncG2295" type="linear" slope="0.5"></feFuncG><feFuncB id="SvgjsFeFuncB2296" type="linear" slope="0.5"></feFuncB><feFuncA id="SvgjsFeFuncA2297" type="identity"></feFuncA></feComponentTransfer></filter></defs><g id="SvgjsG2207" class="apexcharts-radialbar"><g id="SvgjsG2208"><g id="SvgjsG2209" class="apexcharts-tracks"><g id="SvgjsG2210" class="apexcharts-radialbar-track apexcharts-track" rel="1"><path id="apexcharts-radialbarTrack-0" d="M 22.5 7.134146341463413 A 15.365853658536587 15.365853658536587 0 1 1 22.497318152626402 7.134146575498747" fill="none" fill-opacity="1" stroke="rgba(242,242,242,0.85)" stroke-opacity="1" stroke-linecap="butt" stroke-width="4.258536585365854" stroke-dasharray="0" class="apexcharts-radialbar-area" data:pathOrig="M 22.5 7.134146341463413 A 15.365853658536587 15.365853658536587 0 1 1 22.497318152626402 7.134146575498747"></path></g></g><g id="SvgjsG2212"><g id="SvgjsG2214" class="apexcharts-series apexcharts-radial-series" seriesName="seriesx1" rel="1" data:realIndex="0"><path id="SvgjsPath2215" d="M 22.5 7.134146341463413 A 15.365853658536587 15.365853658536587 0 1 1 17.751690086433737 37.11379525038895" fill="none" fill-opacity="0.85" stroke="rgba(91,115,232,0.85)" stroke-opacity="1" stroke-linecap="butt" stroke-width="4.390243902439025" stroke-dasharray="0" class="apexcharts-radialbar-area apexcharts-radialbar-slice-0" data:angle="198" data:value="55" index="0" j="0" data:pathOrig="M 22.5 7.134146341463413 A 15.365853658536587 15.365853658536587 0 1 1 17.751690086433737 37.11379525038895" selected="true" filter="url(#SvgjsFilter2292)"></path></g><circle id="SvgjsCircle2213" r="13.23658536585366" cx="22.5" cy="22.5" class="apexcharts-radialbar-hollow" fill="transparent"></circle></g></g></g><line id="SvgjsLine2216" x1="0" y1="0" x2="45" y2="0" stroke="#b6b6b6" stroke-dasharray="0" stroke-width="1" class="apexcharts-ycrosshairs"></line><line id="SvgjsLine2217" x1="0" y1="0" x2="45" y2="0" stroke-dasharray="0" stroke-width="0" class="apexcharts-ycrosshairs-hidden"></line></g><g id="SvgjsG2204" class="apexcharts-annotations"></g></svg><div class="apexcharts-legend"></div></div>'
            else if (this.cnt == 4)
                this.small_chart = '<div id="apexchartslj9zxy2r" class="apexcharts-canvas apexchartslj9zxy2r apexcharts-theme-light" style="width: 70px; height: 40px;"><svg id="SvgjsSvg2218" width="70" height="40" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" class="apexcharts-svg" xmlns:data="ApexChartsNS" transform="translate(0, 0)" style="background: transparent;"><g id="SvgjsG2220" class="apexcharts-inner apexcharts-graphical" transform="translate(0, 0)"><defs id="SvgjsDefs2219"><linearGradient id="SvgjsLinearGradient2224" x1="0" y1="0" x2="0" y2="1"><stop id="SvgjsStop2225" stop-opacity="0.4" stop-color="rgba(216,227,240,0.4)" offset="0"></stop><stop id="SvgjsStop2226" stop-opacity="0.5" stop-color="rgba(190,209,230,0.5)" offset="1"></stop><stop id="SvgjsStop2227" stop-opacity="0.5" stop-color="rgba(190,209,230,0.5)" offset="1"></stop></linearGradient><clipPath id="gridRectMasklj9zxy2r"><rect id="SvgjsRect2230" width="74" height="40" x="-2" y="0" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clipPath><clipPath id="gridRectMarkerMasklj9zxy2r"><rect id="SvgjsRect2231" width="74" height="44" x="-2" y="-2" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clipPath></defs><line id="SvgjsLine2229" x1="40.727275501598015" y1="0" x2="40.727275501598015" y2="40" stroke-dasharray="3" class="apexcharts-xcrosshairs" x="40.727275501598015" y="0" width="1" height="40" fill="url(#SvgjsLinearGradient2224)" filter="none" fill-opacity="0.9" stroke-width="0"></line><g id="SvgjsG2246" class="apexcharts-xaxis" transform="translate(0, 0)"><g id="SvgjsG2247" class="apexcharts-xaxis-texts-g" transform="translate(0, 2.75)"></g></g><g id="SvgjsG2260" class="apexcharts-grid"><g id="SvgjsG2261" class="apexcharts-gridlines-horizontal" style="display: none;"><line id="SvgjsLine2263" x1="0" y1="0" x2="70" y2="0" stroke="#e0e0e0" stroke-dasharray="0" class="apexcharts-gridline"></line><line id="SvgjsLine2264" x1="0" y1="8" x2="70" y2="8" stroke="#e0e0e0" stroke-dasharray="0" class="apexcharts-gridline"></line><line id="SvgjsLine2265" x1="0" y1="16" x2="70" y2="16" stroke="#e0e0e0" stroke-dasharray="0" class="apexcharts-gridline"></line><line id="SvgjsLine2266" x1="0" y1="24" x2="70" y2="24" stroke="#e0e0e0" stroke-dasharray="0" class="apexcharts-gridline"></line><line id="SvgjsLine2267" x1="0" y1="32" x2="70" y2="32" stroke="#e0e0e0" stroke-dasharray="0" class="apexcharts-gridline"></line><line id="SvgjsLine2268" x1="0" y1="40" x2="70" y2="40" stroke="#e0e0e0" stroke-dasharray="0" class="apexcharts-gridline"></line></g><g id="SvgjsG2262" class="apexcharts-gridlines-vertical" style="display: none;"></g><line id="SvgjsLine2270" x1="0" y1="40" x2="70" y2="40" stroke="transparent" stroke-dasharray="0"></line><line id="SvgjsLine2269" x1="0" y1="1" x2="0" y2="40" stroke="transparent" stroke-dasharray="0"></line></g><g id="SvgjsG2232" class="apexcharts-bar-series apexcharts-plot-series"><g id="SvgjsG2233" class="apexcharts-series" rel="1" seriesName="seriesx1" data:realIndex="0"><path id="SvgjsPath2235" d="M 1.5909090909090908 40L 1.5909090909090908 30L 4.7727272727272725 30L 4.7727272727272725 30L 4.7727272727272725 40L 4.7727272727272725 40z" fill="rgba(241,180,76,0.85)" fill-opacity="1" stroke-opacity="1" stroke-linecap="square" stroke-width="0" stroke-dasharray="0" class="apexcharts-bar-area" index="0" clip-path="url(#gridRectMasklj9zxy2r)" pathTo="M 1.5909090909090908 40L 1.5909090909090908 30L 4.7727272727272725 30L 4.7727272727272725 30L 4.7727272727272725 40L 4.7727272727272725 40z" pathFrom="M 1.5909090909090908 40L 1.5909090909090908 40L 4.7727272727272725 40L 4.7727272727272725 40L 4.7727272727272725 40L 1.5909090909090908 40" cy="30" cx="7.954545454545454" j="0" val="25" barHeight="10" barWidth="3.1818181818181817"></path><path id="SvgjsPath2236" d="M 7.954545454545454 40L 7.954545454545454 13.600000000000001L 11.136363636363637 13.600000000000001L 11.136363636363637 13.600000000000001L 11.136363636363637 40L 11.136363636363637 40z" fill="rgba(241,180,76,0.85)" fill-opacity="1" stroke-opacity="1" stroke-linecap="square" stroke-width="0" stroke-dasharray="0" class="apexcharts-bar-area" index="0" clip-path="url(#gridRectMasklj9zxy2r)" pathTo="M 7.954545454545454 40L 7.954545454545454 13.600000000000001L 11.136363636363637 13.600000000000001L 11.136363636363637 13.600000000000001L 11.136363636363637 40L 11.136363636363637 40z" pathFrom="M 7.954545454545454 40L 7.954545454545454 40L 11.136363636363637 40L 11.136363636363637 40L 11.136363636363637 40L 7.954545454545454 40" cy="13.600000000000001" cx="14.318181818181817" j="1" val="66" barHeight="26.4" barWidth="3.1818181818181817"></path><path id="SvgjsPath2237" d="M 14.318181818181817 40L 14.318181818181817 23.6L 17.5 23.6L 17.5 23.6L 17.5 40L 17.5 40z" fill="rgba(241,180,76,0.85)" fill-opacity="1" stroke-opacity="1" stroke-linecap="square" stroke-width="0" stroke-dasharray="0" class="apexcharts-bar-area" index="0" clip-path="url(#gridRectMasklj9zxy2r)" pathTo="M 14.318181818181817 40L 14.318181818181817 23.6L 17.5 23.6L 17.5 23.6L 17.5 40L 17.5 40z" pathFrom="M 14.318181818181817 40L 14.318181818181817 40L 17.5 40L 17.5 40L 17.5 40L 14.318181818181817 40" cy="23.6" cx="20.68181818181818" j="2" val="41" barHeight="16.4" barWidth="3.1818181818181817"></path><path id="SvgjsPath2238" d="M 20.68181818181818 40L 20.68181818181818 4.399999999999999L 23.86363636363636 4.399999999999999L 23.86363636363636 4.399999999999999L 23.86363636363636 40L 23.86363636363636 40z" fill="rgba(241,180,76,0.85)" fill-opacity="1" stroke-opacity="1" stroke-linecap="square" stroke-width="0" stroke-dasharray="0" class="apexcharts-bar-area" index="0" clip-path="url(#gridRectMasklj9zxy2r)" pathTo="M 20.68181818181818 40L 20.68181818181818 4.399999999999999L 23.86363636363636 4.399999999999999L 23.86363636363636 4.399999999999999L 23.86363636363636 40L 23.86363636363636 40z" pathFrom="M 20.68181818181818 40L 20.68181818181818 40L 23.86363636363636 40L 23.86363636363636 40L 23.86363636363636 40L 20.68181818181818 40" cy="4.399999999999999" cx="27.045454545454543" j="3" val="89" barHeight="35.6" barWidth="3.1818181818181817"></path><path id="SvgjsPath2239" d="M 27.045454545454543 40L 27.045454545454543 14.8L 30.227272727272727 14.8L 30.227272727272727 14.8L 30.227272727272727 40L 30.227272727272727 40z" fill="rgba(241,180,76,0.85)" fill-opacity="1" stroke-opacity="1" stroke-linecap="square" stroke-width="0" stroke-dasharray="0" class="apexcharts-bar-area" index="0" clip-path="url(#gridRectMasklj9zxy2r)" pathTo="M 27.045454545454543 40L 27.045454545454543 14.8L 30.227272727272727 14.8L 30.227272727272727 14.8L 30.227272727272727 40L 30.227272727272727 40z" pathFrom="M 27.045454545454543 40L 27.045454545454543 40L 30.227272727272727 40L 30.227272727272727 40L 30.227272727272727 40L 27.045454545454543 40" cy="14.8" cx="33.40909090909091" j="4" val="63" barHeight="25.2" barWidth="3.1818181818181817"></path><path id="SvgjsPath2240" d="M 33.40909090909091 40L 33.40909090909091 30L 36.590909090909086 30L 36.590909090909086 30L 36.590909090909086 40L 36.590909090909086 40z" fill="rgba(241,180,76,0.85)" fill-opacity="1" stroke-opacity="1" stroke-linecap="square" stroke-width="0" stroke-dasharray="0" class="apexcharts-bar-area" index="0" clip-path="url(#gridRectMasklj9zxy2r)" pathTo="M 33.40909090909091 40L 33.40909090909091 30L 36.590909090909086 30L 36.590909090909086 30L 36.590909090909086 40L 36.590909090909086 40z" pathFrom="M 33.40909090909091 40L 33.40909090909091 40L 36.590909090909086 40L 36.590909090909086 40L 36.590909090909086 40L 33.40909090909091 40" cy="30" cx="39.772727272727266" j="5" val="25" barHeight="10" barWidth="3.1818181818181817"></path><path id="SvgjsPath2241" d="M 39.772727272727266 40L 39.772727272727266 22.4L 42.954545454545446 22.4L 42.954545454545446 22.4L 42.954545454545446 40L 42.954545454545446 40z" fill="rgba(241,180,76,0.85)" fill-opacity="1" stroke-opacity="1" stroke-linecap="square" stroke-width="0" stroke-dasharray="0" class="apexcharts-bar-area" index="0" clip-path="url(#gridRectMasklj9zxy2r)" pathTo="M 39.772727272727266 40L 39.772727272727266 22.4L 42.954545454545446 22.4L 42.954545454545446 22.4L 42.954545454545446 40L 42.954545454545446 40z" pathFrom="M 39.772727272727266 40L 39.772727272727266 40L 42.954545454545446 40L 42.954545454545446 40L 42.954545454545446 40L 39.772727272727266 40" cy="22.4" cx="46.136363636363626" j="6" val="44" barHeight="17.6" barWidth="3.1818181818181817"></path><path id="SvgjsPath2242" d="M 46.136363636363626 40L 46.136363636363626 35.2L 49.318181818181806 35.2L 49.318181818181806 35.2L 49.318181818181806 40L 49.318181818181806 40z" fill="rgba(241,180,76,0.85)" fill-opacity="1" stroke-opacity="1" stroke-linecap="square" stroke-width="0" stroke-dasharray="0" class="apexcharts-bar-area" index="0" clip-path="url(#gridRectMasklj9zxy2r)" pathTo="M 46.136363636363626 40L 46.136363636363626 35.2L 49.318181818181806 35.2L 49.318181818181806 35.2L 49.318181818181806 40L 49.318181818181806 40z" pathFrom="M 46.136363636363626 40L 46.136363636363626 40L 49.318181818181806 40L 49.318181818181806 40L 49.318181818181806 40L 46.136363636363626 40" cy="35.2" cx="52.499999999999986" j="7" val="12" barHeight="4.8" barWidth="3.1818181818181817"></path><path id="SvgjsPath2243" d="M 52.499999999999986 40L 52.499999999999986 25.6L 55.681818181818166 25.6L 55.681818181818166 25.6L 55.681818181818166 40L 55.681818181818166 40z" fill="rgba(241,180,76,0.85)" fill-opacity="1" stroke-opacity="1" stroke-linecap="square" stroke-width="0" stroke-dasharray="0" class="apexcharts-bar-area" index="0" clip-path="url(#gridRectMasklj9zxy2r)" pathTo="M 52.499999999999986 40L 52.499999999999986 25.6L 55.681818181818166 25.6L 55.681818181818166 25.6L 55.681818181818166 40L 55.681818181818166 40z" pathFrom="M 52.499999999999986 40L 52.499999999999986 40L 55.681818181818166 40L 55.681818181818166 40L 55.681818181818166 40L 52.499999999999986 40" cy="25.6" cx="58.863636363636346" j="8" val="36" barHeight="14.4" barWidth="3.1818181818181817"></path><path id="SvgjsPath2244" d="M 58.863636363636346 40L 58.863636363636346 36.4L 62.045454545454525 36.4L 62.045454545454525 36.4L 62.045454545454525 40L 62.045454545454525 40z" fill="rgba(241,180,76,0.85)" fill-opacity="1" stroke-opacity="1" stroke-linecap="square" stroke-width="0" stroke-dasharray="0" class="apexcharts-bar-area" index="0" clip-path="url(#gridRectMasklj9zxy2r)" pathTo="M 58.863636363636346 40L 58.863636363636346 36.4L 62.045454545454525 36.4L 62.045454545454525 36.4L 62.045454545454525 40L 62.045454545454525 40z" pathFrom="M 58.863636363636346 40L 58.863636363636346 40L 62.045454545454525 40L 62.045454545454525 40L 62.045454545454525 40L 58.863636363636346 40" cy="36.4" cx="65.2272727272727" j="9" val="9" barHeight="3.6" barWidth="3.1818181818181817"></path><path id="SvgjsPath2245" d="M 65.2272727272727 40L 65.2272727272727 18.4L 68.40909090909089 18.4L 68.40909090909089 18.4L 68.40909090909089 40L 68.40909090909089 40z" fill="rgba(241,180,76,0.85)" fill-opacity="1" stroke-opacity="1" stroke-linecap="square" stroke-width="0" stroke-dasharray="0" class="apexcharts-bar-area" index="0" clip-path="url(#gridRectMasklj9zxy2r)" pathTo="M 65.2272727272727 40L 65.2272727272727 18.4L 68.40909090909089 18.4L 68.40909090909089 18.4L 68.40909090909089 40L 68.40909090909089 40z" pathFrom="M 65.2272727272727 40L 65.2272727272727 40L 68.40909090909089 40L 68.40909090909089 40L 68.40909090909089 40L 65.2272727272727 40" cy="18.4" cx="71.59090909090907" j="10" val="54" barHeight="21.6" barWidth="3.1818181818181817"></path></g><g id="SvgjsG2234" class="apexcharts-datalabels" data:realIndex="0"></g></g><line id="SvgjsLine2271" x1="0" y1="0" x2="70" y2="0" stroke="#b6b6b6" stroke-dasharray="0" stroke-width="1" class="apexcharts-ycrosshairs"></line><line id="SvgjsLine2272" x1="0" y1="0" x2="70" y2="0" stroke-dasharray="0" stroke-width="0" class="apexcharts-ycrosshairs-hidden"></line><g id="SvgjsG2273" class="apexcharts-yaxis-annotations"></g><g id="SvgjsG2274" class="apexcharts-xaxis-annotations"></g><g id="SvgjsG2275" class="apexcharts-point-annotations"></g></g><rect id="SvgjsRect2228" width="0" height="0" x="0" y="0" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fefefe"></rect><g id="SvgjsG2259" class="apexcharts-yaxis" rel="0" transform="translate(-18, 0)"></g><g id="SvgjsG2221" class="apexcharts-annotations"></g></svg><div class="apexcharts-legend" style="max-height: 20px;"></div><div class="apexcharts-tooltip apexcharts-theme-light" style="left: -0.178974px; top: 5px;"><div class="apexcharts-tooltip-series-group apexcharts-active" style="order: 1; display: flex;"><span class="apexcharts-tooltip-marker" style="background-color: rgba(241, 180, 76, 0.85); display: none;"></span><div class="apexcharts-tooltip-text" style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;"><div class="apexcharts-tooltip-y-group"><span class="apexcharts-tooltip-text-label"></span><span class="apexcharts-tooltip-text-value">44</span></div><div class="apexcharts-tooltip-z-group"><span class="apexcharts-tooltip-text-z-label"></span><span class="apexcharts-tooltip-text-z-value"></span></div></div></div></div><div class="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light"><div class="apexcharts-yaxistooltip-text"></div></div></div>'

            ++this.cnt;

            //<span class="avatar-title ${this.soft_bg} text-primary font-size-16 rounded-circle" >

            //    </span>

            //chnnlAnlytcsVz_Global.LoadChnnlTrend()
            //<div class="card spd-anlyzr-crd" onclick='SpendAnalyzer.BusinessObjects.ChnnlAnlytcsCntrlr.LoadChnnlTrend("${spndTyp}")'>
            return ` <div class="col-xl-4 col-sm-6">
                                <div class="card spd-anlyzr-crd" id='${id}'>
                                    <div class="card-body">
                                        <div class="d-flex align-items-start">
                                            <div class="flex-shrink-0 me-4">
                                                <div class="avatar-sm">
                                                
                                                     ${this.small_chart}
                                                </div>
                                            </div>
                                            <div class="flex-grow-1 align-self-center">
                                                <div class="border-bottom pb-1">

                                                    <h5 class="text-truncate font-size-16 mb-1">
                                                        <a href="#" class="text-dark">${spndTyp}</a>
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
                                                            <p class="text-muted mb-2">Volume</p>
                                                            <h5 class="font-size-20 mb-0">${SpdAnlyzrUtil.FormatNumber(this.intl.formatNumber(vol, { format: 'n0' }))}</h5>
                                                        </div>
                                                    </div>
                                                    <div class="col-6">
                                                        <div class="mt-3">
                                                            <p class="text-muted mb-2">Value</p>
                                                            <h5 class="font-size-20 mb-0">&#x20A6; ${SpdAnlyzrUtil.FormatNumber(this.intl.formatNumber(val, { format: 'n0' }))}</h5>
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