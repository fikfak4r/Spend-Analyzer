using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpendAnalyzer.Web.Modules.BusinessObjects.Models
{
    public class InputQryParamBldrRequestObject
    {
        public string Id { get; set; }
        public InputRuleRequestObject InputRuleParam { get; set; }
    }
}
