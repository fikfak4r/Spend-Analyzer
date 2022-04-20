
namespace SmoothData.BusinessObjects.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("BusinessObjects.Fact")]
    [BasedOnRow(typeof(Entities.FactRow), CheckNames = true)]
    public class FactForm
    {

        public String Name { get; set; }
        public String FieldName { get; set; }

    }
}