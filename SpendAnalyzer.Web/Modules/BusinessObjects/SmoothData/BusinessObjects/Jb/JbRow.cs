
namespace SmoothData.BusinessObjects.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("BusinessObjects"), TableName("[dbo].[Jbs]")]
    [DisplayName("Jobs"), InstanceName("Job")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class JbRow : Row, IIdRow, INameRow
    {
        [DisplayName("Jb Id"), Identity]
        public Int32? JbId
        {
            get { return Fields.JbId[this]; }
            set { Fields.JbId[this] = value; }
        }

        [DisplayName("Name"), Size(50), QuickSearch,]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        [DisplayName("Package Name"), ForeignKey("[dbo].[Pckg]", "PckgId"), LeftJoin("jPckg"), TextualField("PckgName")]
        [LookupEditor(typeof(PckgRow))]
        public Int32? PckgId
        {
            get { return Fields.PckgId[this]; }
            set { Fields.PckgId[this] = value; }
        }

        [DisplayName("Created By"), Width(210)]
        public Int32? CreatedBy
        {
            get { return Fields.CreatedBy[this]; }
            set { Fields.CreatedBy[this] = value; }
        }

        [DisplayName("Last Modified Date"), Width(210)]
        public DateTime? LastModifiedDate
        {
            get { return Fields.LastModifiedDate[this]; }
            set { Fields.LastModifiedDate[this] = value; }
        }

        [DisplayName("Modified By"), Width(210)]
        public Int32? ModifiedBy
        {
            get { return Fields.ModifiedBy[this]; }
            set { Fields.ModifiedBy[this] = value; }
        }

        [DisplayName("Last Run Date"), Width(210)]
        public DateTime? LastRunDate
        {
            get { return Fields.LastRunDate[this]; }
            set { Fields.LastRunDate[this] = value; }
        }

        [DisplayName("Status"), Size(50)]
        public String Status
        {
            get { return Fields.Status[this]; }
            set { Fields.Status[this] = value; }
        }

        [DisplayName("Keep History")]
        public Boolean? KeepHistory
        {
            get { return Fields.KeepHistory[this]; }
            set { Fields.KeepHistory[this] = value; }
        }

        [DisplayName("Period")]
        public JbPeriod? Period
        {
            get { return (JbPeriod)Fields.Period[this]; }
            set { Fields.Period[this] = (Int16)value; }
        }

        [DisplayName("Run Time"), EditTimeEditor(ShowSeconds = true)]
        public TimeSpan? RunTime
        {
            get { return Fields.RunTime[this]; }
            set { Fields.RunTime[this] = value; }
        }

        [DisplayName("From Date")]
        public DateTime? FromDate
        {
            get { return Fields.FromDate[this]; }
            set { Fields.FromDate[this] = value; }
        }

        [DisplayName("To Date")]
        public DateTime? ToDate
        {
            get { return Fields.ToDate[this]; }
            set { Fields.ToDate[this] = value; }
        }

        [DisplayName("Monday")]
        public Boolean? Monday
        {
            get { return Fields.Monday[this]; }
            set { Fields.Monday[this] = value; }
        }

        [DisplayName("Tuesday")]
        public Boolean? Tuesday
        {
            get { return Fields.Tuesday[this]; }
            set { Fields.Tuesday[this] = value; }
        }

        [DisplayName("Wednesday")]
        public Boolean? Wednesday
        {
            get { return Fields.Wednesday[this]; }
            set { Fields.Wednesday[this] = value; }
        }

        [DisplayName("Thursday")]
        public Boolean? Thursday
        {
            get { return Fields.Thursday[this]; }
            set { Fields.Thursday[this] = value; }
        }

        [DisplayName("Friday")]
        public Boolean? Friday
        {
            get { return Fields.Friday[this]; }
            set { Fields.Friday[this] = value; }
        }

        [DisplayName("Saturday")]
        public Boolean? Saturday
        {
            get { return Fields.Saturday[this]; }
            set { Fields.Saturday[this] = value; }
        }

        [DisplayName("Sunday")]
        public Boolean? Sunday
        {
            get { return Fields.Sunday[this]; }
            set { Fields.Sunday[this] = value; }
        }

        [DisplayName("Pckg Name"), Expression("jPckg.[Name]")]
        public String PckgName
        {
            get { return Fields.PckgName[this]; }
            set { Fields.PckgName[this] = value; }
        }

        [DisplayName("Pckg"), Expression("jPckg.[Pckg]")]
        public String Pckg
        {
            get { return Fields.Pckg[this]; }
            set { Fields.Pckg[this] = value; }
        }

        [DisplayName("Pckg Date Created"), Expression("jPckg.[DateCreated]")]
        public DateTime? PckgDateCreated
        {
            get { return Fields.PckgDateCreated[this]; }
            set { Fields.PckgDateCreated[this] = value; }
        }

        [DisplayName("Pckg Created By"), Expression("jPckg.[CreatedBy]")]
        public Int32? PckgCreatedBy
        {
            get { return Fields.PckgCreatedBy[this]; }
            set { Fields.PckgCreatedBy[this] = value; }
        }

        [DisplayName("Pckg Last Modified By"), Expression("jPckg.[LastModifiedBy]")]
        public Int32? PckgLastModifiedBy
        {
            get { return Fields.PckgLastModifiedBy[this]; }
            set { Fields.PckgLastModifiedBy[this] = value; }
        }

        [DisplayName("Pckg Last Modified Date"), Expression("jPckg.[LastModifiedDate]")]
        public DateTime? PckgLastModifiedDate
        {
            get { return Fields.PckgLastModifiedDate[this]; }
            set { Fields.PckgLastModifiedDate[this] = value; }
        }

        [DisplayName("Pckg Is Local Copy"), Expression("jPckg.[IsLocalCopy]")]
        public Boolean? PckgIsLocalCopy
        {
            get { return Fields.PckgIsLocalCopy[this]; }
            set { Fields.PckgIsLocalCopy[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.JbId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public JbRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field JbId;
            public StringField Name;
            public Int32Field PckgId;
            public Int32Field CreatedBy;
            public DateTimeField LastModifiedDate;
            public Int32Field ModifiedBy;
            public DateTimeField LastRunDate;
            public StringField Status;
            public BooleanField KeepHistory;
            public Int32Field Period;
            public TimeSpanField RunTime;
            public DateTimeField FromDate;
            public DateTimeField ToDate;
            public BooleanField Monday;
            public BooleanField Tuesday;
            public BooleanField Wednesday;
            public BooleanField Thursday;
            public BooleanField Friday;
            public BooleanField Saturday;
            public BooleanField Sunday;

            public StringField PckgName;
            public StringField Pckg;
            public DateTimeField PckgDateCreated;
            public Int32Field PckgCreatedBy;
            public Int32Field PckgLastModifiedBy;
            public DateTimeField PckgLastModifiedDate;
            public BooleanField PckgIsLocalCopy;
        }
    }
}
