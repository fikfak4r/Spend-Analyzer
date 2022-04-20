using System;
using System.Collections.Generic;

namespace SmoothData.Web.Modules.BusinessObjects.Models
{
    public partial class UserRoles
    {
        public long UserRoleId { get; set; }
        public int UserId { get; set; }
        public int RoleId { get; set; }

        public Roles Role { get; set; }
        public Users User { get; set; }
    }
}
