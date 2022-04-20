
namespace SmoothData.BusinessObjects.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("BusinessObjects.DerivedQry")]
    [BasedOnRow(typeof(Entities.DerivedQryRow), CheckNames = true)]
    public class DerivedQryColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 DrvdId { get; set; }
        
        public String BsParentId { get; set; }
        [EditLink]
        public String Params { get; set; }
        public String QryTemplate { get; set; }
    }
}