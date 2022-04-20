
namespace SmoothData.BusinessObjects.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("BusinessObjects"), TableName("[dbo].[Category]")]
    [DisplayName("Category"), InstanceName("Category")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("BusinessObjects.CategoryFE")]
    public sealed class CategoryFERow : Row, IIdRow, INameRow
    {
       

        [Column("CategoryName")]
        public String label
        {
            get { return Fields.label[this]; }
            set { Fields.label[this] = value; }
        }

        [Expression("T0.CategoryName")]
        public String field
        {
            get { return Fields.field[this]; }
            set { Fields.field[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.field; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.label; }
        }

        [NotMapped]
        public String type
        {
            get { return Fields.type[this]; }
            set { Fields.type[this] = value; }
        }


        public static readonly RowFields Fields = new RowFields().Init();

        public CategoryFERow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public StringField label;
            public StringField field;
            public StringField type;

        }
    }
}
