
namespace SmoothData.BusinessObjects.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.TemplateUnitRow))]
    public class TemplateUnitController : Controller
    {
        [Route("BusinessObjects/TemplateUnit")]
        public ActionResult Index()
        {
            return View("~/Modules/BusinessObjects/TemplateUnit/TemplateUnitIndex.cshtml");
        }
    }
}