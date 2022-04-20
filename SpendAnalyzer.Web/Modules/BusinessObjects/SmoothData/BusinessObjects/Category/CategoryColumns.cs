
namespace SmoothData.BusinessObjects.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("BusinessObjects.Category")]
    [BasedOnRow(typeof(Entities.CategoryRow), CheckNames = true)]
    public class CategoryColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight, Hidden]
        public Int32 CategoryId { get; set; }
        [EditLink]
        public String CategoryName { get; set; }
    }
}