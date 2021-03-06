
namespace SmoothData.BusinessObjects.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("BusinessObjects.CmpgnCommunication")]
    [BasedOnRow(typeof(Entities.CmpgnCommunicationRow), CheckNames = true)]
    public class CmpgnCommunicationColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 CommunicationId { get; set; }
        [EditLink]
        public String CommunicationName { get; set; }
        public String CommunicationDesc { get; set; }
        public Int32 CreatedBy { get; set; }
        public DateTime CreatedDate { get; set; }
        public Int32 LastModifiedBy { get; set; }
        public DateTime LastModifiedDate { get; set; }
        public Boolean IsValidated { get; set; }
        public Boolean IsPublished { get; set; }
        public Boolean IsRetired { get; set; }
        public String CollateralHstCollateralName { get; set; }
        public String SegmentHstSegmentName { get; set; }
    }
}