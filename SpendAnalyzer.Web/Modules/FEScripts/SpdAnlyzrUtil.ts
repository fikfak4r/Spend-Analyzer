namespace SpendAnalyzer.BusinessObjects {

    export class SpdAnlyzrUtil {

        public static FormatNumber(numString: string) {

            var number = numeral(numString);

            //var str = number.format('0.00A');
            //alert(numString)


            if (numString.length > 9) {
                //return numString.substr(0, 3).replace(',', '.') + "B"
                return number.format('0.00a')
            }
            else
                return numString;
            //else if (numString.length == 14)
            //    return numString.substr(0, 5).replace(',', '.') + "B"
            //else if (numString.length == 11) 
            //return numString.substr(0, 2) + "." + numString.substr(2, 1) + "B"
            //else if (numString.length == 15)//116,804,673,824
            //    return numString.substr(0, 3) + "." + numString.substr(4, 2) + "B"


            return numString;

        }

        public static FormatTreeVwData(data, chckdLstStringified?:string) {

            var chckdLst = chckdLstStringified?.split(',')

            var arrs = []
            var rgns = [];
            var sts = [];
            var zns = [];
            var brnchs = []
            var rgnId = 0;
            var stId = 0;
            var znId = 0
            var count = 0;
            for (var x = 0; x < data.length; x++) {

                var rgns1 = rgns.filter((val, index, arr) => { return val.srcNodeId == data[x].REGIONID });
                if (rgns1 == undefined || rgns1.length == 0) {
                    ++count;
                    rgnId = count
                    rgns.push(this.GetTreeNode(rgnId, data[x].REGIONID, "RGN", data[x].REGION, null, true));
                }
                else { rgnId = rgns1[0].nodeId }

                var sts1 = sts.filter((val, index, arr) => { return val.srcNodeId == data[x].STATEID });
                if (sts1 == undefined || sts1.length == 0) {
                    ++count;
                    stId = count
                    sts.push(this.GetTreeNode(stId, data[x].STATEID, "ST", data[x].STATE, rgnId, true));
                }
                else { stId = sts1[0].nodeId }

                var zns1 = zns.filter((val, index, arr) => { return val.srcNodeId == data[x].ZONEID });
                if (zns1 == undefined || zns1.length == 0) {
                    ++count;
                    znId = count;
                    zns.push(this.GetTreeNode(znId, data[x].ZONEID, "ZN", data[x].ZONE, stId, true));
                }
                else { znId = zns1[0].nodeId }

                var brnchs1 = brnchs.filter((val, index, arr) => { return val.nodeId == data[x].BRANCH_CODE });
                if (brnchs1 == undefined || brnchs1.length == 0) {
                    ++count;
                    var isChecked = chckdLst != null ? SpdAnlyzrUtil.IsChckd(data[x].BRANCH_CODE, chckdLst) : null
                    brnchs.push(this.GetTreeNode(count, data[x].BRANCH_CODE, "BRNCH", data[x].BRANCH, znId, false, isChecked));
                }

            }//Ends the for loop


            for (var x = 0; x < zns.length; x++) {
                for (var y = 0; y < brnchs.length; y++) {
                    if (zns[x].nodeId == brnchs[y].parentNode) {
                        brnchs[y].ZnId = zns[x].nodeId;
                        zns[x].nodeChild.push(brnchs[y])
                    }//Ends the if block 
                } 
            } 

            for (var x = 0; x < sts.length; x++) {
                for (var y = 0; y < zns.length; y++) {
                    if (sts[x].nodeId == zns[y].parentNode) {
                        zns[y].StId = sts[x].nodeId
                        sts[x].nodeChild.push(zns[y])
                    }//Ends the if block
                }
            }

            for (var x = 0; x < rgns.length; x++) {
                for (var y = 0; y < sts.length; y++) {
                    if (rgns[x].nodeId == sts[y].parentNode) {
                        sts[y].RgnId = rgns[x].nodeId 
                        rgns[x].nodeChild.push(sts[y])
                    }//Ends the if block
                }
            }


            //======================== Set up the Branches ======================================


            for (var x = 0; x < zns.length; x++) {
                for (var y = 0; y < brnchs.length; y++) {
                    if (zns[x].nodeId == brnchs[y].ZnId) {
                        brnchs[y].StId = zns[x].StId;
                    }//Ends the if block 
                }
            } 

            for (var x = 0; x < sts.length; x++) {
                for (var y = 0; y < brnchs.length; y++) {
                    if (sts[x].nodeId == brnchs[y].StId) {
                        brnchs[y].RgnId = sts[x].RgnId;
                    }//Ends the if block 
                }
            } 


            //====================================================================================



            //for (var x = 0; x < rgns.length; x++) {
            //    arrs.push(rgns[x])
            //}

            //for (var x = 0; x < sts.length; x++) {
            //    arrs.push(sts[x])
            //}

            //for (var x = 0; x < zns.length; x++) {
            //    arrs.push(zns[x])
            //}

            //for (var x = 0; x < brnchs.length; x++) {
            //    arrs.push(brnchs[x])
            //}

            return rgns;

        }

        private static IsChckd(nodeId, chckdList: string[]) {


            for (var zz = 0; zz < chckdList.length; zz++) {
                if (chckdList[zz] == nodeId)
                    return true;
            }
      


            return false

        }

        private static GetTreeNode(nodeId, srcNodeId, nodeType, nodeText, parentNode, hasChildren, isChecked?) {

            //if (hasChildren)
            //    return <any>{
            //        nodeId: nodeId, nodeText: nodeText, parentNode: parentNode, hasChildren: hasChildren
            //    }
            //else
            //    return <any>{
            //        nodeId: nodeId, nodeText: nodeText, parentNode: parentNode
            //    }

            return <any>{
                nodeId: nodeId, nodeText: nodeText, parentNode: parentNode, hasChildren: hasChildren,
                srcNodeId: srcNodeId, nodeType: nodeType, nodeChild: [], isChecked: isChecked, expand: isChecked != undefined ? nodeId : null,
                RgnId:null, ZnId:null, StId:null
            }

        }

        public static GetChckdBrnchs(treeVw:ej.navigations.TreeView) {
            return treeVw.checkedNodes.map(function (val, index, arr) {
              return treeVw.getTreeData(val)[0].nodeType == "BRNCH" ? treeVw.getTreeData(val)[0].srcNodeId : -1
            }).join(',')
        }

        public static ExandNodes(treeVw: ej.navigations.TreeView) {
            let RgnIds = []
            let StIds = []
            let ZnIds = []


            treeVw.checkedNodes.forEach(function (val, index, arr) {
                //alert(JSON.stringify(treeVw.getTreeData(val)[0]))
                RgnIds.push(treeVw.getTreeData(val)[0].RgnId.toString())
                StIds.push(treeVw.getTreeData(val)[0].StId.toString())
                ZnIds.push(treeVw.getTreeData(val)[0].ZnId.toString())


            })
            treeVw.expandAll(RgnIds);
            treeVw.expandAll(StIds);
            treeVw.expandAll(ZnIds);

           
        }


    }
}