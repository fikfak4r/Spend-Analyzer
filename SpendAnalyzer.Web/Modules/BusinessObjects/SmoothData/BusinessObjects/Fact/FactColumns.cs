
namespace SmoothData.BusinessObjects.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("BusinessObjects.Fact")]
    [BasedOnRow(typeof(Entities.FactRow), CheckNames = true)]
    public class FactColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight, Hidden]
        public Int32 FactId { get; set; }
        [EditLink]
        public String Name { get; set; }
        public String FieldName { get; set; }
    }
}