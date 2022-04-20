
namespace SmoothData.BusinessObjects.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("BusinessObjects"), TableName("[dbo].[BaseQryLookUp]")]
    [DisplayName("Base Qry Look Up"), InstanceName("Base Qry Look Up")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class BaseQryLookUpRow : Row, IIdRow
    {
        [DisplayName("Bs Lookup Id"), Identity]
        public Int32? BsLookupId
        {
            get { return Fields.BsLookupId[this]; }
            set { Fields.BsLookupId[this] = value; }
        }

        [DisplayName("Look Up"), ForeignKey("[dbo].[LookUps]", "LookUpId"), LeftJoin("jLookUp"), TextualField("LookUpName")]
        public Int32? LookUpId
        {
            get { return Fields.LookUpId[this]; }
            set { Fields.LookUpId[this] = value; }
        }

        [DisplayName("Bs"), ForeignKey("[dbo].[BaseQry]", "BsId"), LeftJoin("jBs"), TextualField("BsParentId")]
        public Int32? BsId
        {
            get { return Fields.BsId[this]; }
            set { Fields.BsId[this] = value; }
        }

        [DisplayName("Field Member"), ForeignKey("[dbo].[FieldList]", "FieldMemberId"), LeftJoin("jFieldMember"), TextualField("FieldMemberName")]
        public Int32? FieldMemberId
        {
            get { return Fields.FieldMemberId[this]; }
            set { Fields.FieldMemberId[this] = value; }
        }

        [DisplayName("Look Up Name"), Expression("jLookUp.[Name]")]
        public String LookUpName
        {
            get { return Fields.LookUpName[this]; }
            set { Fields.LookUpName[this] = value; }
        }

        [DisplayName("Look Up Look Up Query"), Expression("jLookUp.[LookUpQuery]")]
        public String LookUpLookUpQuery
        {
            get { return Fields.LookUpLookUpQuery[this]; }
            set { Fields.LookUpLookUpQuery[this] = value; }
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

        [DisplayName("Field Member Bs Id"), Expression("jFieldMember.[BsId]")]
        public Int32? FieldMemberBsId
        {
            get { return Fields.FieldMemberBsId[this]; }
            set { Fields.FieldMemberBsId[this] = value; }
        }

        [DisplayName("Field Member Name"), Expression("jFieldMember.[Name]")]
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
            get { return Fields.BsLookupId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public BaseQryLookUpRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field BsLookupId;
            public Int32Field LookUpId;
            public Int32Field BsId;
            public Int32Field FieldMemberId;

            public StringField LookUpName;
            public StringField LookUpLookUpQuery;

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
