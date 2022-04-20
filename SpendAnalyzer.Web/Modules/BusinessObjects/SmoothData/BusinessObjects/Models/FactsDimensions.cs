using System;
using System.Collections.Generic;

namespace SmoothData.Web.Modules.BusinessObjects.Models
{
    public partial class FactsDimensions
    {
        public int FactDimId { get; set; }
        public int? FactId { get; set; }
        public int? BsId { get; set; }
        public int? FieldMemberId { get; set; }

        public BaseQry Bs { get; set; }
        public Facts Fact { get; set; }
        public FieldList FieldMember { get; set; }
    }
}
