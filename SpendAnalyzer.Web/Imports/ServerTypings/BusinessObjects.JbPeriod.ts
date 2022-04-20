namespace SmoothData.BusinessObjects {
    export enum JbPeriod {
        Daily = 1,
        Weekly = 2,
        Monthly = 3
    }
    Serenity.Decorators.registerEnumType(JbPeriod, 'SmoothData.BusinessObjects.JbPeriod', 'BusinessObjects.JbPeriod');
}
