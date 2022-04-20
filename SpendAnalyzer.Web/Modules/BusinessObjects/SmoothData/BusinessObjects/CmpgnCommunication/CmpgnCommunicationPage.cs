
namespace SmoothData.BusinessObjects.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.CmpgnCommunicationRow))]
    public class CmpgnCommunicationController : Controller
    {
        [Route("BusinessObjects/CmpgnCommunication")]
        public ActionResult Index()
        {
            return View("~/Modules/BusinessObjects/CmpgnCommunication/CmpgnCommunicationIndex.cshtml");
        }
    }
}