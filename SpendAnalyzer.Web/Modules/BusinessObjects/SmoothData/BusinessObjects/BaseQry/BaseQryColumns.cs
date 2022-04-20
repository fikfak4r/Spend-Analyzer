
namespace SmoothData.BusinessObjects.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("BusinessObjects.BaseQry")]
    [BasedOnRow(typeof(Entities.BaseQryRow), CheckNames = true)]
    public class BaseQryColumns
    {

        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 BsId { get; set; }
        [EditLink]
        public String ParentId { get; set; }
        [EditLink]
        public String TemplateName { get; set; }
        public String CategoryCategoryName { get; set; }
        public String FieldList { get; set; }
        public String RunTimeTableName { get; set; }
        public String Params { get; set; }
        public String RltdColumns { get; set; }
        public String DfltVl { get; set; }

    }
}