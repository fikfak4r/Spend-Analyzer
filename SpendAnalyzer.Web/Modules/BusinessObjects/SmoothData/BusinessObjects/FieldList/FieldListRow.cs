
namespace SmoothData.BusinessObjects.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("BusinessObjects"), TableName("[dbo].[FieldList]")]
    [DisplayName("Field List"), InstanceName("Field")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("BusinessObjects.FieldList")]
    public sealed class FieldListRow : Row, IIdRow, INameRow
    {
        [DisplayName("Field Member Id"), PrimaryKey, Identity, Hidden]
        public Int32? FieldMemberId
        {
            get { return Fields.FieldMemberId[this]; }
            set { Fields.FieldMemberId[this] = value; }
        }

        [DisplayName("Bs"), ForeignKey("[dbo].[BaseQry]", "BsId"), LeftJoin("jBs"), LookupInclude, Hidden]
        public Int32? BsId
        {
            get { return Fields.BsId[this]; }
            set { Fields.BsId[this] = value; }
        }

        [DisplayName("Name"), Size(50), Width(210), QuickSearch]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        [DisplayName("Data Type"), Width(192)]
        public FieldDataType? DataType
        {
            get { return (FieldDataType)Fields.DataType[this]; }
            set { Fields.DataType[this] = (Int16)value; }
        }

        [DisplayName("Size"), Width(180), DefaultValue(250)]
        public Int32? Size
        {
            get { return Fields.Size[this]; }
            set { Fields.Size[this] = value; }
        }

        //[DisplayName("Dimension"), ForeignKey("[dbo].[BaseQry]", "BsId"), LeftJoin("jBs"), TextualField("BsParentId")]
        [DisplayName("Look up"), ForeignKey("[dbo].[LookUps]", "LookUpId"), LeftJoin("jLkUps")]
        [LookupEditor(typeof(LookUpRow), InplaceAdd = true)]
        public Int32? LookUpId
        {
            get { return Fields.LookUpId[this]; }
            set { Fields.LookUpId[this] = value; }
        }

        [DisplayName("Lookup Name"), Expression("jLkUps.[Name]")]
        public String LookUpName
        {
            get { return Fields.LookUpName[this]; }
            set { Fields.LookUpName[this] = value; }
        }

        [DisplayName("Bs Parent Id"), Expression("jBs.[ParentId]")]
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

        [DisplayName("Bs Field List"), Expression("jBs.[FieldList]")]
        public String BsFieldList
        {
            get { return Fields.BsFieldList[this]; }
            set { Fields.BsFieldList[this] = value; }
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
            get { return Fields.FieldMemberId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public FieldListRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field FieldMemberId;
            public Int32Field BsId;
            public StringField Name;
            public Int16Field DataType;
            public Int32Field Size;
            public Int32Field LookUpId;

            public StringField LookUpName;
            public StringField BsParentId;
            public StringField BsTemplateName;
            public Int32Field BsCategoryId;
            public StringField BsFieldList;
            public StringField BsRunTimeTableName;
            public StringField BsParams;
            public StringField BsRltdColumns;
            public StringField BsDfltVl;
        }
    }
}
