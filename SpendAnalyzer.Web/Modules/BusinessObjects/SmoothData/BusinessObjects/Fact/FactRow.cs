
namespace SmoothData.BusinessObjects.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("BusinessObjects"), TableName("[dbo].[Facts]")]
    [DisplayName("Facts"), InstanceName("Fact")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("BusinessObjects.Fact")]
    public sealed class FactRow : Row, IIdRow, INameRow
    {
        [DisplayName("Fact Id"), Identity]
        public Int32? FactId
        {
            get { return Fields.FactId[this]; }
            set { Fields.FactId[this] = value; }
        }

        [DisplayName("Name"), Size(50), QuickSearch]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        [DisplayName("Field Name"), Size(50), QuickSearch]
        public String FieldName
        {
            get { return Fields.FieldName[this]; }
            set { Fields.FieldName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.FactId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public FactRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field FactId;
            public StringField Name;
            public StringField FieldName;
        }
    }
}
