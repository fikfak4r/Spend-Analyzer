using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using QryBldr.Lib.LibClasses;



namespace SmoothData.Web.Modules.BusinessObjects.Models
{ 
    public class InputQryBldrRequestObject
    {


        public QryContainerRequestObject QryCntnr { get; set; }

        public QuerySetComponent QuerySetComp { get; set; }

        public List<InputQryParamBldrRequestObject> ParamQryBldrList { get; set; }


    }
}
