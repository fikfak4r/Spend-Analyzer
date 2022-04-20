using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace SmoothData.BusinessObjects
{
    public partial class TemplateUnitEditorAttribute : LookupEditorBaseAttribute
    {
        public const string Key = "SmoothData.BusinessObjects.TemplateUnitEditor";

        public TemplateUnitEditorAttribute()
            : base(Key)
        {
        }
    }
}
