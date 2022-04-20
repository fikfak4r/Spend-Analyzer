
namespace SmoothData.BusinessObjects.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using System.ComponentModel.DataAnnotations;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("BusinessObjects"), TableName("[dbo].[BaseQry]")]
    [DisplayName("Base Qry"), InstanceName("Base Qry")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("BusinessObjects.BaseQryFE")]
    public sealed class BaseQryFERow : Row, IIdRow, INameRow
    {


        //[DisplayName("Bs Id"), Identity, Hidden]
        //public Int32? BsId
        //{
        //    get { return Fields.BsId[this]; }
        //    set { Fields.BsId[this] = value; }
        //}

        //[DisplayName("Parent Id"), Size(50), QuickSearch, Hidden]
        //public String ParentId
        //{
        //    get { return Fields.ParentId[this]; }
        //    set { Fields.ParentId[this] = value; }
        //}


        [Column("TemplateName"), Newtonsoft.Json.JsonProperty(PropertyName = "field")]
        public String field
        {
            get { return Fields.field[this]; }
            set { Fields.field[this] = value; }
        }


        [Expression("T0.TemplateName")]
        public String label
        {
            get { return Fields.label[this]; }
            set { Fields.label[this] = value; }
        }

        [NotMapped]
        public String type
        {
            get { return Fields.type[this]; }
            set { Fields.type[this] = value; }
        }


        [DisplayName("Category"), ForeignKey("[dbo].[Category]", "CategoryId"), LeftJoin("jCategory"), TextualField("CategoryCategoryName")]
        public Int32? CategoryId
        {
            get { return Fields.CategoryId[this]; }
            set { Fields.CategoryId[this] = value; }
        }


        [DisplayName("Category Category Name"), Expression("jCategory.[CategoryName]")]
        public String CategoryCategoryName
        {
            get { return Fields.CategoryCategoryName[this]; }
            set { Fields.CategoryCategoryName[this] = value; }
        }

        /*
        [DisplayName("Category"), ForeignKey("[dbo].[Category]", "CategoryId"), LeftJoin("jCategory"), TextualField("CategoryCategoryName")]
        [LookupEditor(typeof(CategoryRow), InplaceAdd = true)]  
        public Int32? CategoryId  
        {
            get { return Fields.CategoryId[this]; }
            set { Fields.CategoryId[this] = value; }
        }

        [DisplayName("Fields"), Size(500), TextAreaEditor(Rows = 8)]
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

        [DisplayName("Params"), Size(500), TextAreaEditor(Rows = 8)]
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

        [DisplayName("Category Category Name"), Expression("jCategory.[CategoryName]")]
        public String CategoryCategoryName
        {
            get { return Fields.CategoryCategoryName[this]; }
            set { Fields.CategoryCategoryName[this] = value; }
        }
        */


        IIdField IIdRow.IdField
        {
            get { return Fields.label; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.label; }
        }

       

        public static readonly RowFields Fields = new RowFields().Init();

        public BaseQryFERow()
            : base(Fields)
        {
        }


        public class RowFields : RowFieldsBase
        {
            public StringField field;
            public StringField label;
            public StringField type;
            public Int32Field CategoryId;
            public StringField CategoryCategoryName;
            
       
        }


    }
}
