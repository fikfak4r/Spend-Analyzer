using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpendAnalyzer.Web.Modules.BusinessObjects.Models
{
    public class QryContainerRequestObject
    {
        public string Id { get; set; }
        public QuerySetRequestObject QMD { get; set; }

    }
}
