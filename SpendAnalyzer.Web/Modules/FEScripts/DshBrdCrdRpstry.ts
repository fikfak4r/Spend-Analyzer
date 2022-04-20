namespace SpendAnalyzer.BusinessObjects {

    export class DshBrdCrdRpstry implements EventTarget {

        private delegate = document.createDocumentFragment()
        public onLoad: (res: any) => void;
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


        public Load(_startDate, _endDate) {
            Q.serviceRequest('/Services/Administration/User/ProcessRequest', {
                "QryBldrLstA": [
                    {
                        "QryCntnr": {
                            "Id": "PQ143",
                            "QMD": {
                                "condition": "and",
                                "rules": [
                                    {

                                        "Id": null,
                                        "condition": null,
                                        "label": "Transactions",
                                        "field": "Transactions",
                                        "operator": "equal",
                                        "value": "PQ143_query-editor-PQ143_group0_rule0_valuekey0:Spend Summary",
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
                                    "TemplateName": "Spend Summary",
                                    "FullName": "Spend Summary.DateStamp",
                                    "FullName_2": "Spend Summary.DateStamp",
                                    "IsGroupBy": false,
                                    "Hide": false,
                                    "UnionTableName": null,
                                    "Value": "PQ143_query-editor-PQ143_group0_rule0_valuekey0:Spend Summary",
                                    "IsSelected": false,
                                    "GroupRuleId": "query-editor-PQ143_group0_rule0_valuekey0",
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
                                    "Name": "TrnxCnt",
                                    "Alias": null,
                                    "RunTimeTableName": null,
                                    "TemplateName": "Spend Summary",
                                    "FullName": "Spend Summary.TrnxCnt",
                                    "FullName_2": "Spend Summary.TrnxCnt",
                                    "IsGroupBy": false,
                                    "Hide": false,
                                    "UnionTableName": null,
                                    "Value": "PQ143_query-editor-PQ143_group0_rule0_valuekey0:Spend Summary",
                                    "IsSelected": true,
                                    "GroupRuleId": "query-editor-PQ143_group0_rule0_valuekey0",
                                    "CurFldNm": "Spend Summary.TrnxCnt",
                                    "Cs": null,
                                    "IsCs": false,
                                    "GB": false,
                                    "AG": "Sum",
                                    "OtPt": null,
                                    "Ma__in_Id": null,
                                    "Apd": null
                                },
                                {
                                    "Name": "Amount",
                                    "Alias": null,
                                    "RunTimeTableName": null,
                                    "TemplateName": "Spend Summary",
                                    "FullName": "Spend Summary.Amount",
                                    "FullName_2": "Spend Summary.Amount",
                                    "IsGroupBy": false,
                                    "Hide": false,
                                    "UnionTableName": null,
                                    "Value": "PQ143_query-editor-PQ143_group0_rule0_valuekey0:Spend Summary",
                                    "IsSelected": true,
                                    "GroupRuleId": "query-editor-PQ143_group0_rule0_valuekey0",
                                    "CurFldNm": "Spend Summary.Amount",
                                    "Cs": null,
                                    "IsCs": false,
                                    "GB": false,
                                    "AG": "Sum",
                                    "OtPt": null,
                                    "Ma__in_Id": null,
                                    "Apd": null
                                },
                                {
                                    "Name": "Cstmrs",
                                    "Alias": null,
                                    "RunTimeTableName": null,
                                    "TemplateName": "Spend Summary",
                                    "FullName": "Spend Summary.Cstmrs",
                                    "FullName_2": "Spend Summary.Cstmrs",
                                    "IsGroupBy": false,
                                    "Hide": false,
                                    "UnionTableName": null,
                                    "Value": "PQ143_query-editor-PQ143_group0_rule0_valuekey0:Spend Summary",
                                    "IsSelected": true,
                                    "GroupRuleId": "query-editor-PQ143_group0_rule0_valuekey0",
                                    "CurFldNm": "Spend Summary.Cstmrs",
                                    "Cs": null,
                                    "IsCs": false,
                                    "GB": false,
                                    "AG": "Max",
                                    "OtPt": null,
                                    "Ma__in_Id": null,
                                    "Apd": null
                                }
                            ],
                            "CaseFields": null,
                            "QryVar": null
                        },
                        "ParamQryBldrList": [
                            {
                                "Id": "PQ143_query-editor-PQ143_group0_rule0_valuekey0",
                                "InputRuleParam": {
                                    "Id": null,
                                    "condition": "and",
                                    "label": null,
                                    "field": null,
                                    "operator": null,
                                    "value": null,
                                    "type": null,
                                    "rules": [
                                        {
                                            "Id": null,
                                            "condition": null,
                                            "label": "DateStamp",
                                            "field": "DateStamp",
                                            "operator": "greaterthanorequal",
                                            "value": _startDate,
                                            "type": "date",
                                            "rules": null
                                        },
                                        {
                                            "Id": null,
                                            "condition": null,
                                            "label": "DateStamp",
                                            "field": "DateStamp",
                                            "operator": "lessthanorequal",
                                            "value": _endDate,
                                            "type": "date",
                                            "rules": null
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                ],
                "QryBldr_B": null,
                "Rpt": null,
                "ColumnsModel": null,
                "QueryParams": null
            } , res => {
                this.onLoad(res);

            }, { error: function (x, y, z) { alert("Error: " + JSON.stringify(x) + '\\n' + y + '\\n' + z); } })

        }//Ends the Load 





    }




}