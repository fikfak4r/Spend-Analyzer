namespace SpendAnalyzer.BusinessObjects {

    export class SdBr {


        private progressButton: ej.splitbuttons.ProgressButton;
        private cst_Sgmnt: ej.dropdowns.MultiSelect;
        private ageRange: ej.dropdowns.DropDownList
        private product: ej.dropdowns.DropDownList
        private tenure: ej.dropdowns.DropDownList
        private currCode: ej.buttons.CheckBox;
        private accountType: ej.dropdowns.MultiSelect;
        private progressBar: ej.progressbar.ProgressBar;


        public treeVw: ej.navigations.TreeView;
        private appRpstry: AppRpstry;



        constructor(appRpstry: AppRpstry) {

            this.SetSdBr();
            this.appRpstry = appRpstry;


            this.progressBar = new ej.progressbar.ProgressBar({
                type: 'Circular',
                value: 20,
                width: '105px',
                height: '105px',
                cornerRadius: 'Round',
                isIndeterminate: true,
                animation: {
                    enable: true,
                    duration: 2000,
                    delay: 0,
                },
                //load: progressLoad
            });
            this.progressBar.appendTo('#spnd-sdbr-prgrss-a');

        }

        public GetSubmitButton():ej.splitbuttons.ProgressButton{
            return this.progressButton;
        }


        public SetSdBr() {

            this.progressButton = new ej.splitbuttons.ProgressButton({

                content: 'Apply', isPrimary: true, cssClass: "e-outline e-flat apply-filter",
                duration: 1000, enableProgress: true,

            });

            this.progressButton.appendTo('#apply-filter');

       



            var dateRangeList = new ej.dropdowns.DropDownList({
                dataSource: DtMgr.GetDatePresets(),
                fields: { text: "label", value: "value" },
                change: (evt) => {
                    alert(dateRangeList.text)
                }
            })
            dateRangeList.appendTo("#daterange")


            //var dateRangePickerObject = new ej.calendars.DateRangePicker({

            //    format: 'MM/dd/yyyy', change: (args) => { this.appRpstry.PropStartDate = Q.formatDate(args.startDate, 'yyyy-MM-dd'); this.appRpstry.PropEndDate = Q.formatDate(args.endDate, 'yyyy-MM-dd') },
            //    startDate: new Date(this.appRpstry.PropStartDate),
            //    endDate: new Date(this.appRpstry.PropEndDate),
            //    showClearButton: false,
            //    allowEdit: false,
            //    presets: this.GetDatePresets(),


            //});
            //dateRangePickerObject.appendTo('#daterange');


            //alert(dateRangePickerObject.presets.length)
            //dateRangePickerObject.presets.pop()




            this.cst_Sgmnt = new ej.dropdowns.MultiSelect({
                dataSource: [{ label: "Card & Electronic Banking", value: "1" }, { label: "Corporate Banking", value: "2" }, { label: "Personal Banking", value: "3" }, { label: "SME Banking", value: "4" },],
                fields: { text: "label", value: "value" },
                placeholder: 'Select Customer segment',
                mode: 'Box',
                hideSelectedItem: true,
                closePopupOnSelect: false,
                //select: categoryUpdated,
                //removed: categoryUpdated
                change: (evt) => {
                    this.appRpstry.Prop_SEGMENT_CODE = evt.value.join(',')
                }
            });
            this.cst_Sgmnt.appendTo('#expense-category');


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


            //Age
            this.ageRange = new ej.dropdowns.DropDownList({
                dataSource: [{ label: "Less than 18 YRS", value: "1" }, { label: "18 - 24 YRS", value: "2" }, { label: "25 - 34 YRS", value: "3" }, { label: "35 - 44 YRS", value: "4" },
                    { label: "45 - 55 YRS", value: "5" }, { label: "55 - 64 YRS", value: "6" }, { label: "65 YRS & ABOVE", value: "7" }],
                fields: { text: "label", value: "value" },
                showClearButton: true,
                change: (evt) => {
                    // alert(evt.value)
                    this.appRpstry.Prop_AGE_CODE = evt.value != null ? String(evt.value) : null;
                }
            })
            this.ageRange.appendTo("#agerange")

            //Product
            this.product = new ej.dropdowns.DropDownList({
                dataSource: [{ label: "Platimum", value: "1" }, { label: "Diamond", value: "2" }, { label: "Gold", value: "3" }, { label: "Silver", value: "4" },
                    { label: "Bronze", value: "5" }],
                fields: { text: "label", value: "value" },
                showClearButton:true,
                change: (evt) => {
                    //alert(evt.value)
                    this.appRpstry.Prop_PRODUCT_CODE = evt.value != null ? String(evt.value) : null;

                }
            })
            this.product.appendTo("#product")

            //Account Type
            this.accountType = new ej.dropdowns.MultiSelect({
                dataSource: [{ label: "Current", value: "1" }, { label: "Loan", value: "2" }, { label: "Saving", value: "3" }],
                fields: { text: "label", value: "value" },
                placeholder: 'Select Account type',
                mode: 'Box',
                hideSelectedItem: true,
                closePopupOnSelect: false,
                change: (evt) => {
                    this.appRpstry.Prop_ACCOUNT_CODE = evt.value.join(',')
                }
                //select: categoryUpdated,
                //removed: categoryUpdated
            });
            this.accountType.appendTo('#account-type');

            //Transaction Type
            this.currCode = new ej.buttons.CheckBox({
                label: 'NGN', checked: true, value: "1", cssClass: 'TransactionType',
                change: (evt) => {

                }
            });
            this.currCode.appendTo('#cur-code-ngn');
            //

            this.tenure = new ej.dropdowns.DropDownList({
                dataSource: [{ label: "LESS THAN 2 YRS", value: "1" }, { label: "2 - 5 YRS", value: "2" }, { label: "5 - 10 YRS", value: "3" }, { label: "10 - 15 YRS", value: "4" },
                { label: "15 - 20 YRS", value: "5" }, { label: "20 - 25 YRS", value: "6" }, { label: "25 YRS AND ABOVE", value: "7" }],
                fields: { text: "label", value: "value" },
                showClearButton: true,
                change: (evt) => {
                    this.appRpstry.Prop_TENURE_CODE = evt.value != null ? String(evt.value) : null;
                }
            })
            this.tenure.appendTo("#tenure")


        }


        public UpdateValues() {
            this.appRpstry.Prop_CURRENCY_CODE = this.currCode.value
            this.appRpstry.Prop_BRANCH_CODE = SpdAnlyzrUtil.GetChckdBrnchs(this.treeVw)
        }


        public FetchBranches() {
            Q.serviceRequest('/Services/Administration/User/ProcessRequest', new SpendAnalyzer.BusinessObjects.AppRpstry().GetBranches(), res => {

                this.SetTree(SpdAnlyzrUtil.FormatTreeVwData(res));
                $(this.progressBar.element).hide();

                $("#spd-anlyzr-side-bar").removeClass("hidden")
                $("#spd-anlyzr-side-bar").slideDown(2500)

            }, { error: function (x, y, z) { alert("Error: " + JSON.stringify(x) + '\\n' + y + '\\n' + z); } })
        }


        public SetTree(data) {


            if (!this.treeVw) {
                this.treeVw = new ej.navigations.TreeView({

                    fields: { dataSource: data, id: 'nodeId', text: 'nodeText', child: 'nodeChild', hasChildren: "hasChildren", },
                    //fields: {
                    //    dataSource: data, id: 'nodeId', text: 'nodeText', parentID: 'parentNode', hasChildren :"hasChildren",
                    //},
                    showCheckBox: true,
                    autoCheck: true,
                    cssClass : "sdbr-branches-treevw"

                });
                this.treeVw.appendTo("#tr-syncfsn");
                this.treeVw.refresh();

            }


        }





    }
}