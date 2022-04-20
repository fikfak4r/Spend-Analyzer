using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace SpendAnalyzer.Web.Controllers
{
    public class AnalyzerController : Controller
    {
        [Route("Analyzer/[action]")]
        public IActionResult Index()
        {
            return View("~/Views/Home/Index1.cshtml");

            //return View();
        }
    }
}