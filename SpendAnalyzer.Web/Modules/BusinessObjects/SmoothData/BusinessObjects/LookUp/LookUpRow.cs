
namespace SmoothData.BusinessObjects.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("BusinessObjects"), TableName("[dbo].[LookUps]")]
    [DisplayName("Look Up"), InstanceName("Look Up")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("BusinessObjects.LookUp")]
    public sealed class LookUpRow : Row, IIdRow, INameRow
    {
        [DisplayName("Look Up Id"), PrimaryKey, Hidden, Identity]
        public Int32? LookUpId
        {
            get { return Fields.LookUpId[this]; }
            set { Fields.LookUpId[this] = value; }
        }

        [DisplayName("Name"), Size(50), QuickSearch]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        [DisplayName("Look Up Query"), Size(500), TextAreaEditor(Rows = 8), Width(356)]
        public String LookUpQuery
        {
            get { return Fields.LookUpQuery[this]; }
            set { Fields.LookUpQuery[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.LookUpId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public LookUpRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field LookUpId;
            public StringField Name;
            public StringField LookUpQuery;
        }
    }
}
