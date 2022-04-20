using System;
using System.Collections.Generic;

namespace SmoothData.Web.Modules.BusinessObjects.Models
{
    public partial class DerivedQry
    {
        public int DrvdId { get; set; }
        public int? BsId { get; set; }
        public string Params { get; set; }
        public string QryTemplate { get; set; }

        public BaseQry Bs { get; set; }
    }
}
