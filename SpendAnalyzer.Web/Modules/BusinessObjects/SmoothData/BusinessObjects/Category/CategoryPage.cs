
namespace SmoothData.BusinessObjects.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.CategoryRow))]
    public class CategoryController : Controller
    {
        [Route("BusinessObjects/Category")]
        public ActionResult Index()
        {
            return View("~/Modules/BusinessObjects/Category/CategoryIndex.cshtml");
        }
    }
}