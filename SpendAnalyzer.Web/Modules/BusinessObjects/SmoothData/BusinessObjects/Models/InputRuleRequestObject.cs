using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace SmoothData.Web.Modules.BusinessObjects.Models
{
    public class InputRuleRequestObject
    {
        public string Id { get; set; }
        public string condition { get; set; }
        public string label { get; set; }
        public string field { get; set; }

        [JsonProperty("operator")]
        public string operatorr { get; set; }
        public string value { get; set;  }

        public string type { get; set; }

        public List<InputRuleRequestObject> rules { get; set; }
    }
}
