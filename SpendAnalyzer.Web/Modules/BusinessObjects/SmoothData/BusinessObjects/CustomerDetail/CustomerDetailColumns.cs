
namespace SmoothData.BusinessObjects.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("BusinessObjects.CustomerDetail")]
    [BasedOnRow(typeof(Entities.CustomerDetailRow), CheckNames = true)]
    public class CustomerDetailColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 CustomerId { get; set; }
        [EditLink]
        public String FullName { get; set; }
        public String Sex { get; set; }
        public String Address { get; set; }
    }
}