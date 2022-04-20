namespace SpendAnalyzer.BusinessObjects {

    let cst_Sgmnt: ej.dropdowns.MultiSelect;


    export class TrgrdLyt {


        private appRpstry: AppRpstry;
        private svcRqst: SvcRqst;
        private intl: ej.base.Internationalization
        private lnChart: TrgrtdAnlysLnChrt;
        private _smplVizInitzn: SmplVizInitzn;
        private _trgtdAnlysCrds: TrgtdAnlysCrds;
        private _trgtdTop10Chnls: TrgtdAnlysTop10Chnnls

        private progressButton: ej.buttons.Button;
        

        constructor() {

            this.appRpstry = new AppRpstry()
            this.svcRqst = new SvcRqst();

            this.appRpstry.PropStartDate = '2020-10-01'
            this.appRpstry.PropEndDate = '2021-03-31'

            this._smplVizInitzn = new SmplVizInitzn();

            this.intl = new ej.base.Internationalization();
            //this.CrdsBtns();
            this.lnChart = new TrgrtdAnlysLnChrt();
            //this.lnChart.Init();

            this._trgtdAnlysCrds = new TrgtdAnlysCrds(this.appRpstry, this.svcRqst);
            this._trgtdTop10Chnls = new TrgtdAnlysTop10Chnnls();

            this.SetHndlrs();

        }

        public IsSideBarInit: boolean;
        public SetSdBr() {
            this.IsSideBarInit = true;

            this.progressButton = new ej.splitbuttons.ProgressButton({
                content: 'Apply', isPrimary: true, cssClass: "e-outline e-flat",
                duration: 20000, enableProgress: true,
              
            });

            this.progressButton.appendTo('#apply-filter');

            this.progressButton.element.onclick = (args) => {
        
                //progressButton.duration = 2000
                //progressButton.refresh()
                this.svcRqst.Load(this.appRpstry.GetCstmrsCnt());

            }



      
            var dateRangePickerObject = new ej.calendars.DateRangePicker({
                format: 'MM/dd/yyyy', change: (args) => { this.appRpstry.PropStartDate = Q.formatDate(args.startDate, 'yyyy-MM-dd'); this.appRpstry.PropEndDate = Q.formatDate(args.endDate, 'yyyy-MM-dd') },
                startDate: new Date(this.appRpstry.PropStartDate),
                endDate: new Date(this.appRpstry.PropEndDate),
                showClearButton: false,
                allowEdit: false,
                presets: [
                    { label: 'Last Month', start: new Date('3/1/2021'), end: new Date('3/31/2021') },
                    { label: 'Last 3 Months', start: new Date('1/1/2021'), end: new Date('3/31/2021') },
                    { label: 'All Time', start: new Date('10/1/2020'), end: new Date('3/31/2021') }
                ]
            });
            dateRangePickerObject.appendTo('#daterange');






            //var sdBr = new ej.navigations.Tab({
            //    heightAdjustMode: 'None',
            //    showCloseButton: false,

            //    items: [
            //        { header: { iconCss: "sf-icon sf-icon-filter-09-wf icon" }, content: "#sidebar-pane-one" },
            //        { header: { iconCss: "sf-icon sf-icon-grouping icon" } }
            //    ]
            //});
            //sdBr.appendTo("#spd-anlyzr-sidebar")
            //sdBr.element.classList.add('e-fill');

            cst_Sgmnt = new ej.dropdowns.MultiSelect({
                dataSource: ['Kids', 'Coprate', 'SME'],
                placeholder: 'Select Customer segment',
                mode: 'Box',
                hideSelectedItem: true,
                closePopupOnSelect: false,
                //select: categoryUpdated,
                //removed: categoryUpdated
            });
            cst_Sgmnt.appendTo('#expense-category');


            var income = new ej.buttons.CheckBox({ label: 'Retail', checked: true, cssClass: 'TransactionType', /*change: onCheckBoxChange*/ });
            income.appendTo('#retail');
            var expenses = new ej.buttons.CheckBox({ label: 'Organisation', checked: true, cssClass: 'cust-type-org', /*change: onCheckBoxChange*/ });
            expenses.appendTo('#org');



            //var rangeObj = new ej.inputs.Slider({
            //    type: 'Range',
            //    cssClass: 'inlineAlign',
            //    showButtons: true,
            //    tooltip: { placement: 'Before', isVisible: true, showOn: 'Focus' },
            //    //min: numMinValue,
            //    //max: numMaxValue,
            //    //value: [numMinValue, numMaxValue],
            //    //change: amountChanged,
            //});
            //rangeObj.appendTo('#range');

            var rangeObj = new ej.inputs.Slider({
                value: [30, 70],
                type: 'Range',
                showButtons: true,
                tooltip: { placement: 'Before', isVisible: true, showOn: 'Focus' }
            });
            rangeObj.appendTo('#range');



        }

        private SetHndlrs() {

            this.svcRqst.onLoad = (res) => {

                if (this.appRpstry.AppRpstryCntxt == AppRpstryCntxt.GetCstmrsCnt) {

                    this._trgtdAnlysCrds.SetCstmrCnt(res)
                    this.svcRqst.Load(this.appRpstry.GetCardTrnxCntxt());
                } else if (this.appRpstry.AppRpstryCntxt == AppRpstryCntxt.GetCardTrnxCntxt) {

                    this._trgtdAnlysCrds.SetCrdsVals(res)

                    this.lnChart.ShowPreLoader();
                    this.svcRqst.Load(this.appRpstry.GetChannelsLnChrts())

                } else if (this.appRpstry.AppRpstryCntxt == AppRpstryCntxt.GetChannelsLnChrts) {
                    ///console.log(JSON.stringify(this._smplVizInitzn.Top10Chnls(res)))
                    this._trgtdTop10Chnls.Top10Chnls(res)
                    //this._smplVizInitzn.Top10Chnls(res)
                    if (!this.lnChart.IsInitiated)
                        this.lnChart.Init(res);
                    else
                        this.lnChart.UpdateLnChart(res)

                    this.progressButton.cssClass = 'e-outline e-flat'
                    this.progressButton.refresh();
                    this.lnChart.HidePreLoader();

                }
                else if (this.appRpstry.AppRpstryCntxt == AppRpstryCntxt.GetMonthlyAcquisition) {
                  
                    if(!this._trgtdAnlysCrds.isCustomerCntMntlyInit)
                        this._trgtdAnlysCrds.RndrMonthlyAcquisitionLnChrt(res)
                    else
                        this._trgtdAnlysCrds.UpdateMonthlyAcquisitionLnChrt(res)
          

                }


            }

        }




    }
}