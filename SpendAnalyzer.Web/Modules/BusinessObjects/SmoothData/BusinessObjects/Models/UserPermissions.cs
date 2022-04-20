using System;
using System.Collections.Generic;

namespace SmoothData.Web.Modules.BusinessObjects.Models
{
    public partial class UserPermissions
    {
        public long UserPermissionId { get; set; }
        public int UserId { get; set; }
        public string PermissionKey { get; set; }
        public bool? Granted { get; set; }

        public Users User { get; set; }
    }
}
