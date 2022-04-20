
namespace SmoothData.BusinessObjects.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("BusinessObjects.FieldList")]
    [BasedOnRow(typeof(Entities.FieldListRow), CheckNames = true)]
    public class FieldListColumns
    {
        public Int32 FieldMemberId { get; set; }
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public String BsParentId { get; set; }
        [EditLink]
        public String Name { get; set; }
        public FieldDataType DataType { get; set; }
        public Int32 Size { get; set; }

        public Int32 LookUpId { get; set; }
    }
}