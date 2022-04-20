
namespace SmoothData.BusinessObjects.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("BusinessObjects.FieldList")]
    [BasedOnRow(typeof(Entities.FieldListRow), CheckNames = true)]
    public class FieldListForm
    {
        public Int32 FieldMemberId { get; set; }
        public Int32 BsId { get; set; }
        public String Name { get; set; }
        public FieldDataType DataType { get; set; }
        public Int32 Size { get; set; }

        public Int32 LookUpId { get; set; }


    }
}