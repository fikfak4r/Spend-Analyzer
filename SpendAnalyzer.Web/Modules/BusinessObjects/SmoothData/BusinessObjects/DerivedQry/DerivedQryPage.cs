
namespace SmoothData.BusinessObjects.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.DerivedQryRow))]
    public class DerivedQryController : Controller
    {
        [Route("BusinessObjects/DerivedQry")]
        public ActionResult Index()
        {
            return View("~/Modules/BusinessObjects/DerivedQry/DerivedQryIndex.cshtml");
        }
    }
}