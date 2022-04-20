using System;
using System.Collections.Generic;

namespace SmoothData.Web.Modules.BusinessObjects.Models
{
    public partial class CustomerDetail
    {
        public int CustomerId { get; set; }
        public string FullName { get; set; }
        public string Sex { get; set; }
        public string Address { get; set; }
    }
}
