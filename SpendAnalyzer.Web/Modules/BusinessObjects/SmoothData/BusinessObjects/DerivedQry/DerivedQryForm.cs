
namespace SmoothData.BusinessObjects.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("BusinessObjects.DerivedQry")]
    [BasedOnRow(typeof(Entities.DerivedQryRow), CheckNames = true)]
    public class DerivedQryForm
    {
        public Int32 BsId { get; set; }
        public String Params { get; set; }
        public String QryTemplate { get; set; }
    }
}