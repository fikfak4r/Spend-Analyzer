using Serenity.ComponentModel;
using System.ComponentModel;

namespace SmoothData.BusinessObjects
{
    [EnumKey("BusinessObjects.FieldDataType")]
    public enum FieldDataType
    {
        [Description("Varchar")]
        Varchar = 1,

        [Description("nVarchar")]
        nVarchar = 2,

        [Description("Date")]
        Date = 3,

        [Description("DateTime")]
        DateTime = 4,

        [Description("Number")]
        Number = 5

    }
}
