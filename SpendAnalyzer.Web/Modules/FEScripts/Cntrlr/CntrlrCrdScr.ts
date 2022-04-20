namespace SpendAnalyzer.BusinessObjects {

    export class CntrlrCrdScr {


        private accountNumber
        private grpAccountNumber1
        private grpAccountNumber2
        private grpAccountNumber3
        private grpAccountNumber4




        constructor() {
            this.accountNumber = new ej.inputs.TextBox({
                placeholder: 'Account Number',
                floatLabelType: 'Auto'
            });
            this.accountNumber.appendTo('#indv-input-txt');
            var button = new ej.buttons.Button({ content:"Submit" });
            button.appendTo('#indv-submit-btn');






            this.grpAccountNumber1 = new ej.inputs.TextBox({
                placeholder: 'Account Number 1',
                floatLabelType: 'Auto'
            });
            this.grpAccountNumber1.appendTo('#grp-account-number-1');

            this.grpAccountNumber2 = new ej.inputs.TextBox({
                placeholder: 'Account Number 2',
                floatLabelType: 'Auto'
            });
            this.grpAccountNumber2.appendTo('#grp-account-number-2');

            this.grpAccountNumber3 = new ej.inputs.TextBox({
                placeholder: 'Account Number 3',
                floatLabelType: 'Auto'
            });
            this.grpAccountNumber3.appendTo('#grp-account-number-3');

            this.grpAccountNumber4 = new ej.inputs.TextBox({
                placeholder: 'Account Number 4',
                floatLabelType: 'Auto'
            });
            this.grpAccountNumber4.appendTo('#grp-account-number-4');

            var button = new ej.buttons.Button({ content: "Submit" });
            button.appendTo('#grp-submit-btn');

        }
    }

}