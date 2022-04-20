
namespace SmoothData.BusinessObjects.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("BusinessObjects.CmpgnSegment")]
    [BasedOnRow(typeof(Entities.CmpgnSegmentRow), CheckNames = true)]
    public class CmpgnSegmentForm
    {
        public String SegmentName { get; set; }
        public String SegmentDescription { get; set; }
        public Int32 CreatedBy { get; set; }
        public DateTime CreatedDate { get; set; }
        public Int32 LastModifiedBy { get; set; }
        public DateTime LastModifiedDate { get; set; }
        public String SqlQuery { get; set; }
        public Boolean IsValidated { get; set; }
        public Boolean IsPublished { get; set; }
        public Boolean IsRetired { get; set; }
    }
}