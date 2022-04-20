using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SpendAnalyzer.Web.Modules.BusinessObjects.Models;
using Newtonsoft.Json;


namespace SpendAnalyzer.Web.Controllers
{


    [Route("Home/[action]")]
    public class HomeController : Controller
    {
        public ActionResult Index()
        { 
            return View();
        } 

        [HttpPost]
        public async System.Threading.Tasks.Task<string> ProcessRequest(SmoothDataRequestObject requestData)
        //public string ProcessRequest(string requestData)
        { 
            SmoothDataProcessor.DataClientGeneratorSoapClient dcgsc = new SmoothDataProcessor.DataClientGeneratorSoapClient(SmoothDataProcessor.DataClientGeneratorSoapClient.EndpointConfiguration.DataClientGeneratorSoap, "http://localhost:55510/DataClientGenerator.asmx");
            SmoothDataProcessor.ProcessDataResponse response = await dcgsc.ProcessDataAsync(JsonConvert.SerializeObject(requestData));


            return response.Body.ProcessDataResult;

        }
    }
}
