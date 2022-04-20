
namespace SmoothData.BusinessObjects.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.CustomerDetailRow))]
    public class CustomerDetailController : Controller
    {
        [Route("BusinessObjects/CustomerDetail")]
        public ActionResult Index()
        {
            return View("~/Modules/BusinessObjects/CustomerDetail/CustomerDetailIndex.cshtml");
        }
    }
}