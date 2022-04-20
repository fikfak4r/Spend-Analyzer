using System;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using SmoothData.BusinessObjects;
using OfficeOpenXml.FormulaParsing.Excel.Functions.RefAndLookup;

namespace SmoothData.Web.Modules.BusinessObjects.Models
{
    public partial class FieldList
    {

        public FieldList()
        {
            BaseQryLookUp = new HashSet<BaseQryLookUp>();
            FactsDimensions = new HashSet<FactsDimensions>();
            TemplateUnitsBaseUnitRelationField = new HashSet<TemplateUnits>();
            TemplateUnitsParentUnitRelation = new HashSet<TemplateUnits>();
            LookUp = new HashSet<LookUps>();
        }

        [JsonIgnore]
        public int FieldMemberId { get; set; }
        [JsonIgnore]
        public int BsId { get; set; }
        [JsonProperty("label")]
        public string Name { get; set; }

        [NotMapped]
        public string field { get { return Name; } set { value = Name; } }

        [NotMapped]
        public string type { get { return Utilities.GetDataType(DataType.HasValue ? (int)DataType.Value : -1 ); } set { value = ""; } }

        //[NotMapped]
        //public Operators[] operators { get { return new Operators[2] {
        //    new Operators() { key = "Equal", value = "equal" },
        //new Operators() { key = "Between", value = "between" }
        //}; } }


        public int? LookUpId { get; set; }

        [NotMapped]
        public string format { get { return Utilities.GetDataType(DataType.HasValue ? (int)DataType.Value : -1) == "date" ? "yyyy-MM-dd" : ""; } set { value = ""; } }

        [JsonIgnore]
        public byte? DataType { get; set; }
        [JsonIgnore]
        public int? Size { get; set; }

        [JsonIgnore]
        public BaseQry Bs { get; set; }
        [JsonIgnore]
        public ICollection<BaseQryLookUp> BaseQryLookUp { get; set; }
        [JsonIgnore]
        public ICollection<FactsDimensions> FactsDimensions { get; set; }
        [JsonIgnore]
        public ICollection<TemplateUnits> TemplateUnitsBaseUnitRelationField { get; set; }
        [JsonIgnore]
        public ICollection<TemplateUnits> TemplateUnitsParentUnitRelation { get; set; }

        [JsonIgnore]
        public ICollection<LookUps> LookUp { get; set; }
    }
}
