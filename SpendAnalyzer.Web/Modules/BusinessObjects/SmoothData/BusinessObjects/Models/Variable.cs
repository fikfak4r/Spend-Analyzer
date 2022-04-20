using System;
using System.Collections.Generic;

namespace SmoothData.Web.Modules.BusinessObjects.Models
{
    public partial class Variable
    {
        public int VariableId { get; set; }
        public string Name { get; set; }
        public byte? DataType { get; set; }
        public int? BaseId { get; set; }

        public BaseQry Base { get; set; }
    }
}
