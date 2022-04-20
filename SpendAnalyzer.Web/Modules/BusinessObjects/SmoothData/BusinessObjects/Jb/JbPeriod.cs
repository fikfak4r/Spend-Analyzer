using Serenity.ComponentModel;
using System.ComponentModel;

namespace SmoothData.BusinessObjects
{
    [EnumKey("BusinessObjects.JbPeriod")]
    public enum JbPeriod
    {
        [Description("Daily")]
        Daily = 1,

        [Description("Weekly")]
        Weekly = 2,

        [Description("Monthly")]
        Monthly = 3,

      

    }
}
