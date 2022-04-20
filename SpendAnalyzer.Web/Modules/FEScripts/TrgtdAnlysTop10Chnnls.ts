namespace SpendAnalyzer.BusinessObjects {

    export class TrgtdAnlysTop10Chnnls {

        private _top10Chnls: ej.grids.Grid;

        public Top10Chnls(ds) {
            
            if (this._top10Chnls)
                this._top10Chnls.destroy();


            var prepData;
            var dsMgr = new ej.data.DataManager({ json: ds, });

            var qry = new ej.data.Query().sortBy("TrnxnCnt_Sum").group("Channel")
                .aggregate('sum', 'TrnxnAmt_Sum')
                .aggregate('sum', 'TrnxnCnt_Sum')

            dsMgr.executeQuery(qry).then((e) => {

                prepData = (e.result).map((item, index, arr) => {
                    return { Chnnl: item.key, Cnt: item.aggregates["TrnxnCnt_Sum - sum"], Amt: item.aggregates["TrnxnAmt_Sum - sum"] }
                });

                this._top10Chnls = new ej.grids.Grid({

                    dataSource: new ej.data.DataManager(prepData),
                    query: new ej.data.Query().sortByDesc("Amt").take(10),
                    editSettings: {
                        allowEditing: false, allowAdding: false, allowDeleting: false,
                    },
                    width: "inherit",
                    height: "180px",
                    allowResizing: true,
                    columns: [

                        //{ field: 'DateStamp', headerText: 'Date', type: "Date", format:'yMd',},
                        { field: "Chnnl", headerText: 'Channel', },
                        { field: "Cnt", headerText: 'Frequency', format: "n0", },
                        { field: "Amt", headerText: 'Amount', format: "n0", },

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
                this._top10Chnls.appendTo("#trgd-anlyzr-dsdBrdTp10ChnnlGrd")
            })
            /*
                dsMgr.executeQuery(qry).then((e) => {


                    //prepData = (e.result).map((item, index, arr) => {
                    //    return { Chnnl: item.key, Cnt: item.aggregates["TrnxnCnt_Sum - sum"], Amt: item.aggregates["TrnxnAmt_Sum - sum"] }
                    //});

                    //console.log(JSON.stringify(prepData))



                    //return 
                    this._top10Chnls = new ej.grids.Grid({

                        dataSource: new ej.data.DataManager(prepData),
                        query: new ej.data.Query().sortByDesc("Amt").take(10),
                        editSettings: {
                            allowEditing: false, allowAdding: false, allowDeleting: false,
                        },
                        width: "inherit",
                        height: "180px",
                        allowResizing: true,
                        columns: [

                            //{ field: 'DateStamp', headerText: 'Date', type: "Date", format:'yMd',},
                            { field: "Chnnl", headerText: 'Channel', },
                            { field: "Cnt", headerText: 'Frequency', format: "n0", },
                            { field: "Amt", headerText: 'Amount', format: "n0", },

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

                    this._top10Chnls.appendTo("#trgd-anlyzr-dsdBrdTp10ChnnlGrd")

           



            })//then(e) block
         
         */


        }

    }

}