using System;
using System.Collections.Generic;

namespace SmoothData.Web.Modules.BusinessObjects.Models
{
    public partial class Roles
    {
        public Roles()
        {
            RolePermissions = new HashSet<RolePermissions>();
            UserRoles = new HashSet<UserRoles>();
        }

        public int RoleId { get; set; }
        public string RoleName { get; set; }

        public ICollection<RolePermissions> RolePermissions { get; set; }
        public ICollection<UserRoles> UserRoles { get; set; }
    }
}
