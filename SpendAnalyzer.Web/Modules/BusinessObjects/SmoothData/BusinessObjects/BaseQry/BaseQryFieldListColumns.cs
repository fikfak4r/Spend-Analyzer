
namespace SmoothData.BusinessObjects.Columns
{

    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("BusinessObjects.BaseQryFieldList")]
    [BasedOnRow(typeof(Entities.FieldListRow), CheckNames = true)]
    public class BaseQryFieldListColumns
    {
        public Int32 FieldMemberId { get; set; }
        public Int32 BsId { get; set; }
        [EditLink]
        public String Name { get; set; }
        public FieldDataType DataType { get; set; }
        public Int32 Size { get; set; }

        public Int32 LookUpName { get; set; }
    }


}
