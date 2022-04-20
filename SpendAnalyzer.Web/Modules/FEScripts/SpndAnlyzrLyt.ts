namespace SpendAnalyzer.BusinessObjects {
    export class SpndAnlyzrLyt {

        private appRpstry: AppRpstry;
        private spdAnlyzrTab: ej.navigations.Tab;
        private crdScr: CntrlrCrdScr;
        private cntrlrSpdDshBrd: SpdDshBrdCntrlr;
        private chnnlAnlytcsCntrlr: ChnnlAnlytcsCntrlr;
        private modelController: ModelController;
        private cntrlrCmpgn: CntrlrCmpgn;
        private sdBr: SdBr;
        private spdAnlyzrTabSlctdIndex: number = 0;
        private spnd_dshbrd_container_b_tab: ej.navigations.Tab;



        private isOnceOpenedWorkSpace: boolean;


        constructor() {

            this.isOnceOpenedWorkSpace = false;

            this.appRpstry = new AppRpstry();

            this.appRpstry.PropStartDate = '2020-10-01'
            this.appRpstry.PropEndDate = '2021-03-31'

            this.spdAnlyzrTab = new ej.navigations.Tab({
                heightAdjustMode: 'None',
                showCloseButton: false,
                items: [
                    { header: { 'text': 'Spend Dashboard' }, content: '#spend-dashboard-pane', },
                    { header: { 'text': 'Channel Analytics' }, content: '#channel-analytics-pane', },
                    //{ header: { 'text': 'Credit Scoring' }, content: '#credit-scoring-pane', },
                    { header: { 'text': 'Models' }, content: '#models-pane', },
                    { header: { 'text': 'Campaign Dashboard' }, content: '#campaign-dashboard-pane', },
                    { header: { 'text': 'e-Naira' }, content: '#bitcoin-pane', },
                    { header: { 'text': 'Workspace' }, content: '#workspace-pane', },
                ], selected: (e) => {


                    if (e.selectedIndex == 0) {

                        this.spdAnlyzrTabSlctdIndex = e.selectedIndex;

                        if (!this.cntrlrSpdDshBrd) {
                            this.cntrlrSpdDshBrd = new SpdDshBrdCntrlr(this.appRpstry);
                            this.cntrlrSpdDshBrd.Start();
                        }

                    }
                    else if (e.selectedIndex == 1) {

                        $("#channel-analytics-pane").removeClass("hide")

                        if (!this.chnnlAnlytcsCntrlr) {

                            this.chnnlAnlytcsCntrlr = new ChnnlAnlytcsCntrlr(this.appRpstry);
                            this.chnnlAnlytcsCntrlr.Start();
                        }

                        this.spdAnlyzrTabSlctdIndex = e.selectedIndex;

                    }
                    //else if (e.selectedIndex == 2) {
                    //    $("#credit-scoring-pane").removeClass("hide")

                    //    if (!this.crdScr) {

                    //        this.crdScr = new CntrlrCrdScr();
                    //    }

                    //}
                    else if (e.selectedIndex == 2) {
                        $("#models-pane").removeClass("hide")

                        if (!this.modelController) {

                            this.modelController = new ModelController(this.appRpstry);
                            this.modelController.Start();
                        }
                        this.spdAnlyzrTabSlctdIndex = e.selectedIndex;

                    }
                    else if (e.selectedIndex == 3) {

                        if (!this.cntrlrCmpgn) {
                            $("#campaign-dashboard-pane").removeClass("hide")
                            this.cntrlrCmpgn = new CntrlrCmpgn(this.appRpstry)
                            this.cntrlrCmpgn.Start();
                        }
                        this.spdAnlyzrTabSlctdIndex = e.selectedIndex;

                    }
                    else if (e.selectedIndex == 4) {
                        $("#bitcoin-pane").removeClass("hide")
                    }
                    else if (e.selectedIndex == 5) {

                        if (!this.isOnceOpenedWorkSpace) {

                            $("#workspace-pane").removeClass("hide")
                            $("#use-case-section").removeClass("hide")
                            $("#GridDiv").removeClass("hide")
                            $("#use-case-section").append($("#GridDiv"))
                            $("#GridDiv")[0].style.height = "650px";
                            $("#use-case-section-container").append($("#use-case-section"));
                            $("#GridDiv > div.grid-toolbar > div.tool-buttons > div > div > div.refresh-button").click();
                            this.isOnceOpenedWorkSpace = true;

                        }

                        this.spdAnlyzrTabSlctdIndex = e.selectedIndex;

                    }

                }

            });
            this.spdAnlyzrTab.appendTo('#spd-anlyzr-tab');





            this.sdBr = new SdBr(this.appRpstry);

            this.sdBr.GetSubmitButton().element.onclick = (args) => {



                this.sdBr.UpdateValues()

                if (this.spdAnlyzrTabSlctdIndex == 0) {

                    this.cntrlrSpdDshBrd.Start();

                } else if (this.spdAnlyzrTabSlctdIndex == 1) {

                    this.chnnlAnlytcsCntrlr.Start();

                }
                else if (this.spdAnlyzrTabSlctdIndex == 2) {

                    this.modelController.Start();

                }

                //console.log(JSON.stringify(this.appRpstry.GetDshBrdA()))

                //alert(this.cst_Sgmnt.value.join(','))
                //setTimeout(() => {
                //    alert('hi')
                //     //this.progressButton.duration = 2000
                //this.progressButton.refresh()
                //}, 8000)
                //progressButton.duration = 2000
                //progressButton.refresh()


            }


            this.cntrlrSpdDshBrd = new SpdDshBrdCntrlr(this.appRpstry);
            this.cntrlrSpdDshBrd.onLoad = () => {
                this.sdBr.FetchBranches();
            }

            this.cntrlrSpdDshBrd.Start();




        }



    

    }

}