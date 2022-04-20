
namespace SmoothData.BusinessObjects.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.CmpgnCollateralRow))]
    public class CmpgnCollateralController : Controller
    {
        [Route("BusinessObjects/CmpgnCollateral")]
        public ActionResult Index()
        {
            return View("~/Modules/BusinessObjects/CmpgnCollateral/CmpgnCollateralIndex.cshtml");
        }
    }
}