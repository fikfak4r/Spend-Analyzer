namespace SmoothData.BusinessObjects {
    export interface BaseQryRow {
        BsId?: number;
        ParentId?: string;
        TemplateName?: string;
        CategoryId?: number;
        FieldList?: string;
        RunTimeTableName?: string;
        Params?: string;
        RltdColumns?: string;
        DfltVl?: string;
        CategoryCategoryName?: string;
    }

    export namespace BaseQryRow {
        export const idProperty = 'BsId';
        export const nameProperty = 'TemplateName';
        export const localTextPrefix = 'BusinessObjects.BaseQry';
        export const lookupKey = 'BusinessObjects.BaseQry';

        export function getLookup(): Q.Lookup<BaseQryRow> {
            return Q.getLookup<BaseQryRow>('BusinessObjects.BaseQry');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            BsId = "BsId",
            ParentId = "ParentId",
            TemplateName = "TemplateName",
            CategoryId = "CategoryId",
            FieldList = "FieldList",
            RunTimeTableName = "RunTimeTableName",
            Params = "Params",
            RltdColumns = "RltdColumns",
            DfltVl = "DfltVl",
            CategoryCategoryName = "CategoryCategoryName"
        }
    }
}
