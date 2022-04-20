using System;
using System.Collections.Generic;
using Newtonsoft.Json;

namespace SmoothData.Web.Modules.BusinessObjects.Models
{
    public partial class BaseQry
    {
        public BaseQry()
        {

            BaseQryLookUp = new HashSet<BaseQryLookUp>();
            DerivedQry = new HashSet<DerivedQry>();
            FactsDimensions = new HashSet<FactsDimensions>();
            FieldListNavigation = new HashSet<FieldList>();
            TemplateUnits = new HashSet<TemplateUnits>();
            Variable = new HashSet<Variable>();

        }

        public int BsId { get; set; }
        public string ParentId { get; set; }
        public string TemplateName { get; set; }
        public int? CategoryId { get; set; }
        public string FieldList { get; set; }
        public string RunTimeTableName { get; set; }
        public string Params { get; set; }
        public string RltdColumns { get; set; }
        public string DfltVl { get; set; }
        

        public Category Category { get; set; }
        [JsonIgnore]
        public ICollection<BaseQryLookUp> BaseQryLookUp { get; set; }
        [JsonIgnore]
        public ICollection<DerivedQry> DerivedQry { get; set; }
        [JsonIgnore]
        public ICollection<FactsDimensions> FactsDimensions { get; set; }
        public ICollection<FieldList> FieldListNavigation { get; set; }
        [JsonIgnore]
        public ICollection<TemplateUnits> TemplateUnits { get; set; }
        [JsonIgnore]
        public ICollection<Variable> Variable { get; set; }
    }
}
