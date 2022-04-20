
namespace SmoothData.BusinessObjects.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("BusinessObjects.CmpgnCollateral")]
    [BasedOnRow(typeof(Entities.CmpgnCollateralRow), CheckNames = true)]
    public class CmpgnCollateralColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 CollateralId { get; set; }
        [EditLink]
        public String CollateralName { get; set; }
        public String CollateralDesc { get; set; }
        public String ReferenceText { get; set; }
        public Int32 Type { get; set; }
        public Int32 SubType { get; set; }
        public Int32 DetailType { get; set; }
        public DateTime ExpiryDate { get; set; }
        public DateTime StartDate { get; set; }
        public Int32 CreatedBy { get; set; }
        public DateTime CreatedDate { get; set; }
        public Int32 LastModifiedBy { get; set; }
        public DateTime LastModifiedDate { get; set; }
        public Boolean IsValidated { get; set; }
        public Boolean IsPublished { get; set; }
        public Boolean IsRetired { get; set; }
        public Boolean Flag { get; set; }
    }
}