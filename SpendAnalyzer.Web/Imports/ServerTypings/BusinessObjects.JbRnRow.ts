
namespace SmoothData.BusinessObjects {
    export interface JbRnRow {
        JbRnId?: number;
        JbId?: number;
        Date?: string;
        Repository?: string;
        JbName?: string;
        JbPckgId?: number;
        JbCreatedBy?: number;
        JbLastModifiedDate?: string;
        JbModifiedBy?: number;
        JbLastRunDate?: string;
        JbStatus?: string;
        JbKeepHistory?: boolean;
        JbPeriod?: number;
        JbRunTime?: string;
        JbFromDate?: string;
        JbToDate?: string;
        JbMonday?: boolean;
        JbTuesday?: boolean;
        JbWednesday?: boolean;
        JbThursday?: boolean;
        JbFriday?: boolean;
        JbSaturday?: boolean;
        JbSunday?: boolean;
    }

    export namespace JbRnRow {
        export const idProperty = 'JbRnId';
        export const nameProperty = 'Repository';
        export const localTextPrefix = 'BusinessObjects.JbRn';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export namespace Fields {
            export declare const JbRnId;
            export declare const JbId;
            export declare const Date;
            export declare const Repository;
            export declare const JbName;
            export declare const JbPckgId;
            export declare const JbCreatedBy;
            export declare const JbLastModifiedDate;
            export declare const JbModifiedBy;
            export declare const JbLastRunDate;
            export declare const JbStatus;
            export declare const JbKeepHistory;
            export declare const JbPeriod;
            export declare const JbRunTime;
            export declare const JbFromDate;
            export declare const JbToDate;
            export declare const JbMonday;
            export declare const JbTuesday;
            export declare const JbWednesday;
            export declare const JbThursday;
            export declare const JbFriday;
            export declare const JbSaturday;
            export declare const JbSunday;
        }

        [
            'JbRnId',
            'JbId',
            'Date',
            'Repository',
            'JbName',
            'JbPckgId',
            'JbCreatedBy',
            'JbLastModifiedDate',
            'JbModifiedBy',
            'JbLastRunDate',
            'JbStatus',
            'JbKeepHistory',
            'JbPeriod',
            'JbRunTime',
            'JbFromDate',
            'JbToDate',
            'JbMonday',
            'JbTuesday',
            'JbWednesday',
            'JbThursday',
            'JbFriday',
            'JbSaturday',
            'JbSunday'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}