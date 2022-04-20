
namespace SmoothData.BusinessObjects.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.BaseQryRow))]
    public class BaseQryController : Controller
    {
        [Route("BusinessObjects/BaseQry")]
        public ActionResult Index()
        {
            return View("~/Modules/BusinessObjects/BaseQry/BaseQryIndex.cshtml");
        } 
    }
}