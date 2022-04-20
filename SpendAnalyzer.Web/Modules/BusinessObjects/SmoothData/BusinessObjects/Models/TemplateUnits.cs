using System;
using System.Collections.Generic;

namespace SmoothData.Web.Modules.BusinessObjects.Models
{
    public partial class TemplateUnits
    {
        public TemplateUnits()
        {
            InverseParentUnit = new HashSet<TemplateUnits>();
        }

        public int UnitId { get; set; }
        public int BaseUnitId { get; set; }
        public int? ParentUnitId { get; set; }
        public int? BaseUnitRelationFieldId { get; set; }
        public int? ParentUnitRelationId { get; set; }

        public BaseQry BaseUnit { get; set; }
        public FieldList BaseUnitRelationField { get; set; }
        public TemplateUnits ParentUnit { get; set; }
        public FieldList ParentUnitRelation { get; set; }
        public ICollection<TemplateUnits> InverseParentUnit { get; set; }
    }
}
