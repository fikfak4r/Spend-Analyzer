namespace SmoothData.BusinessObjects {
    export interface BaseQryForm {
        ParentId: Serenity.StringEditor;
        TemplateName: Serenity.StringEditor;
        CategoryId: Serenity.LookupEditor;
        RunTimeTableName: Serenity.StringEditor;
        RltdColumns: Serenity.StringEditor;
        DfltVl: Serenity.StringEditor;
    }

    export class BaseQryForm extends Serenity.PrefixedContext {
        static formKey = 'BusinessObjects.BaseQry';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!BaseQryForm.init)  {
                BaseQryForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;

                Q.initFormType(BaseQryForm, [
                    'ParentId', w0,
                    'TemplateName', w0,
                    'CategoryId', w1,
                    'RunTimeTableName', w0,
                    'RltdColumns', w0,
                    'DfltVl', w0
                ]);
            }
        }
    }
}
