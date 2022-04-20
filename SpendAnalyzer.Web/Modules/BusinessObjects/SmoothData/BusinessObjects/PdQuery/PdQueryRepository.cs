﻿
namespace SmoothData.BusinessObjects.Repositories
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using MyRow = Entities.PdQueryRow;

    public class PdQueryRepository
    {
        private static MyRow.RowFields fld { get { return MyRow.Fields; } }

        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler().Process(uow, request, SaveRequestType.Create);
        }

        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler().Process(uow, request, SaveRequestType.Update);
        }

        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyDeleteHandler().Process(uow, request);
        }

        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRetrieveHandler().Process(connection, request);
        }

        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyListHandler().Process(connection, request);
        }

        private class MySaveHandler : SaveRequestHandler<MyRow> {

            protected override void SetInternalFields()
            {
                base.SetInternalFields();
                int userId = ((SpendAnalyzer.UserDefinition)Authorization.UserDefinition).UserId;
                if (IsCreate)
                {
                    Row.CreatedBy = userId;
                    Row.CreatedDate = DateTime.Now;
                }

                if (IsUpdate)
                {
                    Row.LastModifiedBy = userId;
                    Row.LastModifiedDate = DateTime.Now;
                }
            }

        }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
        private class MyListHandler : ListRequestHandler<MyRow> { }

        public GetNextNumberResponse GetNextNumber(IDbConnection connection, BusinessObjects.GetNextNumberRequest request)
        {
            return Utilities.GetNextNumberHelper.GetNextNumber(connection, request);
        }


    }
}