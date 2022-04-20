using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using QryBldr.Lib.LibClasses;


namespace SmoothData.Web.Modules.BusinessObjects.Models
{
    public class SmoothDataRequestObject : Serenity.Services.ServiceRequest
    {

        public List<InputQryBldrRequestObject> QryBldrLstA { get; set; }

        public InputQryBldrRequestObject QryBldr_B { get; set; }

        public RptObject Rpt { get; set; }

        public object ColumnsModel {get; set;}

        
        public object QueryParams { get; set; }



    }
}
