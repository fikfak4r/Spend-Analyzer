namespace SpendAnalyzer.BusinessObjects.Entities
{
    using Newtonsoft.Json;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    //[ConnectionKey("Default"), DisplayName("Banks"), InstanceName("Banks"), TwoLevelCached]
    [ReadPermission(BusinessObjects.PermissionKeys.Bank.Read)]
    //[InsertPermission(BusinessObjects.PermissionKeys.Bank.Insert)]
    //[UpdatePermission(BusinessObjects.PermissionKeys.Bank.Update)]
    //[DeletePermission(BusinessObjects.PermissionKeys.Bank.Delete)]
    //[LookupScript("BusinessObjects.Bank")]
    public sealed class DummySpendDashboardRow : Row, IIdRow, INameRow
    {

        public DummySpendDashboardRow():base(Fields)
 
        {
        }
        IIdField IIdRow.IdField => throw new NotImplementedException();

        StringField INameRow.NameField => throw new NotImplementedException();

        public static readonly RowFields Fields = new RowFields().Init();

        public partial class RowFields : RowFieldsBase
        {
            public RowFields()
            : base("[dbo].[Banks]")
            {
                LocalTextPrefix = "BusinessObjects.Bank";
            }
        }

    }
}