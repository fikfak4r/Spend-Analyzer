
namespace SmoothData.BusinessObjects {
    export interface BaseQryLookUpRow {
        BsLookupId?: number;
        LookUpId?: number;
        BsId?: number;
        FieldMemberId?: number;
        LookUpName?: string;
        LookUpLookUpQuery?: string;
        BsParentId?: string;
        BsTemplateName?: string;
        BsCategoryId?: number;
        BsFieldList?: string;
        BsRunTimeTableName?: string;
        BsParams?: string;
        BsRltdColumns?: string;
        BsDfltVl?: string;
        FieldMemberBsId?: number;
        FieldMemberName?: string;
        FieldMemberDataType?: number;
        FieldMemberSize?: number;
    }

    export namespace BaseQryLookUpRow {
        export const idProperty = 'BsLookupId';
        export const localTextPrefix = 'BusinessObjects.BaseQryLookUp';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export namespace Fields {
            export declare const BsLookupId;
            export declare const LookUpId;
            export declare const BsId;
            export declare const FieldMemberId;
            export declare const LookUpName;
            export declare const LookUpLookUpQuery;
            export declare const BsParentId;
            export declare const BsTemplateName;
            export declare const BsCategoryId;
            export declare const BsFieldList;
            export declare const BsRunTimeTableName;
            export declare const BsParams;
            export declare const BsRltdColumns;
            export declare const BsDfltVl;
            export declare const FieldMemberBsId;
            export declare const FieldMemberName;
            export declare const FieldMemberDataType;
            export declare const FieldMemberSize;
        }

        [
            'BsLookupId',
            'LookUpId',
            'BsId',
            'FieldMemberId',
            'LookUpName',
            'LookUpLookUpQuery',
            'BsParentId',
            'BsTemplateName',
            'BsCategoryId',
            'BsFieldList',
            'BsRunTimeTableName',
            'BsParams',
            'BsRltdColumns',
            'BsDfltVl',
            'FieldMemberBsId',
            'FieldMemberName',
            'FieldMemberDataType',
            'FieldMemberSize'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}