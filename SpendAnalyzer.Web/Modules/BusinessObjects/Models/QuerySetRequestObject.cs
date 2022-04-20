using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpendAnalyzer.Web.Modules.BusinessObjects.Models
{
    public class QuerySetRequestObject
    {
        public string condition { get; set; }
        public List<InputRuleRequestObject> rules { get; set; }
    }
}
