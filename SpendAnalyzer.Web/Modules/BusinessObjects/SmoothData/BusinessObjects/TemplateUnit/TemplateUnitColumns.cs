
namespace SmoothData.BusinessObjects.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("BusinessObjects.TemplateUnit")]
    [BasedOnRow(typeof(Entities.TemplateUnitRow), CheckNames = true)]
    public class TemplateUnitColumns
    {

        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 UnitId { get; set; }
        [EditLink]
        public String BaseUnitTemplateName { get; set; }
        [Hidden]
        public Int32 ParentUnitId { get; set; } 
        public String TemplateUnitBaseUnitName { get; set; }

        public String BaseRelationFieldName { get; set; }
        public String ParentRelationFieldName { get; set; }

        public Int32 ParentUnitBaseUnitId { get; set; }


    }

}