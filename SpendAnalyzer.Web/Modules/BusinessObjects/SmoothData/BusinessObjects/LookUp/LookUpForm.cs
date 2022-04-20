
namespace SmoothData.BusinessObjects.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("BusinessObjects.LookUp")]
    [BasedOnRow(typeof(Entities.LookUpRow), CheckNames = true)]
    public class LookUpForm
    {
        public String Name { get; set; }
        public String LookUpQuery { get; set; }
    }
}