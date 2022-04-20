
namespace SmoothData.BusinessObjects.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.FactDimensionRow))]
    public class FactDimensionController : Controller
    {
        [Route("BusinessObjects/FactDimension")]
        public ActionResult Index()
        {
            return View("~/Modules/BusinessObjects/FactDimension/FactDimensionIndex.cshtml");
        }
    }
}