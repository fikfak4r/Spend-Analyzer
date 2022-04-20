
namespace SmoothData.BusinessObjects.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("SmoothData"), Module("BusinessObjects"), TableName("[dbo].[BaseQry]")]
    [DisplayName("Dimensions"), InstanceName("Dimension")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("BusinessObjects.BaseQry")]
    public sealed class BaseQryRow : Row, IIdRow, INameRow
    {
        [DisplayName("Bs Id"), Identity, Hidden]
        public Int32? BsId
        {
            get { return Fields.BsId[this]; }
            set { Fields.BsId[this] = value; }
        }

        [DisplayName("Parent Id"), Size(50), QuickSearch, Hidden]
        public String ParentId
        {
            get { return Fields.ParentId[this]; }
            set { Fields.ParentId[this] = value; }
        }

        [DisplayName("Name"), Size(50), LookupInclude, Width(395)]
        public String TemplateName
        {
            get { return Fields.TemplateName[this]; }
            set { Fields.TemplateName[this] = value; }
        }

        [DisplayName("Category"), ForeignKey("[dbo].[Category]", "CategoryId"), LeftJoin("jCategory"), TextualField("CategoryCategoryName")]
        [LookupEditor(typeof(CategoryRow), InplaceAdd = true)]  
        public Int32? CategoryId  
        {
            get { return Fields.CategoryId[this]; }
            set { Fields.CategoryId[this] = value; }
        }

        [DisplayName("Fields"), Size(500), TextAreaEditor(Rows = 8), Hidden]
        public String FieldList 
        {
            get { return Fields.FieldList[this]; }
            set { Fields.FieldList[this] = value; }
        }

        [DisplayName("Run Time Table Name"), Size(50), Hidden]
        public String RunTimeTableName
        {
            get { return Fields.RunTimeTableName[this]; }
            set { Fields.RunTimeTableName[this] = value; }
        }

        [DisplayName("Params"), Size(500), TextAreaEditor(Rows = 8), Hidden]
        public String Params
        {
            get { return Fields.Params[this]; }
            set { Fields.Params[this] = value; }
        }

        [DisplayName("Rltd Columns"), Size(50), Hidden]
        public String RltdColumns
        {
            get { return Fields.RltdColumns[this]; }
            set { Fields.RltdColumns[this] = value; }
        }

        [DisplayName("Dflt Vl"), Size(500), Hidden]
        public String DfltVl
        {
            get { return Fields.DfltVl[this]; }
            set { Fields.DfltVl[this] = value; }
        }

        [DisplayName("IsAutoGen"), DefaultValue(0)]
        public Boolean? IsAutoGen
        {
            get { return Fields.IsAutoGen[this]; }
            set { Fields.IsAutoGen[this] = value; }
        }

        [DisplayName("Category"), Expression("jCategory.[CategoryName]")]
        public String CategoryCategoryName
        {
            get { return Fields.CategoryCategoryName[this]; }
            set { Fields.CategoryCategoryName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.BsId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.TemplateName; }
        }

       

        public static readonly RowFields Fields = new RowFields().Init();

        public BaseQryRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field BsId;
            public StringField ParentId;
            public StringField TemplateName;
            public Int32Field CategoryId;
            public StringField FieldList;
            public StringField RunTimeTableName;
            public StringField Params;
            public StringField RltdColumns;
            public StringField DfltVl;
            public BooleanField IsAutoGen;


            public StringField CategoryCategoryName;
        }
    }
}
