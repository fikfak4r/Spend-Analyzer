using System;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace SmoothData.Web.Modules.BusinessObjects.Models
{
    public partial class Category
    {
        public Category()
        {
            BaseQry = new HashSet<BaseQry>();
        }

        [JsonIgnore]
        public int CategoryId { get; set; }
        [JsonIgnore]
        public string CategoryName { get; set; }

        [NotMapped]
        public string field { get { return CategoryName; } }

        [NotMapped]
        public string fieldValue { get { return CategoryName.Replace(" ", ""); } }

        [NotMapped]
        public string label { get { return CategoryName; } }

        [NotMapped]
        public Operators[] operators { get { return new Operators[1] { new Operators() { key = "Equal", value = "equal" } }; } }

        [JsonIgnore]
        public ICollection<BaseQry> BaseQry { get; set; }
    }
}
