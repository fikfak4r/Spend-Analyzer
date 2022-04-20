
namespace SmoothData.BusinessObjects.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.PckgRow))]
    public class PckgController : Controller
    {
        [Route("BusinessObjects/Pckg")]
        public ActionResult Index()
        {
            return View("~/Modules/BusinessObjects/Pckg/PckgIndex.cshtml");
        }
    }
}