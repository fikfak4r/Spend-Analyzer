
namespace SmoothData.BusinessObjects.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.FieldListRow))]
    public class FieldListController : Controller
    {
        [Route("BusinessObjects/FieldList")]
        public ActionResult Index()
        {
            return View("~/Modules/BusinessObjects/FieldList/FieldListIndex.cshtml");
        }
    }
}