
namespace SmoothData.BusinessObjects {
    export interface JbRow {
        JbId?: number;
        Name?: string;
        PckgId?: number;
        CreatedBy?: number;
        LastModifiedDate?: string;
        ModifiedBy?: number;
        LastRunDate?: string;
        Status?: string;
        KeepHistory?: boolean;
        Period?: number;
        RunTime?: string;
        FromDate?: string;
        ToDate?: string;
        Monday?: boolean;
        Tuesday?: boolean;
        Wednesday?: boolean;
        Thursday?: boolean;
        Friday?: boolean;
        Saturday?: boolean;
        Sunday?: boolean;
        PckgName?: string;
        Pckg?: string;
        PckgDateCreated?: string;
        PckgCreatedBy?: number;
        PckgLastModifiedBy?: number;
        PckgLastModifiedDate?: string;
        PckgIsLocalCopy?: boolean;
    }

    export namespace JbRow {
        export const idProperty = 'JbId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'BusinessObjects.Jb';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export namespace Fields {
            export declare const JbId;
            export declare const Name;
            export declare const PckgId;
            export declare const CreatedBy;
            export declare const LastModifiedDate;
            export declare const ModifiedBy;
            export declare const LastRunDate;
            export declare const Status;
            export declare const KeepHistory;
            export declare const Period;
            export declare const RunTime;
            export declare const FromDate;
            export declare const ToDate;
            export declare const Monday;
            export declare const Tuesday;
            export declare const Wednesday;
            export declare const Thursday;
            export declare const Friday;
            export declare const Saturday;
            export declare const Sunday;
            export declare const PckgName;
            export declare const Pckg;
            export declare const PckgDateCreated;
            export declare const PckgCreatedBy;
            export declare const PckgLastModifiedBy;
            export declare const PckgLastModifiedDate;
            export declare const PckgIsLocalCopy;
        }

        [
            'JbId',
            'Name',
            'PckgId',
            'CreatedBy',
            'LastModifiedDate',
            'ModifiedBy',
            'LastRunDate',
            'Status',
            'KeepHistory',
            'Period',
            'RunTime',
            'FromDate',
            'ToDate',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday',
            'PckgName',
            'Pckg',
            'PckgDateCreated',
            'PckgCreatedBy',
            'PckgLastModifiedBy',
            'PckgLastModifiedDate',
            'PckgIsLocalCopy'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}