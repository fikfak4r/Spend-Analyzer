
namespace SmoothData.BusinessObjects.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("BusinessObjects"), TableName("[dbo].[CMPGN_COLLATERAL]")]
    [DisplayName("Cmpgn Collateral"), InstanceName("Cmpgn Collateral")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class CmpgnCollateralRow : Row, IIdRow, INameRow
    {
        [DisplayName("Collateral Id"), Column("COLLATERAL_ID"), Identity]
        public Int32? CollateralId
        {
            get { return Fields.CollateralId[this]; }
            set { Fields.CollateralId[this] = value; }
        }

        [DisplayName("Collateral Name"), Column("COLLATERAL_NAME"), Size(100), NotNull, QuickSearch]
        public String CollateralName
        {
            get { return Fields.CollateralName[this]; }
            set { Fields.CollateralName[this] = value; }
        }

        [DisplayName("Collateral Desc"), Column("COLLATERAL_DESC"), Size(300)]
        public String CollateralDesc
        {
            get { return Fields.CollateralDesc[this]; }
            set { Fields.CollateralDesc[this] = value; }
        }

        [DisplayName("Reference Text"), Column("REFERENCE_TEXT"), Size(50)]
        public String ReferenceText
        {
            get { return Fields.ReferenceText[this]; }
            set { Fields.ReferenceText[this] = value; }
        }

        [DisplayName("Type"), Column("TYPE")]
        public Int32? Type
        {
            get { return Fields.Type[this]; }
            set { Fields.Type[this] = value; }
        }

        [DisplayName("Sub Type"), Column("SUB_TYPE")]
        public Int32? SubType
        {
            get { return Fields.SubType[this]; }
            set { Fields.SubType[this] = value; }
        }

        [DisplayName("Detail Type"), Column("DETAIL_TYPE")]
        public Int32? DetailType
        {
            get { return Fields.DetailType[this]; }
            set { Fields.DetailType[this] = value; }
        }

        [DisplayName("Expiry Date"), Column("EXPIRY_DATE")]
        public DateTime? ExpiryDate
        {
            get { return Fields.ExpiryDate[this]; }
            set { Fields.ExpiryDate[this] = value; }
        }

        [DisplayName("Start Date"), Column("START_DATE")]
        public DateTime? StartDate
        {
            get { return Fields.StartDate[this]; }
            set { Fields.StartDate[this] = value; }
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

        [DisplayName("Flag"), Column("FLAG"), NotNull]
        public Boolean? Flag
        {
            get { return Fields.Flag[this]; }
            set { Fields.Flag[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.CollateralId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.CollateralName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CmpgnCollateralRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field CollateralId;
            public StringField CollateralName;
            public StringField CollateralDesc;
            public StringField ReferenceText;
            public Int32Field Type;
            public Int32Field SubType;
            public Int32Field DetailType;
            public DateTimeField ExpiryDate;
            public DateTimeField StartDate;
            public Int32Field CreatedBy;
            public DateTimeField CreatedDate;
            public Int32Field LastModifiedBy;
            public DateTimeField LastModifiedDate;
            public BooleanField IsValidated;
            public BooleanField IsPublished;
            public BooleanField IsRetired;
            public BooleanField Flag;
        }
    }
}
