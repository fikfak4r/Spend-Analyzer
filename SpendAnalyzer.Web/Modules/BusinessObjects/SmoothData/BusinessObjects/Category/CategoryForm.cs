
namespace SmoothData.BusinessObjects.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("BusinessObjects.Category")]
    [BasedOnRow(typeof(Entities.CategoryRow), CheckNames = true)]
    public class CategoryForm
    {
        public String CategoryName { get; set; }
    }
}