
namespace SmoothData.BusinessObjects.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("SmoothData"), Module("BusinessObjects"), TableName("[dbo].[Category]")]
    [DisplayName("Category"), InstanceName("Category")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("BusinessObjects.Category")]
    public sealed class CategoryRow : Row, IIdRow, INameRow
    {
        [DisplayName("Category Id"), PrimaryKey]
        public Int32? CategoryId
        {
            get { return Fields.CategoryId[this]; }
            set { Fields.CategoryId[this] = value; }
        }

        [DisplayName("Name"), Size(200), Width(560), QuickSearch]
        public String CategoryName
        {
            get { return Fields.CategoryName[this]; }
            set { Fields.CategoryName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.CategoryId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.CategoryName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CategoryRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field CategoryId;
            public StringField CategoryName;
        }
    }
}
