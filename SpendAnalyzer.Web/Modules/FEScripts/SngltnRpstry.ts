namespace SpendAnalyzer.BusinessObjects {

    export class SngltnRpstry implements EventTarget {

        private delegate = document.createDocumentFragment()
        public onLoad: (res:[]) => void;

        public Suffix: string;
        public Res: []

        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void {
            this.delegate.addEventListener.apply(this.delegate, [type, listener])
        }
        dispatchEvent(event: Event): boolean {
            return this.delegate.dispatchEvent.apply(this.delegate, [event]);
        }
        removeEventListener(type: string, callback: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void {
            return this.delegate.removeEventListener.apply(this.delegate, callback)
        }


        public Load(_cols1, _cols2, _srcTl, _startDate, _endDate) {

            Q.serviceRequest('/Services/Administration/User/ProcessRequest', {
                "QryBldrLstA": [
                    {
                        "QryCntnr": {
                            "Id": "PQ132",
                            "QMD": {

                                "condition": "and",
                                "rules": [
                                    {
                                        "Id": null,
                                        "condition": null,
                                        "label": "Transactions",
                                        "field": "Transactions",
                                        "operator": "equal",
                                        "value": "PQ132_query-editor-PQ132_group0_rule0_valuekey0:Spd Anlyzr Singleton",
                                        "type": "string",
                                        "rules": null
                                    }
                                ]
                            }
                        },
                        "QuerySetComp": {
                            "SelectFields": [
                                {
                                    "Name": "DateStamp",
                                    "Alias": null,
                                    "RunTimeTableName": null,
                                    "TemplateName": "Spd Anlyzr Singleton",
                                    "FullName": "Spd Anlyzr Singleton.DateStamp",
                                    "FullName_2": "Spd Anlyzr Singleton.DateStamp",
                                    "IsGroupBy": false,
                                    "Hide": false,
                                    "UnionTableName": null,
                                    "Value": "PQ132_query-editor-PQ132_group0_rule0_valuekey0:Spd Anlyzr Singleton",
                                    "IsSelected": true,
                                    "GroupRuleId": "query-editor-PQ132_group0_rule0_valuekey0",
                                    "CurFldNm": null,
                                    "Cs": null,
                                    "IsCs": false,
                                    "GB": false,
                                    "AG": null,
                                    "OtPt": null,
                                    "Ma__in_Id": null,
                                    "Apd": null
                                },
                                {
                                    "Name": "Chnnl",
                                    "Alias": null,
                                    "RunTimeTableName": null,
                                    "TemplateName": "Spd Anlyzr Singleton",
                                    "FullName": "Spd Anlyzr Singleton.Chnnl",
                                    "FullName_2": "Spd Anlyzr Singleton.Chnnl",
                                    "IsGroupBy": false,
                                    "Hide": false,
                                    "UnionTableName": null,
                                    "Value": "PQ132_query-editor-PQ132_group0_rule0_valuekey0:Spd Anlyzr Singleton",
                                    "IsSelected": true,
                                    "GroupRuleId": "query-editor-PQ132_group0_rule0_valuekey0",
                                    "CurFldNm": null,
                                    "Cs": null,
                                    "IsCs": false,
                                    "GB": false,
                                    "AG": null,
                                    "OtPt": null,
                                    "Ma__in_Id": null,
                                    "Apd": null
                                },
                                {
                                    "Name": "Val",
                                    "Alias": null,
                                    "RunTimeTableName": null,
                                    "TemplateName": "Spd Anlyzr Singleton",
                                    "FullName": "Spd Anlyzr Singleton.Val",
                                    "FullName_2": "Spd Anlyzr Singleton.Val",
                                    "IsGroupBy": false,
                                    "Hide": false,
                                    "UnionTableName": null,
                                    "Value": "PQ132_query-editor-PQ132_group0_rule0_valuekey0:Spd Anlyzr Singleton",
                                    "IsSelected": true,
                                    "GroupRuleId": "query-editor-PQ132_group0_rule0_valuekey0",
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
                                    "Id": "PQ132_query-editor-PQ132_group0_rule0_valuekey0",
                                    "Name": "_cols1",
                                    "Value": _cols1
                                },
                                {
                                    "Id": "PQ132_query-editor-PQ132_group0_rule0_valuekey0",
                                    "Name": "_cols2",
                                    "Value": _cols2
                                },
                                {
                                    "Id": "PQ132_query-editor-PQ132_group0_rule0_valuekey0",
                                    "Name": "_startDate",
                                    "Value": _startDate
                                },
                                {
                                    "Id": "PQ132_query-editor-PQ132_group0_rule0_valuekey0",
                                    "Name": "_endDate",
                                    "Value": _endDate
                                },
                                {
                                    "Id": "PQ132_query-editor-PQ132_group0_rule0_valuekey0",
                                    "Name": "_srcTl",
                                    "Value": _srcTl
                                },
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
                    this.onLoad(<[]>res)
            }, { error: function (x, y, z) { alert("Error: " + JSON.stringify(x) + '\\n' + y + '\\n' + z); } })

        }//Ends the Load 

    }




}