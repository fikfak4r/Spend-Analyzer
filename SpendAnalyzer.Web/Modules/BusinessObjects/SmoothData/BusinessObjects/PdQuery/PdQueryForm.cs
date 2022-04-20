
namespace SmoothData.BusinessObjects.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("BusinessObjects.PdQuery")]
    [BasedOnRow(typeof(Entities.PdQueryRow), CheckNames = true)]
    public class PdQueryForm
    {
        public String Name { get; set; }
        public String Prfx { get; set; }

        public String Description { get; set; }
        [Hidden]
        public Int32 CreatedBy { get; set; }
        [Hidden]
        public DateTime CreatedDate { get; set; }
        [Hidden]
        public Int32 LastModifiedBy { get; set; }
        [Hidden]
        public DateTime LastModifiedDate { get; set; }
        [Hidden]
        public String PdRule { get; set; }

        public String AttrFlds { get; set; }
        public String ParamQry { get; set; }

        public Boolean IsValidated { get; set; }
        public Boolean IsPublished { get; set; }
        public Boolean IsRetired { get; set; }
    }
}