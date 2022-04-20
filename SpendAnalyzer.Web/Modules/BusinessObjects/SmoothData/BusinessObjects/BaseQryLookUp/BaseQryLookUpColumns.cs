
namespace SmoothData.BusinessObjects.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("BusinessObjects.BaseQryLookUp")]
    [BasedOnRow(typeof(Entities.BaseQryLookUpRow), CheckNames = true)]
    public class BaseQryLookUpColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 BsLookupId { get; set; }
        public String LookUpName { get; set; }
        public String BsParentId { get; set; }
        public String FieldMemberName { get; set; }
    }
}