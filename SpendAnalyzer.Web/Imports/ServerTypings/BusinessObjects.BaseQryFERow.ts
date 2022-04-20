namespace SmoothData.BusinessObjects {
    export interface BaseQryFERow {
        field?: string;
        label?: string;
        type?: string;
        CategoryId?: number;
        CategoryCategoryName?: string;
    }

    export namespace BaseQryFERow {
        export const idProperty = 'label';
        export const nameProperty = 'label';
        export const localTextPrefix = 'BusinessObjects.BaseQryFE';
        export const lookupKey = 'BusinessObjects.BaseQryFE';

        export function getLookup(): Q.Lookup<BaseQryFERow> {
            return Q.getLookup<BaseQryFERow>('BusinessObjects.BaseQryFE');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            field = "field",
            label = "label",
            type = "type",
            CategoryId = "CategoryId",
            CategoryCategoryName = "CategoryCategoryName"
        }
    }
}
