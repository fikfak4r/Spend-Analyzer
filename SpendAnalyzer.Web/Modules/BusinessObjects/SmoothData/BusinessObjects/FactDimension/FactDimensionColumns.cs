
namespace SmoothData.BusinessObjects.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("BusinessObjects.FactDimension")]
    [BasedOnRow(typeof(Entities.FactDimensionRow), CheckNames = true)]
    public class FactDimensionColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 FactDimId { get; set; }
        public String FactName { get; set; }
        public String BsParentId { get; set; }
        public String FieldMemberName { get; set; }
    }
}