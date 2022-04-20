
namespace SmoothData.BusinessObjects.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("BusinessObjects.FactDimension")]
    [BasedOnRow(typeof(Entities.FactDimensionRow), CheckNames = true)]
    public class FactDimensionForm
    {
        public Int32 FactId { get; set; }
        public Int32 BsId { get; set; }
        public Int32 FieldMemberId { get; set; }
    }
}