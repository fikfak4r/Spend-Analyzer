using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Serenity.Data;
using Serenity.Web;
using Serenity;
using Serenity.ComponentModel;
using SmoothData.BusinessObjects.Entities;

namespace SmoothData.BusinessObjects.Lookups
{
    [LookupScript("Administration.BaseQryLookup", Permission = "?")]
    public class BaseQryLookup : RowLookupScript<Entities.BaseQryRow>
    {

        public BaseQryLookup()
        {
            IdField = Entities.BaseQryRow.Fields.BsId.PropertyName;
            TextField = Entities.BaseQryRow.Fields.TemplateName.PropertyName;
            Expiration = TimeSpan.FromDays(-1);
        }



        protected override void PrepareQuery(SqlQuery query)
        {

            base.PrepareQuery(query);


            var bqr = Entities.BaseQryRow.Fields;
            var user = (SpendAnalyzer.UserDefinition)Authorization.UserDefinition;

            query
                .Where(new Criteria(bqr.IsAutoGen) == 0);
        }


    }

}