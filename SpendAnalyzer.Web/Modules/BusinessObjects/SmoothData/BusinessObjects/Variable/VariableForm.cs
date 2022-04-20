
namespace SmoothData.BusinessObjects.Forms
{

    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("BusinessObjects.Variable")]
    [BasedOnRow(typeof(Entities.VariableRow), CheckNames = true)]
    public class VariableForm
    {

        public String Name { get; set; }
        public FieldDataType DataType { get; set; }
        [Hidden]
        public Int32 BaseId { get; set; }

    }

}