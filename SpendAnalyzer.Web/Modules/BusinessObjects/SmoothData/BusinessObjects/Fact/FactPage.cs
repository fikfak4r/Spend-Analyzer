
namespace SmoothData.BusinessObjects.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.FactRow))]
    public class FactController : Controller
    {
        [Route("BusinessObjects/Fact")]
        public ActionResult Index()
        {
            return View("~/Modules/BusinessObjects/Fact/FactIndex.cshtml");
        }
    }
}