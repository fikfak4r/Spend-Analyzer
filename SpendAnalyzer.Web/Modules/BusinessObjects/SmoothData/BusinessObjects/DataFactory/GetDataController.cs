using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;


namespace BusinessObjects.DataFactory.Pages
{


    public class GetDataController : Controller
    {
        [Route("BusinessObjects/GetData")]
        public IActionResult Index()
        {
            return View();
        }


        [Route("BusinessObjects/GetData2")]
        public IActionResult Index2()
        {
            return View("~/Views/GetData2/Index.cshtml");
        }


    }
}