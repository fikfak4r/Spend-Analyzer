
namespace SmoothData.BusinessObjects.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.VariableRow))]
    public class VariableController : Controller
    {
        [Route("BusinessObjects/Variable")]
        public ActionResult Index()
        {
            return View("~/Modules/BusinessObjects/Variable/VariableIndex.cshtml");
        }
    }
}