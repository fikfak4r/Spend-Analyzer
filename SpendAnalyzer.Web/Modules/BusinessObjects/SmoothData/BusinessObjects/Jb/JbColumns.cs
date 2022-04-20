﻿
namespace SmoothData.BusinessObjects.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("BusinessObjects.Jb")]
    [BasedOnRow(typeof(Entities.JbRow), CheckNames = true)]
    public class JbColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 JbId { get; set; }
        [EditLink]
        public String Name { get; set; }
        
        public String PckgName { get; set; }
        public Int32 CreatedBy { get; set; }
        public Int32 ModifiedBy { get; set; }

        public DateTime LastModifiedDate { get; set; }
        public DateTime LastRunDate { get; set; }
        public String Status { get; set; }
        //public Boolean KeepHistory { get; set; }
        //public JbPeriod? Period { get; set; }
        //public TimeSpan RunTime { get; set; }
        //public DateTime FromDate { get; set; }
        //public DateTime ToDate { get; set; }
        //public Boolean Monday { get; set; }
        //public Boolean Tuesday { get; set; }
        //public Boolean Wednesday { get; set; }
        //public Boolean Thursday { get; set; }
        //public Boolean Friday { get; set; }
        //public Boolean Saturday { get; set; }
        //public Boolean Sunday { get; set; }
    }
}