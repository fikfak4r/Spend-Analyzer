
namespace SmoothData.BusinessObjects.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.JbRnRow))]
    public class JbRnController : Controller
    {
        [Route("BusinessObjects/JbRn")]
        public ActionResult Index()
        {
            return View("~/Modules/BusinessObjects/JbRn/JbRnIndex.cshtml");
        }
    }
}