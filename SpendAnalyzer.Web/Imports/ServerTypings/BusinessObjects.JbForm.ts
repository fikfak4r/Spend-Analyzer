
namespace SmoothData.BusinessObjects {
    export class JbForm extends Serenity.PrefixedContext {
        static formKey = 'BusinessObjects.Jb';
    }

    export interface JbForm {
        Name: Serenity.StringEditor;
        PckgId: Serenity.IntegerEditor;
        CreatedBy: Serenity.IntegerEditor;
        LastModifiedDate: Serenity.DateEditor;
        ModifiedBy: Serenity.IntegerEditor;
        LastRunDate: Serenity.DateEditor;
        Status: Serenity.StringEditor;
        KeepHistory: Serenity.BooleanEditor;
        Period: Serenity.IntegerEditor;
        RunTime: Serenity.StringEditor;
        FromDate: Serenity.DateEditor;
        ToDate: Serenity.DateEditor;
        Monday: Serenity.BooleanEditor;
        Tuesday: Serenity.BooleanEditor;
        Wednesday: Serenity.BooleanEditor;
        Thursday: Serenity.BooleanEditor;
        Friday: Serenity.BooleanEditor;
        Saturday: Serenity.BooleanEditor;
        Sunday: Serenity.BooleanEditor;
    }

    [,
        ['Name', () => Serenity.StringEditor],
        ['PckgId', () => Serenity.IntegerEditor],
        ['CreatedBy', () => Serenity.IntegerEditor],
        ['LastModifiedDate', () => Serenity.DateEditor],
        ['ModifiedBy', () => Serenity.IntegerEditor],
        ['LastRunDate', () => Serenity.DateEditor],
        ['Status', () => Serenity.StringEditor],
        ['KeepHistory', () => Serenity.BooleanEditor],
        ['Period', () => Serenity.IntegerEditor],
        ['RunTime', () => Serenity.StringEditor],
        ['FromDate', () => Serenity.DateEditor],
        ['ToDate', () => Serenity.DateEditor],
        ['Monday', () => Serenity.BooleanEditor],
        ['Tuesday', () => Serenity.BooleanEditor],
        ['Wednesday', () => Serenity.BooleanEditor],
        ['Thursday', () => Serenity.BooleanEditor],
        ['Friday', () => Serenity.BooleanEditor],
        ['Saturday', () => Serenity.BooleanEditor],
        ['Sunday', () => Serenity.BooleanEditor]
    ].forEach(x => Object.defineProperty(JbForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}