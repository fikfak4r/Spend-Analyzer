
namespace SmoothData.BusinessObjects.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("BusinessObjects"), TableName("[dbo].[DerivedQry]")]
    [DisplayName("Derived Qry"), InstanceName("Query")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class DerivedQryRow : Row, IIdRow, INameRow
    {
        [DisplayName("Drvd Id"), Identity, Hidden]
        public Int32? DrvdId
        {
            get { return Fields.DrvdId[this]; }
            set { Fields.DrvdId[this] = value; }
        }

        [DisplayName("Bs"), ForeignKey("[dbo].[BaseQry]", "BsId"), LeftJoin("jBs"), TextualField("BsParentId"), Hidden]
        public Int32? BsId
        {
            get { return Fields.BsId[this]; }
            set { Fields.BsId[this] = value; }
        }

        [DisplayName("Params"), Size(500), QuickSearch, Hidden]
        public String Params
        {
            get { return Fields.Params[this]; }
            set { Fields.Params[this] = value; }
        }

        [DisplayName("Query"), TextAreaEditor(Rows = 12), EditLink, Width(420)]
        public String QryTemplate
        {
            get { return Fields.QryTemplate[this]; }
            set { Fields.QryTemplate[this] = value; }
        }

        [DisplayName("Bs Parent Id"), Expression("jBs.[ParentId]"), Hidden]
        public String BsParentId
        {
            get { return Fields.BsParentId[this]; }
            set { Fields.BsParentId[this] = value; }
        }

        [DisplayName("Bs Template Name"), Expression("jBs.[TemplateName]")]
        public String BsTemplateName
        {
            get { return Fields.BsTemplateName[this]; }
            set { Fields.BsTemplateName[this] = value; }
        }

        [DisplayName("Bs Category Id"), Expression("jBs.[CategoryId]")]
        public Int32? BsCategoryId
        {
            get { return Fields.BsCategoryId[this]; }
            set { Fields.BsCategoryId[this] = value; }
        }

        [DisplayName("Bs Fields"), Expression("jBs.[FieldList]")]
        public String BsFields
        {
            get { return Fields.BsFields[this]; }
            set { Fields.BsFields[this] = value; }
        }

        [DisplayName("Bs Run Time Table Name"), Expression("jBs.[RunTimeTableName]")]
        public String BsRunTimeTableName
        {
            get { return Fields.BsRunTimeTableName[this]; }
            set { Fields.BsRunTimeTableName[this] = value; }
        }

        [DisplayName("Bs Params"), Expression("jBs.[Params]")]
        public String BsParams
        {
            get { return Fields.BsParams[this]; }
            set { Fields.BsParams[this] = value; }
        }

        [DisplayName("Bs Rltd Columns"), Expression("jBs.[RltdColumns]")]
        public String BsRltdColumns
        {
            get { return Fields.BsRltdColumns[this]; }
            set { Fields.BsRltdColumns[this] = value; }
        }

        [DisplayName("Bs Dflt Vl"), Expression("jBs.[DfltVl]")]
        public String BsDfltVl
        {
            get { return Fields.BsDfltVl[this]; }
            set { Fields.BsDfltVl[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.DrvdId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Params; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public DerivedQryRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field DrvdId;
            public Int32Field BsId;
            public StringField Params;
            public StringField QryTemplate;

            public StringField BsParentId;
            public StringField BsTemplateName;
            public Int32Field BsCategoryId;
            public StringField BsFields;
            public StringField BsRunTimeTableName;
            public StringField BsParams;
            public StringField BsRltdColumns;
            public StringField BsDfltVl;
        }
    }
}
