
namespace SmoothData.BusinessObjects.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("BusinessObjects.Pckg")]
    [BasedOnRow(typeof(Entities.PckgRow), CheckNames = true)]
    public class PckgColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight, Hidden]
        public Int32 PckgId { get; set; }

        [EditLink]
        public String Name { get; set; }

        [Hidden]
        public String Pckg { get; set; }
        public DateTime DateCreated { get; set; }
        public String CreatedByUsername { get; set; }
        public String LastModifiedByUsername { get; set; }
        public DateTime LastModifiedDate { get; set; }
        [Hidden]
        public Boolean IsLocalCopy { get; set; }
    }


}