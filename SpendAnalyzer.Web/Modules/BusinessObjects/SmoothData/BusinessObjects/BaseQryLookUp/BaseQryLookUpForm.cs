
namespace SmoothData.BusinessObjects.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("BusinessObjects.BaseQryLookUp")]
    [BasedOnRow(typeof(Entities.BaseQryLookUpRow), CheckNames = true)]
    public class BaseQryLookUpForm
    {
        public Int32 LookUpId { get; set; }
        public Int32 BsId { get; set; }
        public Int32 FieldMemberId { get; set; }
    }
}