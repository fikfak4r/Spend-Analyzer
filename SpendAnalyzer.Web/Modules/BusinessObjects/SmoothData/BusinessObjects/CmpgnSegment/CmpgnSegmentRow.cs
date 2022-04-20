
namespace SmoothData.BusinessObjects.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("BusinessObjects"), TableName("[dbo].[CMPGN_SEGMENT]")]
    [DisplayName("Cmpgn Segment"), InstanceName("Cmpgn Segment")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class CmpgnSegmentRow : Row, IIdRow, INameRow
    {
        [DisplayName("Segment Id"), Column("SEGMENT_ID"), Identity]
        public Int32? SegmentId
        {
            get { return Fields.SegmentId[this]; }
            set { Fields.SegmentId[this] = value; }
        }

        [DisplayName("Segment Name"), Column("SEGMENT_NAME"), Size(100), QuickSearch]
        public String SegmentName
        {
            get { return Fields.SegmentName[this]; }
            set { Fields.SegmentName[this] = value; }
        }

        [DisplayName("Segment Description"), Column("SEGMENT_DESCRIPTION"), Size(1000)]
        public String SegmentDescription
        {
            get { return Fields.SegmentDescription[this]; }
            set { Fields.SegmentDescription[this] = value; }
        }

        [DisplayName("Created By"), Column("CREATED_BY")]
        public Int32? CreatedBy
        {
            get { return Fields.CreatedBy[this]; }
            set { Fields.CreatedBy[this] = value; }
        }

        [DisplayName("Created Date"), Column("CREATED_DATE")]
        public DateTime? CreatedDate
        {
            get { return Fields.CreatedDate[this]; }
            set { Fields.CreatedDate[this] = value; }
        }

        [DisplayName("Last Modified By"), Column("LAST_MODIFIED_BY")]
        public Int32? LastModifiedBy
        {
            get { return Fields.LastModifiedBy[this]; }
            set { Fields.LastModifiedBy[this] = value; }
        }

        [DisplayName("Last Modified Date"), Column("LAST_MODIFIED_DATE")]
        public DateTime? LastModifiedDate
        {
            get { return Fields.LastModifiedDate[this]; }
            set { Fields.LastModifiedDate[this] = value; }
        }

        [DisplayName("Sql Query"), Column("SQL_QUERY"), Size(4000)]
        public String SqlQuery
        {
            get { return Fields.SqlQuery[this]; }
            set { Fields.SqlQuery[this] = value; }
        }

        [DisplayName("Is Validated"), Column("IS_VALIDATED"), NotNull]
        public Boolean? IsValidated
        {
            get { return Fields.IsValidated[this]; }
            set { Fields.IsValidated[this] = value; }
        }

        [DisplayName("Is Published"), Column("IS_PUBLISHED"), NotNull]
        public Boolean? IsPublished
        {
            get { return Fields.IsPublished[this]; }
            set { Fields.IsPublished[this] = value; }
        }

        [DisplayName("Is Retired"), Column("IS_RETIRED"), NotNull]
        public Boolean? IsRetired
        {
            get { return Fields.IsRetired[this]; }
            set { Fields.IsRetired[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.SegmentId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.SegmentName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CmpgnSegmentRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field SegmentId;
            public StringField SegmentName;
            public StringField SegmentDescription;
            public Int32Field CreatedBy;
            public DateTimeField CreatedDate;
            public Int32Field LastModifiedBy;
            public DateTimeField LastModifiedDate;
            public StringField SqlQuery;
            public BooleanField IsValidated;
            public BooleanField IsPublished;
            public BooleanField IsRetired;
        }
    }
}
