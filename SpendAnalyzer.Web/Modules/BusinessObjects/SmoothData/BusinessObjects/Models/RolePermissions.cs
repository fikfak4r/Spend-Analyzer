using System;
using System.Collections.Generic;

namespace SmoothData.Web.Modules.BusinessObjects.Models
{
    public partial class RolePermissions
    {
        public long RolePermissionId { get; set; }
        public int RoleId { get; set; }
        public string PermissionKey { get; set; }

        public Roles Role { get; set; }
    }
}
