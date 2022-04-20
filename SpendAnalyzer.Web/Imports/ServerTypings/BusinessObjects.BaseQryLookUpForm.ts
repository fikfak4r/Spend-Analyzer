
namespace SmoothData.BusinessObjects {
    export class BaseQryLookUpForm extends Serenity.PrefixedContext {
        static formKey = 'BusinessObjects.BaseQryLookUp';
    }

    export interface BaseQryLookUpForm {
        LookUpId: Serenity.IntegerEditor;
        BsId: Serenity.IntegerEditor;
        FieldMemberId: Serenity.IntegerEditor;
    }

    [,
        ['LookUpId', () => Serenity.IntegerEditor],
        ['BsId', () => Serenity.IntegerEditor],
        ['FieldMemberId', () => Serenity.IntegerEditor]
    ].forEach(x => Object.defineProperty(BaseQryLookUpForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}