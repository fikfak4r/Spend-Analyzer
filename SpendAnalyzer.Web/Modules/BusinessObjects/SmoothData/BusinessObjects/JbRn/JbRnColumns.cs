
namespace SmoothData.BusinessObjects.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("BusinessObjects.JbRn")]
    [BasedOnRow(typeof(Entities.JbRnRow), CheckNames = true)]
    public class JbRnColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight, Hidden]
        public Int32 JbRnId { get; set; }
        public String JbName { get; set; }
        public DateTime Date { get; set; }
        [EditLink]
        public String Repository { get; set; }
    }
}