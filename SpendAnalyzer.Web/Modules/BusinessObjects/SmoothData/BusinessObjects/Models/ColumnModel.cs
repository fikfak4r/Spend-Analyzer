using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SmoothData.Web.Modules.BusinessObjects.Models
{
    public class ColumnModel
    {
        //                    field: 'Root', label: 'Root', type: 'string', operators: [{ key: 'Equal', value: 'equal' }],

        public string Field { get; set; }

        public string Label { get; set; }

        public string Type { get; set; }

        public List<Operator> Operators { get; set; }


        public class Operator
        {
            public string key { get; set; }
            public string value { get; set; }
        }

    }

  

}
