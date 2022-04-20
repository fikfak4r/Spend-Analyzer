namespace SpendAnalyzer.BusinessObjects {

    export class DsdBrdTp10ChnnlGrd {

         grd: ej.grids.Grid;

        constructor() {

        }

        public Load(ds) {

            var dsMgr = new ej.data.DataManager({ json: ds, });

            this.grd = new ej.grids.Grid({

                dataSource: dsMgr,
                query: new ej.data.Query().sortByDesc("Amt").take(10),
                editSettings: {
                    allowEditing: false, allowAdding: false, allowDeleting: false,
                },
                width: "inherit",
                height: "180px",
                allowResizing: true,
                columns: [

                    //{ field: 'DateStamp', headerText: 'Date', type: "Date", format:'yMd',},
                    { field: "Chnnl", headerText: 'Channel',},
                    { field: "Amt", headerText: 'Amount', format:"n0", },

                ], cellEdit: (x) => { }, cellSave: (x) => {
                    //var valObj = this.attrArr.filter((value, index, array) => { return value.FullName_2 == x.previousValue })[0];
                    //valObj.FullName_2 = x.value;
                    //valObj.Alias = x.value;
                },
                actionComplete: (args) => {
                    if ((args.requestType === 'beginEdit' || args.requestType === 'add')) {


                    }
                }
            });

            this.grd.appendTo("#dsdBrdTp10ChnnlGrd")

        }

    }
}