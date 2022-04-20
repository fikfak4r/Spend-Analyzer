
namespace SmoothData.BusinessObjects.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.LookUpRow))]
    public class LookUpController : Controller
    {
        [Route("BusinessObjects/LookUp")]
        public ActionResult Index()
        {
            return View("~/Modules/BusinessObjects/LookUp/LookUpIndex.cshtml");
        }
    }
}