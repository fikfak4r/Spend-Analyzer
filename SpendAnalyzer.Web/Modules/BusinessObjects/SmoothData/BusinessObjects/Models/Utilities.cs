using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SmoothData.BusinessObjects;

namespace SmoothData.Web.Modules.BusinessObjects.Models
{
    public class Utilities
    {
        public static string GetDataType(int val)
        {
            string str = "";
            string str1 = val.ToString();

            if ((int)FieldDataType.Date == val)
            {
                str = "date";
            }
            else if ((int)FieldDataType.nVarchar == val)
                str = "string";
            else if ((int)FieldDataType.Number == val)
                str = "number";
            else
                str = "string";

      
            return str;
        }
    }
}
