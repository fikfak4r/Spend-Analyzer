using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace SmoothData.BusinessObjects
{
    public partial class EditTimeEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "SmoothData.BusinessObjects.EditTimeEditor";

        public EditTimeEditorAttribute()
            : base(Key)
        {
        }

        public Boolean ShowSeconds
        {
            get { return GetOption<Boolean>("showSeconds"); }
            set { SetOption("showSeconds", value); }
        }
    }
}
