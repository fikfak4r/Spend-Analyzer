
namespace SmoothData.BusinessObjects.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.BaseQryLookUpRow))]
    public class BaseQryLookUpController : Controller
    {
        [Route("BusinessObjects/BaseQryLookUp")]
        public ActionResult Index()
        {
            return View("~/Modules/BusinessObjects/BaseQryLookUp/BaseQryLookUpIndex.cshtml");
        }
    }
}