
namespace SmoothData.BusinessObjects.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("BusinessObjects.Pckg")]
    [BasedOnRow(typeof(Entities.PckgRow), CheckNames = true)]
    public class PckgForm
    {
        public String Name { get; set; }
        public String Pckg { get; set; }
        public DateTime DateCreated { get; set; }
        public Int32 CreatedBy { get; set; }
        public Int32 LastModifiedBy { get; set; }
        public DateTime LastModifiedDate { get; set; }
        public Boolean IsLocalCopy { get; set; }
    }
}