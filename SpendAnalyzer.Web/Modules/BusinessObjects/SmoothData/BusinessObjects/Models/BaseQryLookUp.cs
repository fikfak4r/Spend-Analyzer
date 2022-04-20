using System;
using System.Collections.Generic;

namespace SmoothData.Web.Modules.BusinessObjects.Models
{
    public partial class BaseQryLookUp
    {
        public int BsLookupId { get; set; }
        public int? LookUpId { get; set; }
        public int? BsId { get; set; }
        public int? FieldMemberId { get; set; }

        public BaseQry Bs { get; set; }
        public FieldList FieldMember { get; set; }
        public LookUps LookUp { get; set; }
    }
}
