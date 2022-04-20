namespace SpendAnalyzer.BusinessObjects {

    export class SngltnAggrgtRpstry implements EventTarget {

        private delegate = document.createDocumentFragment()
        public onLoad: (res: []) => void;
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


        public Load(_cols, _colsSm, _colRplc, _srcTl, _startDate, _endDate) {
            Q.serviceRequest('/Services/Administration/User/ProcessRequest', {
                "QryBldrLstA": [
                    {
                        "QryCntnr": {

                            "Id": "PQ134",
                            "QMD": {
                                "condition": "and",
                                "rules": [
                                    {
                                        "Id": null,
                                        "condition": null,
                                        "label": "Transactions",
                                        "field": "Transactions",
                                        "operator": "equal",
                                        "value": "PQ134_query-editor-PQ134_group0_rule0_valuekey0:Spd Anlyzr Singleton Aggregate",
                                        "type": "string",
                                        "rules": null
                                    }
                                ]
                            }
                        },
                        "QuerySetComp": {
                            "SelectFields": [
                                {
                                    "Name": "Chnnl",
                                    "Alias": null,
                                    "RunTimeTableName": null,
                                    "TemplateName": "Spd Anlyzr Singleton Aggregate",
                                    "FullName": "Spd Anlyzr Singleton Aggregate.Chnnl",
                                    "FullName_2": "Spd Anlyzr Singleton Aggregate.Chnnl",
                                    "IsGroupBy": false,
                                    "Hide": false,
                                    "UnionTableName": null,
                                    "Value": "PQ134_query-editor-PQ134_group0_rule0_valuekey0:Spd Anlyzr Singleton Aggregate",
                                    "IsSelected": true,
                                    "GroupRuleId": "query-editor-PQ134_group0_rule0_valuekey0",
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
                                    "Name": "Amt",
                                    "Alias": null,
                                    "RunTimeTableName": null,
                                    "TemplateName": "Spd Anlyzr Singleton Aggregate",
                                    "FullName": "Spd Anlyzr Singleton Aggregate.Amt",
                                    "FullName_2": "Spd Anlyzr Singleton Aggregate.Amt",
                                    "IsGroupBy": false,
                                    "Hide": false,
                                    "UnionTableName": null,
                                    "Value": "PQ134_query-editor-PQ134_group0_rule0_valuekey0:Spd Anlyzr Singleton Aggregate",
                                    "IsSelected": true,
                                    "GroupRuleId": "query-editor-PQ134_group0_rule0_valuekey0",
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
                                    "Id": "PQ134_query-editor-PQ134_group0_rule0_valuekey0",
                                    "Name": "cols",
                                    "Value": _cols
                                },
                                {
                                    "Id": "PQ134_query-editor-PQ134_group0_rule0_valuekey0",
                                    "Name": "colsSm",
                                    "Value": _colsSm
                                },
                                {
                                    "Id": "PQ134_query-editor-PQ134_group0_rule0_valuekey0",
                                    "Name": "colRplc",
                                    "Value": _colRplc
                                },
                                {
                                    "Id": "PQ134_query-editor-PQ134_group0_rule0_valuekey0",
                                    "Name": "startDate",
                                    "Value": _startDate
                                },
                                {
                                    "Id": "PQ134_query-editor-PQ134_group0_rule0_valuekey0",
                                    "Name": "endDate",
                                    "Value": _endDate
                                },
                                {
                                    "Id": "PQ134_query-editor-PQ134_group0_rule0_valuekey0",
                                    "Name": "scrTl",
                                    "Value": _srcTl
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
                this.onLoad(<[]>res);

            }, { error: function (x, y, z) { alert("Error: " + JSON.stringify(x) + '\\n' + y + '\\n' + z); } })

        }//Ends the Load 


    


    }




}