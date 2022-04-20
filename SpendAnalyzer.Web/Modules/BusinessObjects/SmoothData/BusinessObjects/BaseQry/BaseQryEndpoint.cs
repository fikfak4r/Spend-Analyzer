
namespace SmoothData.BusinessObjects.Endpoints
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System.Data;
    using Microsoft.AspNetCore.Mvc;
    using MyRepository = Repositories.BaseQryRepository;
    using MyRow = Entities.BaseQryRow;
    using MyRowFE = Entities.BaseQryFERow;
    using System.Collections.Generic;
    using SmoothData.Web.Modules.BusinessObjects.Models;
    using System.Linq;
    using Newtonsoft.Json;
    using System.IO;
    using System.Threading.Tasks;
    using OfficeOpenXml;

    [Route("Services/BusinessObjects/BaseQry/[action]")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class BaseQryController : ServiceEndpoint
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

        [HttpPost]
        public ListResponse<MyRowFE> ListFE(IDbConnection connection, ListRequest request)
        {
            return new MyRepository().ListFE(connection, request);
        }

        //[HttpPost]
        //public ActionResult OnPostSend()
        //{
        //    List<Category> categories = new List<Category>();

        //    using (var contxt = new SmoothData_Default_v1Context())
        //    {
        //        categories = contxt.Category.ToList();

        //    }
            
        //    return new JsonResult(categories);
        //}


        [HttpPost]
        public ActionResult OnPostSend()
        {
            SmoothDataRequestObject sdro = new SmoothDataRequestObject();

     
            //using (var contxt = new SmoothData_Default_v1Context())
            //{
                
            //    sdro.ColumnsModel = contxt.Category.ToList();

            //    sdro.QueryParams = contxt.BaseQry.Select(
            //        s => new {
            //                    Category = s.Category.CategoryName.Replace(" ", ""),
            //                    Template = s.TemplateName,
            //                    fields = s.FieldListNavigation
            //                }
            //        ).ToList();

            //}

            

            return new JsonResult(sdro);
        }

        [HttpPost]
        public async System.Threading.Tasks.Task<string> ProcessRequest(SmoothDataRequestObject requestData)
       //public string ProcessRequest(string requestData)
        {

           
            //requestData.QryBldr   
            SmoothDataProcessor.DataClientGeneratorSoapClient dcgsc = new SmoothDataProcessor.DataClientGeneratorSoapClient(SmoothDataProcessor.DataClientGeneratorSoapClient.EndpointConfiguration.DataClientGeneratorSoap, "http://localhost:55510/DataClientGenerator.asmx");
            SmoothDataProcessor.ProcessDataResponse response = await dcgsc.ProcessDataAsync(JsonConvert.SerializeObject(requestData));
            //response.Body.
            //dcgsc.ProcessDataAsync("{QuerySetList:{\"condition\":\"and\",\"rules\":[{\"label\":\"Retail\",\"field\":\"Retail\",\"operator\":\"equal\",\"value\":\"dialog2_dialog-content_group0_rule0_valuekey0:Glo Customers\"}]},ParamQryBldrList:[{Id:'dialog2_dialog-content_group0_rule0_valuekey0', InputRuleParam:{\"condition\":\"and\",\"rules\":[{\"label\":\"FINACLE_HOST_ID\",\"field\":\"FINACLE_HOST_ID\",\"operator\":\"equal\",\"type\":\"string\",\"value\":\"111\"}]}},]}");

            //    var binding = new System.ServiceModel.BasicHttpBinding();
            //var endpoint = new System.ServiceModel.EndpointAddress(new System.Uri("http://server/PingService.svc"));
            //new SmoothDataProcessor.DataClientGeneratorSoapClient(binding, endpoint).ChannelFactory.CreateChannel().HelloWorldAsync(;

            //var channelFactory = new System.ServiceModel.ChannelFactory(binding, endpoint);
            //var serviceClient = channelFactory.CreateChannel();
            //var result = serviceClient.Ping("Ping");
            //channelFactory.Close();

            //return new JsonResult(requestData.QryBldr);

            return response.Body.ProcessDataResult;


        }


        [HttpPost]
        public async System.Threading.Tasks.Task<string> GetSchema(SmoothDataRequestObject requestData)
        //public string ProcessRequest(string requestData)
        {


            //requestData.QryBldr   
            SmoothDataProcessor.DataClientGeneratorSoapClient dcgsc = new SmoothDataProcessor.DataClientGeneratorSoapClient(SmoothDataProcessor.DataClientGeneratorSoapClient.EndpointConfiguration.DataClientGeneratorSoap, "http://localhost:55510/DataClientGenerator.asmx");
            SmoothDataProcessor.GetSchemaResponse response = await dcgsc.GetSchemaAsync();
            //response.Body.
            //dcgsc.ProcessDataAsync("{QuerySetList:{\"condition\":\"and\",\"rules\":[{\"label\":\"Retail\",\"field\":\"Retail\",\"operator\":\"equal\",\"value\":\"dialog2_dialog-content_group0_rule0_valuekey0:Glo Customers\"}]},ParamQryBldrList:[{Id:'dialog2_dialog-content_group0_rule0_valuekey0', InputRuleParam:{\"condition\":\"and\",\"rules\":[{\"label\":\"FINACLE_HOST_ID\",\"field\":\"FINACLE_HOST_ID\",\"operator\":\"equal\",\"type\":\"string\",\"value\":\"111\"}]}},]}");

            //    var binding = new System.ServiceModel.BasicHttpBinding();
            //var endpoint = new System.ServiceModel.EndpointAddress(new System.Uri("http://server/PingService.svc"));
            //new SmoothDataProcessor.DataClientGeneratorSoapClient(binding, endpoint).ChannelFactory.CreateChannel().HelloWorldAsync(;

            //var channelFactory = new System.ServiceModel.ChannelFactory(binding, endpoint);
            //var serviceClient = channelFactory.CreateChannel();
            //var result = serviceClient.Ping("Ping");
            //channelFactory.Close();

           //return response.Body.ToJson();

           return response.Body.GetSchemaResult;


        }






    }
}
