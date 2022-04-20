
namespace SmoothData.BusinessObjects.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.CmpgnSegmentRow))]
    public class CmpgnSegmentController : Controller
    {
        [Route("BusinessObjects/CmpgnSegment")]
        public ActionResult Index()
        {
            return View("~/Modules/BusinessObjects/CmpgnSegment/CmpgnSegmentIndex.cshtml");
        }
    }
}