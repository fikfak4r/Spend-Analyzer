
namespace SmoothData.BusinessObjects.Forms
{

    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;


    [FormScript("BusinessObjects.BaseQry")]
    [BasedOnRow(typeof(Entities.BaseQryRow), CheckNames = true)]
    public class BaseQryForm
    { 
  
        public String ParentId { get; set; }
        public String TemplateName { get; set; }
        public Int32 CategoryId { get; set; }
        //public String FieldList { get; set; }
        public String RunTimeTableName { get; set; }
        //public String Params { get; set; }
        public String RltdColumns { get; set; }
        public String DfltVl { get; set; }
    }
}