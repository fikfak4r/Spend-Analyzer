
namespace SmoothData.BusinessObjects.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("BusinessObjects.CustomerDetail")]
    [BasedOnRow(typeof(Entities.CustomerDetailRow), CheckNames = true)]
    public class CustomerDetailForm
    {
        public String FullName { get; set; }
        public String Sex { get; set; }
        public String Address { get; set; }
    }
}