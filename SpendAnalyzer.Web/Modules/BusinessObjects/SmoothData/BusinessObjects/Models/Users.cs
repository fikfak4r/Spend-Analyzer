using System;
using System.Collections.Generic;

namespace SmoothData.Web.Modules.BusinessObjects.Models
{
    public partial class Users
    {
        public Users()
        {
            UserPermissions = new HashSet<UserPermissions>();
            UserRoles = new HashSet<UserRoles>();
        }

        public int UserId { get; set; }
        public string Username { get; set; }
        public string DisplayName { get; set; }
        public string Email { get; set; }
        public string Source { get; set; }
        public string PasswordHash { get; set; }
        public string PasswordSalt { get; set; }
        public DateTime? LastDirectoryUpdate { get; set; }
        public string UserImage { get; set; }
        public DateTime InsertDate { get; set; }
        public int InsertUserId { get; set; }
        public DateTime? UpdateDate { get; set; }
        public int? UpdateUserId { get; set; }
        public short IsActive { get; set; }

        public ICollection<UserPermissions> UserPermissions { get; set; }
        public ICollection<UserRoles> UserRoles { get; set; }
    }
}
