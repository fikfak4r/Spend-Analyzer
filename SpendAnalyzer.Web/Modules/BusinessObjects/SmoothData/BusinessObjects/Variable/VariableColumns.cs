
namespace SmoothData.BusinessObjects.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("BusinessObjects.Variable")]
    [BasedOnRow(typeof(Entities.VariableRow), CheckNames = true)]
    public class VariableColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight, Hidden]
        public Int32 VariableId { get; set; }
        [EditLink]
        public String Name { get; set; }
        [Width(250)]
        public FieldDataType DataType { get; set; }
        
    }
}