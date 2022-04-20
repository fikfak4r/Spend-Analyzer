
namespace SmoothData.BusinessObjects.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("BusinessObjects.FactFactDimension")]
    [BasedOnRow(typeof(Entities.FactDimensionRow), CheckNames = true)]
    public class FactFactDimensionColumns
    {
        [EditLink]
        public String FactName { get; set; }
        public String BsTemplateName { get; set; }

        public String FieldMemberName { get; set; }
       
    }
}