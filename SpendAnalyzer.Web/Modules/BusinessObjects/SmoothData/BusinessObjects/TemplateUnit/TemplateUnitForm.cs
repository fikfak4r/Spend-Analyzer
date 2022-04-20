
namespace SmoothData.BusinessObjects.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("BusinessObjects.TemplateUnit")]
    [BasedOnRow(typeof(Entities.TemplateUnitRow), CheckNames = true)]
    public class TemplateUnitForm
    {
        public Int32 BaseUnitId { get; set; }
        public Int32 ParentUnitId { get; set; }
        public Int32 BaseUnitRelationFieldId { get; set; }
        public Int32 ParentUnitRelationId { get; set; }

        public Int32 ParentUnitBaseUnitId { get; set; }
    }
}