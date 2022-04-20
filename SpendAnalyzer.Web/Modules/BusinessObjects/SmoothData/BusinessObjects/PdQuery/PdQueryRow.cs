
namespace SmoothData.BusinessObjects.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("SmoothData"), Module("BusinessObjects"), TableName("[dbo].[PD_QUERY]")]
    [DisplayName("Use case"), InstanceName("Use case")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class PdQueryRow : Row, IIdRow, INameRow
    {
        [DisplayName("Pd Id"), Column("PD_ID"), Identity]
        public Int32? PdId
        {
            get { return Fields.PdId[this]; }
            set { Fields.PdId[this] = value; }
        }

        [DisplayName("Prfx"), Column("Prfx"), Size(100), QuickSearch, Hidden]
        public String Prfx
        {
            get { return Fields.Prfx[this]; }
            set { Fields.Prfx[this] = value; }
        }

        [DisplayName("Name"), Column("NAME"), Size(100), QuickSearch, Width(250), Required]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        [DisplayName("Description"), Column("DESCRIPTION"), Size(1000), TextAreaEditor(Rows = 4)]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }

        [DisplayName("Created By"), Column("CREATED_BY"), ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("jCreatedBy"), TextualField("CreatedByUsername")]
        [LookupEditor(typeof(SpendAnalyzer.Administration.Entities.UserRow))]
        public Int32? CreatedBy
        {
            get { return Fields.CreatedBy[this]; }
            set { Fields.CreatedBy[this] = value; }
        }

        [DisplayName("Created Date"), Column("CREATED_DATE"), Width(210)]
        public DateTime? CreatedDate
        {
            get { return Fields.CreatedDate[this]; }
            set { Fields.CreatedDate[this] = value; }
        }

        [DisplayName("Last Modified By"), Column("LAST_MODIFIED_BY"), ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("jLastModifiedBy"), TextualField("LastModifiedByUsername")]
        
        public Int32? LastModifiedBy
        {
            get { return Fields.LastModifiedBy[this]; }
            set { Fields.LastModifiedBy[this] = value; }
        }

        [DisplayName("Last Modified Date"), Column("LAST_MODIFIED_DATE"), Width(210)]
        public DateTime? LastModifiedDate
        {
            get { return Fields.LastModifiedDate[this]; }
            set { Fields.LastModifiedDate[this] = value; }
        }

        [DisplayName("Pd Rule"), Column("PD_RULE"), Hidden]
        public String PdRule
        {
            get { return Fields.PdRule[this]; }
            set { Fields.PdRule[this] = value; }
        }


        [DisplayName("Attr Flds"), Column("ATTR_FLDS"), Hidden]
        public String AttrFlds
        {
            get { return Fields.AttrFlds[this]; }
            set { Fields.AttrFlds[this] = value; }
        }


        [DisplayName("Param Qry"), Column("PARAM_QRY"), Hidden]
        public String ParamQry
        {
            get { return Fields.ParamQry[this]; }
            set { Fields.ParamQry[this] = value; }
        }

        [DisplayName("Is Validated"), Column("IS_VALIDATED"),  Hidden]
        public Boolean? IsValidated
        { 
            get { return Fields.IsValidated[this]; }
            set { Fields.IsValidated[this] = value; }
        }

        [DisplayName("Is Published"), Column("IS_PUBLISHED"),  Hidden]
        public Boolean? IsPublished
        {
            get { return Fields.IsPublished[this]; }
            set { Fields.IsPublished[this] = value; }
        }

        [DisplayName("Is Retired"), Column("IS_RETIRED"),  Hidden]
        public Boolean? IsRetired
        {
            get { return Fields.IsRetired[this]; }
            set { Fields.IsRetired[this] = value; }
        }

        [DisplayName("Created By"), Expression("jCreatedBy.[Username]"), Width(210)]
        public String CreatedByUsername
        {
            get { return Fields.CreatedByUsername[this]; }
            set { Fields.CreatedByUsername[this] = value; }
        }

        [DisplayName("Created By Display Name"), Expression("jCreatedBy.[DisplayName]")]
        public String CreatedByDisplayName
        {
            get { return Fields.CreatedByDisplayName[this]; }
            set { Fields.CreatedByDisplayName[this] = value; }
        }

        [DisplayName("Created By Email"), Expression("jCreatedBy.[Email]")]
        public String CreatedByEmail
        {
            get { return Fields.CreatedByEmail[this]; }
            set { Fields.CreatedByEmail[this] = value; }
        }

        [DisplayName("Created By Source"), Expression("jCreatedBy.[Source]")]
        public String CreatedBySource
        {
            get { return Fields.CreatedBySource[this]; }
            set { Fields.CreatedBySource[this] = value; }
        }

        [DisplayName("Created By Password Hash"), Expression("jCreatedBy.[PasswordHash]")]
        public String CreatedByPasswordHash
        {
            get { return Fields.CreatedByPasswordHash[this]; }
            set { Fields.CreatedByPasswordHash[this] = value; }
        }

        [DisplayName("Created By Password Salt"), Expression("jCreatedBy.[PasswordSalt]")]
        public String CreatedByPasswordSalt
        {
            get { return Fields.CreatedByPasswordSalt[this]; }
            set { Fields.CreatedByPasswordSalt[this] = value; }
        }

        [DisplayName("Created By Last Directory Update"), Expression("jCreatedBy.[LastDirectoryUpdate]")]
        public DateTime? CreatedByLastDirectoryUpdate
        {
            get { return Fields.CreatedByLastDirectoryUpdate[this]; }
            set { Fields.CreatedByLastDirectoryUpdate[this] = value; }
        }

        [DisplayName("Created By User Image"), Expression("jCreatedBy.[UserImage]")]
        public String CreatedByUserImage
        {
            get { return Fields.CreatedByUserImage[this]; }
            set { Fields.CreatedByUserImage[this] = value; }
        }

        [DisplayName("Created By Insert Date"), Expression("jCreatedBy.[InsertDate]")]
        public DateTime? CreatedByInsertDate
        {
            get { return Fields.CreatedByInsertDate[this]; }
            set { Fields.CreatedByInsertDate[this] = value; }
        }

        [DisplayName("Created By Insert User Id"), Expression("jCreatedBy.[InsertUserId]")]
        public Int32? CreatedByInsertUserId
        {
            get { return Fields.CreatedByInsertUserId[this]; }
            set { Fields.CreatedByInsertUserId[this] = value; }
        }

        [DisplayName("Created By Update Date"), Expression("jCreatedBy.[UpdateDate]")]
        public DateTime? CreatedByUpdateDate
        {
            get { return Fields.CreatedByUpdateDate[this]; }
            set { Fields.CreatedByUpdateDate[this] = value; }
        }

        [DisplayName("Created By Update User Id"), Expression("jCreatedBy.[UpdateUserId]")]
        public Int32? CreatedByUpdateUserId
        {
            get { return Fields.CreatedByUpdateUserId[this]; }
            set { Fields.CreatedByUpdateUserId[this] = value; }
        }

        [DisplayName("Created By Is Active"), Expression("jCreatedBy.[IsActive]")]
        public Int16? CreatedByIsActive
        {
            get { return Fields.CreatedByIsActive[this]; }
            set { Fields.CreatedByIsActive[this] = value; }
        }

        [DisplayName("Last Modified By"), Expression("jLastModifiedBy.[Username]"), Width(210)]
        public String LastModifiedByUsername
        {
            get { return Fields.LastModifiedByUsername[this]; }
            set { Fields.LastModifiedByUsername[this] = value; }
        }

        [DisplayName("Last Modified By Display Name"), Expression("jLastModifiedBy.[DisplayName]")]
        public String LastModifiedByDisplayName
        {
            get { return Fields.LastModifiedByDisplayName[this]; }
            set { Fields.LastModifiedByDisplayName[this] = value; }
        }

        [DisplayName("Last Modified By Email"), Expression("jLastModifiedBy.[Email]")]
        public String LastModifiedByEmail
        {
            get { return Fields.LastModifiedByEmail[this]; }
            set { Fields.LastModifiedByEmail[this] = value; }
        }

        [DisplayName("Last Modified By Source"), Expression("jLastModifiedBy.[Source]")]
        public String LastModifiedBySource
        {
            get { return Fields.LastModifiedBySource[this]; }
            set { Fields.LastModifiedBySource[this] = value; }
        }

        [DisplayName("Last Modified By Password Hash"), Expression("jLastModifiedBy.[PasswordHash]")]
        public String LastModifiedByPasswordHash
        {
            get { return Fields.LastModifiedByPasswordHash[this]; }
            set { Fields.LastModifiedByPasswordHash[this] = value; }
        }

        [DisplayName("Last Modified By Password Salt"), Expression("jLastModifiedBy.[PasswordSalt]")]
        public String LastModifiedByPasswordSalt
        {
            get { return Fields.LastModifiedByPasswordSalt[this]; }
            set { Fields.LastModifiedByPasswordSalt[this] = value; }
        }

        [DisplayName("Last Modified By Last Directory Update"), Expression("jLastModifiedBy.[LastDirectoryUpdate]")]
        public DateTime? LastModifiedByLastDirectoryUpdate
        {
            get { return Fields.LastModifiedByLastDirectoryUpdate[this]; }
            set { Fields.LastModifiedByLastDirectoryUpdate[this] = value; }
        }

        [DisplayName("Last Modified By User Image"), Expression("jLastModifiedBy.[UserImage]")]
        public String LastModifiedByUserImage
        {
            get { return Fields.LastModifiedByUserImage[this]; }
            set { Fields.LastModifiedByUserImage[this] = value; }
        }

        [DisplayName("Last Modified By Insert Date"), Expression("jLastModifiedBy.[InsertDate]")]
        public DateTime? LastModifiedByInsertDate
        {
            get { return Fields.LastModifiedByInsertDate[this]; }
            set { Fields.LastModifiedByInsertDate[this] = value; }
        }

        [DisplayName("Last Modified By Insert User Id"), Expression("jLastModifiedBy.[InsertUserId]")]
        public Int32? LastModifiedByInsertUserId
        {
            get { return Fields.LastModifiedByInsertUserId[this]; }
            set { Fields.LastModifiedByInsertUserId[this] = value; }
        }

        [DisplayName("Last Modified By Update Date"), Expression("jLastModifiedBy.[UpdateDate]")]
        public DateTime? LastModifiedByUpdateDate
        {
            get { return Fields.LastModifiedByUpdateDate[this]; }
            set { Fields.LastModifiedByUpdateDate[this] = value; }
        }

        [DisplayName("Last Modified By Update User Id"), Expression("jLastModifiedBy.[UpdateUserId]")]
        public Int32? LastModifiedByUpdateUserId
        {
            get { return Fields.LastModifiedByUpdateUserId[this]; }
            set { Fields.LastModifiedByUpdateUserId[this] = value; }
        }

        [DisplayName("Last Modified By Is Active"), Expression("jLastModifiedBy.[IsActive]")]
        public Int16? LastModifiedByIsActive
        {
            get { return Fields.LastModifiedByIsActive[this]; }
            set { Fields.LastModifiedByIsActive[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.PdId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public PdQueryRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field PdId;
            public StringField Prfx;
            public StringField Name;
            public StringField Description;
            public Int32Field CreatedBy;
            public DateTimeField CreatedDate;
            public Int32Field LastModifiedBy;
            public DateTimeField LastModifiedDate;
            public StringField PdRule;
            public StringField AttrFlds;
            public StringField ParamQry;
            public BooleanField IsValidated;
            public BooleanField IsPublished;
            public BooleanField IsRetired;

            public StringField CreatedByUsername;
            public StringField CreatedByDisplayName;
            public StringField CreatedByEmail;
            public StringField CreatedBySource;
            public StringField CreatedByPasswordHash;
            public StringField CreatedByPasswordSalt;
            public DateTimeField CreatedByLastDirectoryUpdate;
            public StringField CreatedByUserImage;
            public DateTimeField CreatedByInsertDate;
            public Int32Field CreatedByInsertUserId;
            public DateTimeField CreatedByUpdateDate;
            public Int32Field CreatedByUpdateUserId;
            public Int16Field CreatedByIsActive;

            public StringField LastModifiedByUsername;
            public StringField LastModifiedByDisplayName;
            public StringField LastModifiedByEmail;
            public StringField LastModifiedBySource;
            public StringField LastModifiedByPasswordHash;
            public StringField LastModifiedByPasswordSalt;
            public DateTimeField LastModifiedByLastDirectoryUpdate;
            public StringField LastModifiedByUserImage;
            public DateTimeField LastModifiedByInsertDate;
            public Int32Field LastModifiedByInsertUserId;
            public DateTimeField LastModifiedByUpdateDate;
            public Int32Field LastModifiedByUpdateUserId;
            public Int16Field LastModifiedByIsActive;
        }
    }
}
