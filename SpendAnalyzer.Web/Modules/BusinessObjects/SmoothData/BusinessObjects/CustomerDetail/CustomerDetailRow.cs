
namespace SmoothData.BusinessObjects.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("BusinessObjects"), TableName("[dbo].[CustomerDetail]")]
    [DisplayName("Customer Detail"), InstanceName("Customer Detail")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class CustomerDetailRow : Row, IIdRow, INameRow
    {
        [DisplayName("Customer Id"), PrimaryKey]
        public Int32? CustomerId
        {
            get { return Fields.CustomerId[this]; }
            set { Fields.CustomerId[this] = value; }
        }

        [DisplayName("Full Name"), Column("Full_Name"), Size(50), QuickSearch]
        public String FullName
        {
            get { return Fields.FullName[this]; }
            set { Fields.FullName[this] = value; }
        }

        [DisplayName("Sex"), Size(5)]
        public String Sex
        {
            get { return Fields.Sex[this]; }
            set { Fields.Sex[this] = value; }
        }

        [DisplayName("Address"), Size(5000)]
        public String Address
        {
            get { return Fields.Address[this]; }
            set { Fields.Address[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.CustomerId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.FullName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CustomerDetailRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field CustomerId;
            public StringField FullName;
            public StringField Sex;
            public StringField Address;
        }
    }
}
