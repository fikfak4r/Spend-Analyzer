using System;
using System.Collections.Generic;

namespace SmoothData.Web.Modules.BusinessObjects.Models
{
    public partial class UserPreferences
    {
        public int UserPreferenceId { get; set; }
        public long UserId { get; set; }
        public string PreferenceType { get; set; }
        public string Name { get; set; }
        public string Value { get; set; }
    }
}
