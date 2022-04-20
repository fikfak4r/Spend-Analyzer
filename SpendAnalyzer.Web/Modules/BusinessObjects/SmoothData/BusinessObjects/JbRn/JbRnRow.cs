
namespace SmoothData.BusinessObjects.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("BusinessObjects"), TableName("[dbo].[JbRn]")]
    [DisplayName("Job Runs"), InstanceName("Jb Rn")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class JbRnRow : Row, IIdRow, INameRow
    {
        [DisplayName("Jb Rn Id"), Identity]
        public Int32? JbRnId
        {
            get { return Fields.JbRnId[this]; }
            set { Fields.JbRnId[this] = value; }
        }

        [DisplayName("Jb"), ForeignKey("[dbo].[Jbs]", "JbId"), LeftJoin("jJb"), TextualField("JbName")]
        public Int32? JbId
        {
            get { return Fields.JbId[this]; }
            set { Fields.JbId[this] = value; }
        }

        [DisplayName("Date")]
        public DateTime? Date
        {
            get { return Fields.Date[this]; }
            set { Fields.Date[this] = value; }
        }

        [DisplayName("Repository"), Size(250), QuickSearch]
        public String Repository
        {
            get { return Fields.Repository[this]; }
            set { Fields.Repository[this] = value; }
        }

        [DisplayName("Job Name"), Expression("jJb.[Name]")]
        public String JbName
        {
            get { return Fields.JbName[this]; }
            set { Fields.JbName[this] = value; }
        }

        [DisplayName("Jb Pckg Id"), Expression("jJb.[PckgId]")]
        public Int32? JbPckgId
        {
            get { return Fields.JbPckgId[this]; }
            set { Fields.JbPckgId[this] = value; }
        }

        [DisplayName("Jb Created By"), Expression("jJb.[CreatedBy]")]
        public Int32? JbCreatedBy
        {
            get { return Fields.JbCreatedBy[this]; }
            set { Fields.JbCreatedBy[this] = value; }
        }

        [DisplayName("Jb Last Modified Date"), Expression("jJb.[LastModifiedDate]")]
        public DateTime? JbLastModifiedDate
        {
            get { return Fields.JbLastModifiedDate[this]; }
            set { Fields.JbLastModifiedDate[this] = value; }
        }

        [DisplayName("Jb Modified By"), Expression("jJb.[ModifiedBy]")]
        public Int32? JbModifiedBy
        {
            get { return Fields.JbModifiedBy[this]; }
            set { Fields.JbModifiedBy[this] = value; }
        }

        [DisplayName("Jb Last Run Date"), Expression("jJb.[LastRunDate]")]
        public DateTime? JbLastRunDate
        {
            get { return Fields.JbLastRunDate[this]; }
            set { Fields.JbLastRunDate[this] = value; }
        }

        [DisplayName("Jb Status"), Expression("jJb.[Status]")]
        public String JbStatus
        {
            get { return Fields.JbStatus[this]; }
            set { Fields.JbStatus[this] = value; }
        }

        [DisplayName("Jb Keep History"), Expression("jJb.[KeepHistory]")]
        public Boolean? JbKeepHistory
        {
            get { return Fields.JbKeepHistory[this]; }
            set { Fields.JbKeepHistory[this] = value; }
        }

        [DisplayName("Jb Period"), Expression("jJb.[Period]")]
        public Int32? JbPeriod
        {
            get { return Fields.JbPeriod[this]; }
            set { Fields.JbPeriod[this] = value; }
        }

        [DisplayName("Jb Run Time"), Expression("jJb.[RunTime]")]
        public TimeSpan? JbRunTime
        {
            get { return Fields.JbRunTime[this]; }
            set { Fields.JbRunTime[this] = value; }
        }

        [DisplayName("Jb From Date"), Expression("jJb.[FromDate]")]
        public DateTime? JbFromDate
        {
            get { return Fields.JbFromDate[this]; }
            set { Fields.JbFromDate[this] = value; }
        }

        [DisplayName("Jb To Date"), Expression("jJb.[ToDate]")]
        public DateTime? JbToDate
        {
            get { return Fields.JbToDate[this]; }
            set { Fields.JbToDate[this] = value; }
        }

        [DisplayName("Jb Monday"), Expression("jJb.[Monday]")]
        public Boolean? JbMonday
        {
            get { return Fields.JbMonday[this]; }
            set { Fields.JbMonday[this] = value; }
        }

        [DisplayName("Jb Tuesday"), Expression("jJb.[Tuesday]")]
        public Boolean? JbTuesday
        {
            get { return Fields.JbTuesday[this]; }
            set { Fields.JbTuesday[this] = value; }
        }

        [DisplayName("Jb Wednesday"), Expression("jJb.[Wednesday]")]
        public Boolean? JbWednesday
        {
            get { return Fields.JbWednesday[this]; }
            set { Fields.JbWednesday[this] = value; }
        }

        [DisplayName("Jb Thursday"), Expression("jJb.[Thursday]")]
        public Boolean? JbThursday
        {
            get { return Fields.JbThursday[this]; }
            set { Fields.JbThursday[this] = value; }
        }

        [DisplayName("Jb Friday"), Expression("jJb.[Friday]")]
        public Boolean? JbFriday
        {
            get { return Fields.JbFriday[this]; }
            set { Fields.JbFriday[this] = value; }
        }

        [DisplayName("Jb Saturday"), Expression("jJb.[Saturday]")]
        public Boolean? JbSaturday
        {
            get { return Fields.JbSaturday[this]; }
            set { Fields.JbSaturday[this] = value; }
        }

        [DisplayName("Jb Sunday"), Expression("jJb.[Sunday]")]
        public Boolean? JbSunday
        {
            get { return Fields.JbSunday[this]; }
            set { Fields.JbSunday[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.JbRnId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Repository; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public JbRnRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field JbRnId;
            public Int32Field JbId;
            public DateTimeField Date;
            public StringField Repository;

            public StringField JbName;
            public Int32Field JbPckgId;
            public Int32Field JbCreatedBy;
            public DateTimeField JbLastModifiedDate;
            public Int32Field JbModifiedBy;
            public DateTimeField JbLastRunDate;
            public StringField JbStatus;
            public BooleanField JbKeepHistory;
            public Int32Field JbPeriod;
            public TimeSpanField JbRunTime;
            public DateTimeField JbFromDate;
            public DateTimeField JbToDate;
            public BooleanField JbMonday;
            public BooleanField JbTuesday;
            public BooleanField JbWednesday;
            public BooleanField JbThursday;
            public BooleanField JbFriday;
            public BooleanField JbSaturday;
            public BooleanField JbSunday;
        }
    }
}
