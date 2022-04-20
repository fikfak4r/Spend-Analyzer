
namespace SmoothData.BusinessObjects.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.PdQueryRow))]
    public class PdQueryController : Controller
    {
        [Route("BusinessObjects/PdQuery")]
        public ActionResult Index()
        {
            return View("~/Modules/BusinessObjects/PdQuery/PdQueryIndex.cshtml");
        }
    }
}