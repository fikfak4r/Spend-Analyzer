using System;
using System.Collections.Generic;

namespace SmoothData.Web.Modules.BusinessObjects.Models
{
    public partial class LookUps
    {
        public LookUps()
        {
            BaseQryLookUp = new HashSet<BaseQryLookUp>();
        }

        public int LookUpId { get; set; }
        public string Name { get; set; }
        public string LookUpQuery { get; set; }

        public ICollection<BaseQryLookUp> BaseQryLookUp { get; set; }
    }
}
