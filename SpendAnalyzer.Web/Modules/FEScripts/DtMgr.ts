namespace SpendAnalyzer.BusinessObjects {

    export class DtMgr {

        constructor() { }

        public static GetDatePresets() {
            var presets = []

            var startPrevDate = this.GetPrevStartDate(new Date(), 1)
            var endPrevDate = this.GetPrevEndDate(new Date(), 1)
            for (var x = 1; x <= 12; x++) {
                switch (x) {

                    case 1:
                        presets.push({ label: 'Last Month', start: new Date(startPrevDate), end: new Date(this.GetPrevEndDate(new Date(), x)), value: endPrevDate })
                        break;
                    case 3:
                        presets.push({ label: 'Last 3 Months', start: this.GetPrevStartDate(new Date(), x), end: endPrevDate, value: this.GetPrevStartDate(new Date(), x) + ':' + endPrevDate })
                        break;
                    case 6:
                        presets.push({ label: 'Last 6 Months', start: this.GetPrevStartDate(new Date(), x), end: endPrevDate, value: this.GetPrevStartDate(new Date(), x) + ':' + endPrevDate })
                        break;
                    case 9:
                        presets.push({ label: 'Last 9 Months', start: this.GetPrevStartDate(new Date(), x), end: endPrevDate, value: this.GetPrevStartDate(new Date(), x) + ':' + endPrevDate })
                        break;
                    case 12:
                        presets.push({ label: 'Last 12 Months', start: this.GetPrevStartDate(new Date(), x), end: endPrevDate, value: this.GetPrevStartDate(new Date(), x) + ':' + endPrevDate })
                        break;

                }

            }//Ends the for loop

            return presets;
        }

        public static GetPrevStartDate(date, nOfMths) {
            let prevStartDate = new Date(date.getFullYear(), date.getMonth() - nOfMths, 1);
            return Q.formatDate(prevStartDate, 'MM/dd/yyyy')
        }

        public static GetPrevEndDate(date, nOfMths) {

            let prevEndDate = new Date(date.getFullYear(), date.getMonth() - nOfMths + 1, 0);
            return Q.formatDate(prevEndDate, 'MM/dd/yyyy');
        }


        public static GetDate(propName:string) {

            if (/[1]{1}/.test(propName)) {

                return DtMgr.GetPrevEndDate(new Date(), 6);

            }
            else if (/[2]{1}/.test(propName)) {

                 return DtMgr.GetPrevEndDate(new Date(), 5)

            }
            else if (/[3]{1}/.test(propName)) {

                 return DtMgr.GetPrevEndDate(new Date(), 4)

            }
            else if (/4{1}/.test(propName)) {

                 return DtMgr.GetPrevEndDate(new Date(), 3)

            }
            else if (/5{1}/.test(propName)) {

                 return DtMgr.GetPrevEndDate(new Date(), 2)

            }
            else if (/6{1}/.test(propName)) {

                return DtMgr.GetPrevEndDate(new Date(), 1)

            }
        }



    }

}