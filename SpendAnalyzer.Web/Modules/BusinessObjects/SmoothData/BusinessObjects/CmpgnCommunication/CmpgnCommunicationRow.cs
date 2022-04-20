
namespace SmoothData.BusinessObjects.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("BusinessObjects"), TableName("[dbo].[CMPGN_COMMUNICATION]")]
    [DisplayName("Cmpgn Communication"), InstanceName("Cmpgn Communication")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class CmpgnCommunicationRow : Row, IIdRow, INameRow
    {
        [DisplayName("Communication Id"), Column("COMMUNICATION_ID"), Identity]
        public Int32? CommunicationId
        {
            get { return Fields.CommunicationId[this]; }
            set { Fields.CommunicationId[this] = value; }
        }

        [DisplayName("Communication Name"), Column("COMMUNICATION_NAME"), Size(100), NotNull, QuickSearch]
        public String CommunicationName
        {
            get { return Fields.CommunicationName[this]; }
            set { Fields.CommunicationName[this] = value; }
        }

        [DisplayName("Communication Desc"), Column("COMMUNICATION_DESC"), Size(1000)]
        public String CommunicationDesc
        {
            get { return Fields.CommunicationDesc[this]; }
            set { Fields.CommunicationDesc[this] = value; }
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

        [DisplayName("Collateral Hst"), Column("COLLATERAL_HST_ID"), ForeignKey("[dbo].[CMPGN_COLLATERAL_HST]", "COLLATERAL_HST_ID"), LeftJoin("jCollateralHst"), TextualField("CollateralHstCollateralName")]
        public Int32? CollateralHstId
        {
            get { return Fields.CollateralHstId[this]; }
            set { Fields.CollateralHstId[this] = value; }
        }

        [DisplayName("Segment Hst"), Column("SEGMENT_HST_ID"), ForeignKey("[dbo].[CMPGN_SEGMENT_HST]", "SEGMENT_HST_ID"), LeftJoin("jSegmentHst"), TextualField("SegmentHstSegmentName")]
        public Int32? SegmentHstId
        {
            get { return Fields.SegmentHstId[this]; }
            set { Fields.SegmentHstId[this] = value; }
        }

        [DisplayName("Collateral Hst Collateral Id"), Expression("jCollateralHst.[COLLATERAL_ID]")]
        public Int32? CollateralHstCollateralId
        {
            get { return Fields.CollateralHstCollateralId[this]; }
            set { Fields.CollateralHstCollateralId[this] = value; }
        }

        [DisplayName("Collateral Hst Collateral Name"), Expression("jCollateralHst.[COLLATERAL_NAME]")]
        public String CollateralHstCollateralName
        {
            get { return Fields.CollateralHstCollateralName[this]; }
            set { Fields.CollateralHstCollateralName[this] = value; }
        }

        [DisplayName("Collateral Hst Collateral Desc"), Expression("jCollateralHst.[COLLATERAL_DESC]")]
        public String CollateralHstCollateralDesc
        {
            get { return Fields.CollateralHstCollateralDesc[this]; }
            set { Fields.CollateralHstCollateralDesc[this] = value; }
        }

        [DisplayName("Collateral Hst Reference Text"), Expression("jCollateralHst.[REFERENCE_TEXT]")]
        public String CollateralHstReferenceText
        {
            get { return Fields.CollateralHstReferenceText[this]; }
            set { Fields.CollateralHstReferenceText[this] = value; }
        }

        [DisplayName("Collateral Hst Type"), Expression("jCollateralHst.[TYPE]")]
        public Int32? CollateralHstType
        {
            get { return Fields.CollateralHstType[this]; }
            set { Fields.CollateralHstType[this] = value; }
        }

        [DisplayName("Collateral Hst Sub Type"), Expression("jCollateralHst.[SUB_TYPE]")]
        public Int32? CollateralHstSubType
        {
            get { return Fields.CollateralHstSubType[this]; }
            set { Fields.CollateralHstSubType[this] = value; }
        }

        [DisplayName("Collateral Hst Detail Type"), Expression("jCollateralHst.[DETAIL_TYPE]")]
        public Int32? CollateralHstDetailType
        {
            get { return Fields.CollateralHstDetailType[this]; }
            set { Fields.CollateralHstDetailType[this] = value; }
        }

        [DisplayName("Collateral Hst Expiry Date"), Expression("jCollateralHst.[EXPIRY_DATE]")]
        public DateTime? CollateralHstExpiryDate
        {
            get { return Fields.CollateralHstExpiryDate[this]; }
            set { Fields.CollateralHstExpiryDate[this] = value; }
        }

        [DisplayName("Collateral Hst Start Date"), Expression("jCollateralHst.[START_DATE]")]
        public DateTime? CollateralHstStartDate
        {
            get { return Fields.CollateralHstStartDate[this]; }
            set { Fields.CollateralHstStartDate[this] = value; }
        }

        [DisplayName("Collateral Hst Created By"), Expression("jCollateralHst.[CREATED_BY]")]
        public Int32? CollateralHstCreatedBy
        {
            get { return Fields.CollateralHstCreatedBy[this]; }
            set { Fields.CollateralHstCreatedBy[this] = value; }
        }

        [DisplayName("Collateral Hst Created Date"), Expression("jCollateralHst.[CREATED_DATE]")]
        public DateTime? CollateralHstCreatedDate
        {
            get { return Fields.CollateralHstCreatedDate[this]; }
            set { Fields.CollateralHstCreatedDate[this] = value; }
        }

        [DisplayName("Collateral Hst Last Modified By"), Expression("jCollateralHst.[LAST_MODIFIED_BY]")]
        public Int32? CollateralHstLastModifiedBy
        {
            get { return Fields.CollateralHstLastModifiedBy[this]; }
            set { Fields.CollateralHstLastModifiedBy[this] = value; }
        }

        [DisplayName("Collateral Hst Last Modified Date"), Expression("jCollateralHst.[LAST_MODIFIED_DATE]")]
        public DateTime? CollateralHstLastModifiedDate
        {
            get { return Fields.CollateralHstLastModifiedDate[this]; }
            set { Fields.CollateralHstLastModifiedDate[this] = value; }
        }

        [DisplayName("Collateral Hst Is Validated"), Expression("jCollateralHst.[IS_VALIDATED]")]
        public Boolean? CollateralHstIsValidated
        {
            get { return Fields.CollateralHstIsValidated[this]; }
            set { Fields.CollateralHstIsValidated[this] = value; }
        }

        [DisplayName("Collateral Hst Is Published"), Expression("jCollateralHst.[IS_PUBLISHED]")]
        public Boolean? CollateralHstIsPublished
        {
            get { return Fields.CollateralHstIsPublished[this]; }
            set { Fields.CollateralHstIsPublished[this] = value; }
        }

        [DisplayName("Collateral Hst Is Retired"), Expression("jCollateralHst.[IS_RETIRED]")]
        public Boolean? CollateralHstIsRetired
        {
            get { return Fields.CollateralHstIsRetired[this]; }
            set { Fields.CollateralHstIsRetired[this] = value; }
        }

        [DisplayName("Collateral Hst Flag"), Expression("jCollateralHst.[FLAG]")]
        public Boolean? CollateralHstFlag
        {
            get { return Fields.CollateralHstFlag[this]; }
            set { Fields.CollateralHstFlag[this] = value; }
        }

        [DisplayName("Collateral Hst Cpd Date"), Expression("jCollateralHst.[CPD_DATE]")]
        public DateTime? CollateralHstCpdDate
        {
            get { return Fields.CollateralHstCpdDate[this]; }
            set { Fields.CollateralHstCpdDate[this] = value; }
        }

        [DisplayName("Segment Hst Segment Id"), Expression("jSegmentHst.[SEGMENT_ID]")]
        public Int32? SegmentHstSegmentId
        {
            get { return Fields.SegmentHstSegmentId[this]; }
            set { Fields.SegmentHstSegmentId[this] = value; }
        }

        [DisplayName("Segment Hst Segment Name"), Expression("jSegmentHst.[SEGMENT_NAME]")]
        public String SegmentHstSegmentName
        {
            get { return Fields.SegmentHstSegmentName[this]; }
            set { Fields.SegmentHstSegmentName[this] = value; }
        }

        [DisplayName("Segment Hst Segment Description"), Expression("jSegmentHst.[SEGMENT_DESCRIPTION]")]
        public String SegmentHstSegmentDescription
        {
            get { return Fields.SegmentHstSegmentDescription[this]; }
            set { Fields.SegmentHstSegmentDescription[this] = value; }
        }

        [DisplayName("Segment Hst Created By"), Expression("jSegmentHst.[CREATED_BY]")]
        public Int32? SegmentHstCreatedBy
        {
            get { return Fields.SegmentHstCreatedBy[this]; }
            set { Fields.SegmentHstCreatedBy[this] = value; }
        }

        [DisplayName("Segment Hst Created Date"), Expression("jSegmentHst.[CREATED_DATE]")]
        public DateTime? SegmentHstCreatedDate
        {
            get { return Fields.SegmentHstCreatedDate[this]; }
            set { Fields.SegmentHstCreatedDate[this] = value; }
        }

        [DisplayName("Segment Hst Last Modified By"), Expression("jSegmentHst.[LAST_MODIFIED_BY]")]
        public Int32? SegmentHstLastModifiedBy
        {
            get { return Fields.SegmentHstLastModifiedBy[this]; }
            set { Fields.SegmentHstLastModifiedBy[this] = value; }
        }

        [DisplayName("Segment Hst Last Modified Date"), Expression("jSegmentHst.[LAST_MODIFIED_DATE]")]
        public DateTime? SegmentHstLastModifiedDate
        {
            get { return Fields.SegmentHstLastModifiedDate[this]; }
            set { Fields.SegmentHstLastModifiedDate[this] = value; }
        }

        [DisplayName("Segment Hst Sql Query"), Expression("jSegmentHst.[SQL_QUERY]")]
        public String SegmentHstSqlQuery
        {
            get { return Fields.SegmentHstSqlQuery[this]; }
            set { Fields.SegmentHstSqlQuery[this] = value; }
        }

        [DisplayName("Segment Hst Is Validated"), Expression("jSegmentHst.[IS_VALIDATED]")]
        public Boolean? SegmentHstIsValidated
        {
            get { return Fields.SegmentHstIsValidated[this]; }
            set { Fields.SegmentHstIsValidated[this] = value; }
        }

        [DisplayName("Segment Hst Is Published"), Expression("jSegmentHst.[IS_PUBLISHED]")]
        public Boolean? SegmentHstIsPublished
        {
            get { return Fields.SegmentHstIsPublished[this]; }
            set { Fields.SegmentHstIsPublished[this] = value; }
        }

        [DisplayName("Segment Hst Is Retired"), Expression("jSegmentHst.[IS_RETIRED]")]
        public Boolean? SegmentHstIsRetired
        {
            get { return Fields.SegmentHstIsRetired[this]; }
            set { Fields.SegmentHstIsRetired[this] = value; }
        }

        [DisplayName("Segment Hst Cpd Date"), Expression("jSegmentHst.[CPD_DATE]")]
        public DateTime? SegmentHstCpdDate
        {
            get { return Fields.SegmentHstCpdDate[this]; }
            set { Fields.SegmentHstCpdDate[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.CommunicationId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.CommunicationName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CmpgnCommunicationRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field CommunicationId;
            public StringField CommunicationName;
            public StringField CommunicationDesc;
            public Int32Field CreatedBy;
            public DateTimeField CreatedDate;
            public Int32Field LastModifiedBy;
            public DateTimeField LastModifiedDate;
            public BooleanField IsValidated;
            public BooleanField IsPublished;
            public BooleanField IsRetired;
            public Int32Field CollateralHstId;
            public Int32Field SegmentHstId;

            public Int32Field CollateralHstCollateralId;
            public StringField CollateralHstCollateralName;
            public StringField CollateralHstCollateralDesc;
            public StringField CollateralHstReferenceText;
            public Int32Field CollateralHstType;
            public Int32Field CollateralHstSubType;
            public Int32Field CollateralHstDetailType;
            public DateTimeField CollateralHstExpiryDate;
            public DateTimeField CollateralHstStartDate;
            public Int32Field CollateralHstCreatedBy;
            public DateTimeField CollateralHstCreatedDate;
            public Int32Field CollateralHstLastModifiedBy;
            public DateTimeField CollateralHstLastModifiedDate;
            public BooleanField CollateralHstIsValidated;
            public BooleanField CollateralHstIsPublished;
            public BooleanField CollateralHstIsRetired;
            public BooleanField CollateralHstFlag;
            public DateTimeField CollateralHstCpdDate;

            public Int32Field SegmentHstSegmentId;
            public StringField SegmentHstSegmentName;
            public StringField SegmentHstSegmentDescription;
            public Int32Field SegmentHstCreatedBy;
            public DateTimeField SegmentHstCreatedDate;
            public Int32Field SegmentHstLastModifiedBy;
            public DateTimeField SegmentHstLastModifiedDate;
            public StringField SegmentHstSqlQuery;
            public BooleanField SegmentHstIsValidated;
            public BooleanField SegmentHstIsPublished;
            public BooleanField SegmentHstIsRetired;
            public DateTimeField SegmentHstCpdDate;
        }
    }
}
