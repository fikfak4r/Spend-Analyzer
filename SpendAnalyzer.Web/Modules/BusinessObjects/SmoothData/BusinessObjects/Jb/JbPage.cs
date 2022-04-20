
namespace SmoothData.BusinessObjects.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.JbRow))]
    public class JbController : Controller
    {
        [Route("BusinessObjects/Jb")]
        public ActionResult Index()
        {
            return View("~/Modules/BusinessObjects/Jb/JbIndex.cshtml");
        }
    }
}