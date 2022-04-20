
namespace SmoothData.BusinessObjects.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("BusinessObjects"), TableName("[dbo].[Variable]")]
    [DisplayName("Variable"), InstanceName("Variable")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class VariableRow : Row, IIdRow, INameRow
    {

        [DisplayName("Variable Id"), Identity]
        public Int32? VariableId
        {
            get { return Fields.VariableId[this]; }
            set { Fields.VariableId[this] = value; }
        }

        [DisplayName("Name"), Size(10), QuickSearch]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        [DisplayName("Data Type")]
        public FieldDataType? DataType
        {
            get { return (FieldDataType)Fields.DataType[this]; }
            set { Fields.DataType[this] = (Int16)value; }
        }

        [DisplayName("Base"), ForeignKey("[dbo].[BaseQry]", "BsId"), LeftJoin("jBase"), TextualField("BaseParentId")]
        public Int32? BaseId
        {
            get { return Fields.BaseId[this]; }
            set { Fields.BaseId[this] = value; }
        }

        [DisplayName("Base Parent Id"), Expression("jBase.[ParentId]")]
        public String BaseParentId
        {
            get { return Fields.BaseParentId[this]; }
            set { Fields.BaseParentId[this] = value; }
        }

        [DisplayName("Base Template Name"), Expression("jBase.[TemplateName]")]
        public String BaseTemplateName
        {
            get { return Fields.BaseTemplateName[this]; }
            set { Fields.BaseTemplateName[this] = value; }
        }

        [DisplayName("Base Category Id"), Expression("jBase.[CategoryId]")]
        public Int32? BaseCategoryId
        {
            get { return Fields.BaseCategoryId[this]; }
            set { Fields.BaseCategoryId[this] = value; }
        }

        [DisplayName("Base Field List"), Expression("jBase.[FieldList]")]
        public String BaseFieldList
        {
            get { return Fields.BaseFieldList[this]; }
            set { Fields.BaseFieldList[this] = value; }
        }

        [DisplayName("Base Run Time Table Name"), Expression("jBase.[RunTimeTableName]")]
        public String BaseRunTimeTableName
        {
            get { return Fields.BaseRunTimeTableName[this]; }
            set { Fields.BaseRunTimeTableName[this] = value; }
        }

        [DisplayName("Base Params"), Expression("jBase.[Params]")]
        public String BaseParams
        {
            get { return Fields.BaseParams[this]; }
            set { Fields.BaseParams[this] = value; }
        }

        [DisplayName("Base Rltd Columns"), Expression("jBase.[RltdColumns]")]
        public String BaseRltdColumns
        {
            get { return Fields.BaseRltdColumns[this]; }
            set { Fields.BaseRltdColumns[this] = value; }
        }

        [DisplayName("Base Dflt Vl"), Expression("jBase.[DfltVl]")]
        public String BaseDfltVl
        {
            get { return Fields.BaseDfltVl[this]; }
            set { Fields.BaseDfltVl[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.VariableId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public VariableRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field VariableId;
            public StringField Name;
            public Int16Field DataType;
            public Int32Field BaseId;

            public StringField BaseParentId;
            public StringField BaseTemplateName;
            public Int32Field BaseCategoryId;
            public StringField BaseFieldList;
            public StringField BaseRunTimeTableName;
            public StringField BaseParams;
            public StringField BaseRltdColumns;
            public StringField BaseDfltVl;
        }
    }
}
