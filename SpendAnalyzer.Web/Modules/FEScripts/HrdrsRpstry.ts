namespace SpendAnalyzer.BusinessObjects {

    export class HrdrsRpstry implements EventTarget {

        private delegate = document.createDocumentFragment()
        public onLoad: (hrdrs:HrdrsRpstry) => void;

        public Suffix: string;
        public Res:[]

        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void {
            this.delegate.addEventListener.apply(this.delegate, [type, listener])
        }
        dispatchEvent(event: Event): boolean {
            return this.delegate.dispatchEvent.apply(this.delegate, [event]);
        }
        removeEventListener(type: string, callback: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void {
            return this.delegate.removeEventListener.apply(this.delegate, callback)
        }


        public Load(tblNm, prfx, suffix) {
            //Q.serviceRequest('/Services/BusinessObjects/SpendDt/ProcessRequest', {
            Q.serviceRequest('/Services/Administration/User/ProcessRequest', {
                "QryBldrLstA": [
                    {
                        "QryCntnr": {
                            "Id": "PQ133",
                            "QMD": {

                                "condition": "and",
                                "rules": [
                                    {
                                        "Id": null,
                                        "condition": null,
                                        "label": "SpendAnalyzer",
                                        "field": "SpendAnalyzer",
                                        "operator": "equal",
                                        "value": "PQ133_query-editor-PQ133_group0_rule0_valuekey0:Spd Anlyzr Table Headers",
                                        "type": "string",
                                        "rules": null
                                    }
                                ]
                            }
                        },

                        "QuerySetComp": {
                            "SelectFields": [
                                {   
                                    "Name": "COLUMN_NAME",
                                    "Alias": null,
                                    "RunTimeTableName": null,
                                    "TemplateName": "Spd Anlyzr Table Headers",
                                    "FullName": "Spd Anlyzr Table Headers.COLUMN_NAME",
                                    "FullName_2": "Spd Anlyzr Table Headers.COLUMN_NAME",
                                    "IsGroupBy": false,
                                    "Hide": false,
                                    "UnionTableName": null,
                                    "Value": "PQ133_query-editor-PQ133_group0_rule0_valuekey0:Spd Anlyzr Table Headers",
                                    "IsSelected": true,
                                    "GroupRuleId": "query-editor-PQ133_group0_rule0_valuekey0",
                                    "CurFldNm": null,
                                    "Cs": null,
                                    "IsCs": false,
                                    "GB": false,
                                    "AG": null,
                                    "OtPt": null,
                                    "Ma__in_Id": null,
                                    "Apd": null
                                }    
                            ],
                            "CaseFields": null,
                            "QryVar": [
                                {
                                    "Id": "PQ133_query-editor-PQ133_group0_rule0_valuekey0",
                                    "Name": "tblNm",
                                    "Value": tblNm
                                },
                                {
                                    "Id": "PQ133_query-editor-PQ133_group0_rule0_valuekey0",
                                    "Name": "prfx",
                                    "Value": prfx
                                },
                                {
                                    "Id": "PQ133_query-editor-PQ133_group0_rule0_valuekey0",
                                    "Name": "suffix",
                                    "Value": suffix
                                }

                            ]
                        },
                        "ParamQryBldrList": []
                    }
                ],
                "QryBldr_B": null,
                "Rpt": null,
                "ColumnsModel": null,
                "QueryParams": null
            }, res => {
                    this.onLoad(<HrdrsRpstry>{Suffix: suffix, Res:res});
                //[].map((val, index, arr) => {return val.COLUMN_NAME}).join(',')
                   
            }, { error: function (x, y, z) { alert("Error: " + JSON.stringify(x) + '\\n' + y + '\\n' + z); } })

        }//Ends the Load 


        public getCols(cols) {
            return cols.map((val, index, arr) => {
                return val.COLUMN_NAME

            }).join(',');
        }


    }

   


}