
namespace SmoothData.BusinessObjects.Endpoints
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System.Data;
    using Microsoft.AspNetCore.Mvc;
    using MyRepository = Repositories.LookUpRepository;
    using MyRow = Entities.LookUpRow;
    using SmoothDataProcessor;
    using System.Threading.Tasks;
    using SmoothData.BusinessObjects.Entities;
    using Dapper;
    using Microsoft.AspNetCore.Mvc.RazorPages;
    using System.Threading;
    using Newtonsoft.Json;

    [Route("Services/BusinessObjects/LookUp/[action]")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class LookUpController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MyRepository().Create(uow, request);
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MyRepository().Update(uow, request);
        }

        [HttpPost, AuthorizeDelete(typeof(MyRow))]
        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyRepository().Delete(uow, request);
        }

        [HttpPost]
        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRepository().Retrieve(connection, request);
        }

        [HttpPost]
        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyRepository().List(connection, request);
        }




        LookUpRow lur;
        public async System.Threading.Tasks.Task<string> ProcessRequest(RetrieveRequest request)
        {

            //Thread.Sleep(10000);


            using (var conn = SqlConnections.NewFor<LookUpRow>())
            {

                lur = conn.QueryFirstOrDefault<LookUpRow>(string.Format("SELECT * FROM LookUps WHERE LookUpId = {0}", request.EntityId));
            }
            // return request.EntityId.ToString();


            SmoothDataProcessor.DataClientGeneratorSoapClient dcgsc = new SmoothDataProcessor.DataClientGeneratorSoapClient(SmoothDataProcessor.DataClientGeneratorSoapClient.EndpointConfiguration.DataClientGeneratorSoap, "http://localhost:55510/DataClientGenerator.asmx");
            SmoothDataProcessor.GetLookUpResponse response = await dcgsc.GetLookUpAsync(lur.LookUpQuery);


            return response.Body.GetLookUpResult;

        }

       
    

    
    }
}
