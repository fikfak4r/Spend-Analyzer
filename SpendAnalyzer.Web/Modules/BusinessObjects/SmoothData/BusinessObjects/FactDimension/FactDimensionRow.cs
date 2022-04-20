
namespace SmoothData.BusinessObjects.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("BusinessObjects"), TableName("[dbo].[FactsDimensions]")]
    [DisplayName("Fact Dimension"), InstanceName("Fact Dimension")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class FactDimensionRow : Row, IIdRow
    {
        [DisplayName("Fact Dim Id"), Identity]
        public Int32? FactDimId
        {
            get { return Fields.FactDimId[this]; }
            set { Fields.FactDimId[this] = value; }
        }

        [DisplayName("Fact"), ForeignKey("[dbo].[Facts]", "FactId"), LeftJoin("jFact"), TextualField("FactName")]
        [LookupEditor(typeof(FactRow), InplaceAdd = true)]
        public Int32? FactId
        {
            get { return Fields.FactId[this]; }
            set { Fields.FactId[this] = value; }
        }

        [DisplayName("Dimension"), ForeignKey("[dbo].[BaseQry]", "BsId"), LeftJoin("jBs"), TextualField("BsParentId")]
        //[LookupEditor(typeof(BaseQryRow), InplaceAdd = true)]
        [LookupEditor(typeof(SmoothData.BusinessObjects.Lookups.BaseQryLookup), InplaceAdd = true)]
        public Int32? BsId
        {
            get { return Fields.BsId[this]; }
            set { Fields.BsId[this] = value; }
        }

        [DisplayName("Dimension Field"), ForeignKey("[dbo].[FieldList]", "FieldMemberId"), LeftJoin("jFieldMember"), TextualField("FieldMemberName")]
        [LookupEditor(typeof(FieldListRow), InplaceAdd = true, CascadeFrom = "BsId", CascadeField = "BsId")]
        public Int32? FieldMemberId
        {
            get { return Fields.FieldMemberId[this]; }
            set { Fields.FieldMemberId[this] = value; }
        }

        [DisplayName("Fact Field"), Expression("jFact.[Name]")]
        public String FactName
        {
            get { return Fields.FactName[this]; }
            set { Fields.FactName[this] = value; }
        }

        [DisplayName("Bs Parent Id"), Expression("jBs.[ParentId]")]
        public String BsParentId
        {
            get { return Fields.BsParentId[this]; }
            set { Fields.BsParentId[this] = value; }
        }

        [DisplayName("Dimension"), Expression("jBs.[TemplateName]")]
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

        [DisplayName("Field Member Bs Id"), Expression("jFieldMember.[BsId]")]
        public Int32? FieldMemberBsId
        {
            get { return Fields.FieldMemberBsId[this]; }
            set { Fields.FieldMemberBsId[this] = value; }
        }

        [DisplayName("Mapping Field"), Expression("jFieldMember.[Name]")]
        public String FieldMemberName
        {
            get { return Fields.FieldMemberName[this]; }
            set { Fields.FieldMemberName[this] = value; }
        }

        [DisplayName("Field Member Data Type"), Expression("jFieldMember.[DataType]")]
        public Int16? FieldMemberDataType
        {
            get { return Fields.FieldMemberDataType[this]; }
            set { Fields.FieldMemberDataType[this] = value; }
        }

        [DisplayName("Field Member Size"), Expression("jFieldMember.[Size]")]
        public Int32? FieldMemberSize
        {
            get { return Fields.FieldMemberSize[this]; }
            set { Fields.FieldMemberSize[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.FactDimId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public FactDimensionRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field FactDimId;
            public Int32Field FactId;
            public Int32Field BsId;
            public Int32Field FieldMemberId;

            public StringField FactName;

            public StringField BsParentId;
            public StringField BsTemplateName;
            public Int32Field BsCategoryId;
            public StringField BsFieldList;
            public StringField BsRunTimeTableName;
            public StringField BsParams;
            public StringField BsRltdColumns;
            public StringField BsDfltVl;

            public Int32Field FieldMemberBsId;
            public StringField FieldMemberName;
            public Int16Field FieldMemberDataType;
            public Int32Field FieldMemberSize;
        }
    }
}
