using System;
using System.Collections.Generic;

namespace SmoothData.Web.Modules.BusinessObjects.Models
{
    public partial class Facts
    {
        public Facts()
        {
            FactsDimensions = new HashSet<FactsDimensions>();
        }

        public int FactId { get; set; }
        public string Name { get; set; }
        public string FieldName { get; set; }

        public ICollection<FactsDimensions> FactsDimensions { get; set; }
    }
}
