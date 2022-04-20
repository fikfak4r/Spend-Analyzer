
namespace SmoothData.BusinessObjects.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("BusinessObjects.JbRn")]
    [BasedOnRow(typeof(Entities.JbRnRow), CheckNames = true)]
    public class JbRnForm
    {
        public Int32 JbId { get; set; }
        public DateTime Date { get; set; }
        public String Repository { get; set; }
    }
}