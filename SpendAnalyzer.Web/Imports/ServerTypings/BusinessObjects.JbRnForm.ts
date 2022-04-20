
namespace SmoothData.BusinessObjects {
    export class JbRnForm extends Serenity.PrefixedContext {
        static formKey = 'BusinessObjects.JbRn';
    }

    export interface JbRnForm {
        JbId: Serenity.IntegerEditor;
        Date: Serenity.DateEditor;
        Repository: Serenity.StringEditor;
    }

    [,
        ['JbId', () => Serenity.IntegerEditor],
        ['Date', () => Serenity.DateEditor],
        ['Repository', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(JbRnForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}