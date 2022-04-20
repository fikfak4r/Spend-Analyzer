
namespace SmoothData.BusinessObjects.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("BusinessObjects.LookUp")]
    [BasedOnRow(typeof(Entities.LookUpRow), CheckNames = true)]
    public class LookUpColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 LookUpId { get; set; }
        [EditLink]
        public String Name { get; set; }
        public String LookUpQuery { get; set; }
    }
}