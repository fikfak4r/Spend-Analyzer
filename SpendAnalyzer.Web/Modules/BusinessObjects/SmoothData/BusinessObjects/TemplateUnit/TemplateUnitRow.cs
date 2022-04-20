
namespace SmoothData.BusinessObjects.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("BusinessObjects"), TableName("[dbo].[TemplateUnits]")]
    [DisplayName("Template Unit"), InstanceName("Template Unit")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("BusinessObjects.TemplateUnit")]
    public sealed class TemplateUnitRow : Row, IIdRow
    {

        [DisplayName("Unit Id"), Identity, Hidden]
        public Int32? UnitId
        {
            get { return Fields.UnitId[this]; }
            set { Fields.UnitId[this] = value; }
        }

        [DisplayName("Base Unit"), NotNull, ForeignKey("[dbo].[BaseQry]", "BsId"), LeftJoin("jBaseUnit"), TextualField("BaseUnitParentId")]
        [LookupEditor(typeof(BaseQryRow)), LookupInclude]
        public Int32? BaseUnitId
        {
            get { return Fields.BaseUnitId[this]; }
            set { Fields.BaseUnitId[this] = value; }
        }

        [DisplayName("Parent Unit"), ForeignKey("[dbo].[TemplateUnits]", "UnitId"), LeftJoin("jParentUnit")]
        [LookupInclude, TemplateUnitEditor]
        public Int32? ParentUnitId
        {
            get { return Fields.ParentUnitId[this]; }
            set { Fields.ParentUnitId[this] = value; }
        } 

        [DisplayName("Base Unit Parent Id"), Expression("jBaseUnit.[ParentId]")]
        public String BaseUnitParentId
        {
            get { return Fields.BaseUnitParentId[this]; }
            set { Fields.BaseUnitParentId[this] = value; }
        }

        [DisplayName("Base Unit Template Name"), Expression("jBaseUnit.[TemplateName]")]
        public String BaseUnitTemplateName
        {
            get { return Fields.BaseUnitTemplateName[this]; }
            set { Fields.BaseUnitTemplateName[this] = value; }
        }

        [DisplayName("Base Unit Category Id"), Expression("jBaseUnit.[CategoryId]")]
        public Int32? BaseUnitCategoryId
        {
            get { return Fields.BaseUnitCategoryId[this]; }
            set { Fields.BaseUnitCategoryId[this] = value; }
        }

        [DisplayName("Base Unit Field List"), Expression("jBaseUnit.[FieldList]")]
        public String BaseUnitFieldList
        {
            get { return Fields.BaseUnitFieldList[this]; }
            set { Fields.BaseUnitFieldList[this] = value; }
        }

        [DisplayName("Base Unit Run Time Table Name"), Expression("jBaseUnit.[RunTimeTableName]")]
        public String BaseUnitRunTimeTableName
        {
            get { return Fields.BaseUnitRunTimeTableName[this]; }
            set { Fields.BaseUnitRunTimeTableName[this] = value; }
        }

        [DisplayName("Base Unit Params"), Expression("jBaseUnit.[Params]")]
        public String BaseUnitParams
        {
            get { return Fields.BaseUnitParams[this]; }
            set { Fields.BaseUnitParams[this] = value; }
        }

        [DisplayName("Base Unit Rltd Columns"), Expression("jBaseUnit.[RltdColumns]")]
        public String BaseUnitRltdColumns
        {
            get { return Fields.BaseUnitRltdColumns[this]; }
            set { Fields.BaseUnitRltdColumns[this] = value; }
        }

        [DisplayName("Base Unit Dflt Vl"), Expression("jBaseUnit.[DfltVl]")]
        public String BaseUnitDfltVl
        {
            get { return Fields.BaseUnitDfltVl[this]; }
            set { Fields.BaseUnitDfltVl[this] = value; }
        }

        //The Parents Base Unit Id
        [DisplayName("Parent Unit Base Unit Id"), Expression("jParentUnit.[BaseUnitId]"), 
            ForeignKey("[dbo].[BaseQry]", "BsId"), LeftJoin("jTemplateUnitBaseUnit"), LookupInclude,
            Hidden]
        public Int32? ParentUnitBaseUnitId
        {
            get { return Fields.ParentUnitBaseUnitId[this]; }
            set { Fields.ParentUnitBaseUnitId[this] = value; }
        }

        [DisplayName("Parent Unit Parent Unit Id"), Expression("jParentUnit.[ParentUnitId]") ]
        public Int32? ParentUnitParentUnitId
        {
            get { return Fields.ParentUnitParentUnitId[this]; }
            set { Fields.ParentUnitParentUnitId[this] = value; }
        }

        [DisplayName("Parent Template Name"), Expression("jTemplateUnitBaseUnit.[TemplateName]")]
        public String TemplateUnitBaseUnitName
        {
            get { return Fields.TemplateUnitBaseUnitName[this]; }
            set { Fields.TemplateUnitBaseUnitName[this] = value; }
        }

        [DisplayName("Base Relation Field Name"), NotNull, ForeignKey("[dbo].[FieldList]", "FieldMemberId"), LeftJoin("jFieldList")]
        [LookupEditor(typeof(FieldListRow), CascadeFrom = "BaseUnitId", CascadeField = "BsId")]
        public Int32? BaseUnitRelationFieldId
        {
            get { return Fields.BaseUnitRelationFieldId[this]; }
            set { Fields.BaseUnitRelationFieldId[this] = value; }
        }

        [DisplayName("Parent Relation Field Name"), NotNull, ForeignKey("[dbo].[FieldList]", "FieldMemberId"), LeftJoin("jFieldList1")]
        [LookupEditor(typeof(FieldListRow))]
        public Int32? ParentUnitRelationId
        {
            get { return Fields.ParentUnitRelationId[this]; }
            set { Fields.ParentUnitRelationId[this] = value; }
        }

        [DisplayName("Base Relation Field Name"), Expression("jFieldList.[Name]")]
        public String BaseRelationFieldName
        {
            get { return Fields.BaseRelationFieldName[this]; }
            set { Fields.BaseRelationFieldName[this] = value; }
        }

        
        [DisplayName("Parent Relation Field Name"), Expression("jFieldList1.[Name]")]
        public String ParentRelationFieldName
        {
            get { return Fields.ParentRelationFieldName[this]; }
            set { Fields.ParentRelationFieldName[this] = value; }
        }






        IIdField IIdRow.IdField
        {
            get { return Fields.UnitId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TemplateUnitRow()
            : base(Fields)
        {

        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field UnitId;
            public Int32Field BaseUnitId;
            public Int32Field ParentUnitId;

            public StringField BaseUnitParentId;
            public StringField BaseUnitTemplateName;
            public Int32Field BaseUnitCategoryId;
            public StringField BaseUnitFieldList;
            public StringField BaseUnitRunTimeTableName;
            public StringField BaseUnitParams;
            public StringField BaseUnitRltdColumns;
            public StringField BaseUnitDfltVl;

            public Int32Field ParentUnitBaseUnitId;
            public Int32Field ParentUnitParentUnitId;

            public StringField TemplateUnitBaseUnitName;


            public Int32Field BaseUnitRelationFieldId;
            public Int32Field ParentUnitRelationId;

            public StringField BaseRelationFieldName;
            public StringField ParentRelationFieldName;
           
            

        }
    }
}
