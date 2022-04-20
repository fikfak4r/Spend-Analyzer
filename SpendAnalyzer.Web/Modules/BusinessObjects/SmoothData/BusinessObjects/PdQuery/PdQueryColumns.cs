
namespace SmoothData.BusinessObjects.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("BusinessObjects.PdQuery")]
    [BasedOnRow(typeof(Entities.PdQueryRow), CheckNames = true)]
    public class PdQueryColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight, Hidden]
        public Int32 PdId { get; set; }
        [Hidden]
        public String Prfx { get; set; }

        [EditLink]
        public String Name { get; set; }
        public String Description { get; set; }
        public String CreatedByUsername { get; set; }
        public DateTime CreatedDate { get; set; }
        public String LastModifiedByUsername { get; set; }
        public DateTime LastModifiedDate { get; set; }
        public String PdRule { get; set; }
        public String AttrFlds { get; set; }

        public String ParamQry { get; set; }

        public Boolean IsValidated { get; set; }
        public Boolean IsPublished { get; set; }
        public Boolean IsRetired { get; set; }
    }
}