/// <reference types="jquery" />
/// <reference types="jqueryui" />
declare namespace SpendAnalyzer.Administration {
}
declare namespace SpendAnalyzer.Administration {
    interface LanguageForm {
        LanguageId: Serenity.StringEditor;
        LanguageName: Serenity.StringEditor;
    }
    class LanguageForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SpendAnalyzer.Administration {
    interface LanguageRow {
        Id?: number;
        LanguageId?: string;
        LanguageName?: string;
    }
    namespace LanguageRow {
        const idProperty = "Id";
        const nameProperty = "LanguageName";
        const localTextPrefix = "Administration.Language";
        const lookupKey = "Administration.Language";
        function getLookup(): Q.Lookup<LanguageRow>;
        const deletePermission = "Administration:Translation";
        const insertPermission = "Administration:Translation";
        const readPermission = "Administration:Translation";
        const updatePermission = "Administration:Translation";
        const enum Fields {
            Id = "Id",
            LanguageId = "LanguageId",
            LanguageName = "LanguageName"
        }
    }
}
declare namespace SpendAnalyzer.Administration {
    namespace LanguageService {
        const baseUrl = "Administration/Language";
        function Create(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Language/Create",
            Update = "Administration/Language/Update",
            Delete = "Administration/Language/Delete",
            Retrieve = "Administration/Language/Retrieve",
            List = "Administration/Language/List"
        }
    }
}
declare namespace SpendAnalyzer.Administration {
}
declare namespace SpendAnalyzer.Administration {
}
declare namespace SpendAnalyzer.Administration {
    interface RoleForm {
        RoleName: Serenity.StringEditor;
    }
    class RoleForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SpendAnalyzer.Administration {
    interface RolePermissionListRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace SpendAnalyzer.Administration {
    interface RolePermissionListResponse extends Serenity.ListResponse<string> {
    }
}
declare namespace SpendAnalyzer.Administration {
    interface RolePermissionRow {
        RolePermissionId?: number;
        RoleId?: number;
        PermissionKey?: string;
        RoleRoleName?: string;
    }
    namespace RolePermissionRow {
        const idProperty = "RolePermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.RolePermission";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            RolePermissionId = "RolePermissionId",
            RoleId = "RoleId",
            PermissionKey = "PermissionKey",
            RoleRoleName = "RoleRoleName"
        }
    }
}
declare namespace SpendAnalyzer.Administration {
    namespace RolePermissionService {
        const baseUrl = "Administration/RolePermission";
        function Update(request: RolePermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: RolePermissionListRequest, onSuccess?: (response: RolePermissionListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/RolePermission/Update",
            List = "Administration/RolePermission/List"
        }
    }
}
declare namespace SpendAnalyzer.Administration {
    interface RolePermissionUpdateRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: string[];
    }
}
declare namespace SpendAnalyzer.Administration {
    interface RoleRow {
        RoleId?: number;
        RoleName?: string;
    }
    namespace RoleRow {
        const idProperty = "RoleId";
        const nameProperty = "RoleName";
        const localTextPrefix = "Administration.Role";
        const lookupKey = "Administration.Role";
        function getLookup(): Q.Lookup<RoleRow>;
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            RoleId = "RoleId",
            RoleName = "RoleName"
        }
    }
}
declare namespace SpendAnalyzer.Administration {
    namespace RoleService {
        const baseUrl = "Administration/Role";
        function Create(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Role/Create",
            Update = "Administration/Role/Update",
            Delete = "Administration/Role/Delete",
            Retrieve = "Administration/Role/Retrieve",
            List = "Administration/Role/List"
        }
    }
}
declare namespace SpendAnalyzer.Administration {
    interface SergenConnection {
        Key?: string;
    }
}
declare namespace SpendAnalyzer.Administration {
    interface SergenGenerateOptions {
        Row?: boolean;
        Service?: boolean;
        UI?: boolean;
    }
}
declare namespace SpendAnalyzer.Administration {
    interface SergenGenerateRequest extends Serenity.ServiceRequest {
        ConnectionKey?: string;
        Table?: SergenTable;
        GenerateOptions?: SergenGenerateOptions;
    }
}
declare namespace SpendAnalyzer.Administration {
    interface SergenListTablesRequest extends Serenity.ServiceRequest {
        ConnectionKey?: string;
    }
}
declare namespace SpendAnalyzer.Administration {
    namespace SergenService {
        const baseUrl = "Administration/Sergen";
        function ListConnections(request: Serenity.ServiceRequest, onSuccess?: (response: Serenity.ListResponse<SergenConnection>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListTables(request: SergenListTablesRequest, onSuccess?: (response: Serenity.ListResponse<SergenTable>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Generate(request: SergenGenerateRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            ListConnections = "Administration/Sergen/ListConnections",
            ListTables = "Administration/Sergen/ListTables",
            Generate = "Administration/Sergen/Generate"
        }
    }
}
declare namespace SpendAnalyzer.Administration {
    interface SergenTable {
        Tablename?: string;
        Identifier?: string;
        Module?: string;
        PermissionKey?: string;
    }
}
declare namespace SpendAnalyzer.Administration {
    interface TranslationItem {
        Key?: string;
        SourceText?: string;
        TargetText?: string;
        CustomText?: string;
    }
}
declare namespace SpendAnalyzer.Administration {
    interface TranslationListRequest extends Serenity.ListRequest {
        SourceLanguageID?: string;
        TargetLanguageID?: string;
    }
}
declare namespace SpendAnalyzer.Administration {
    namespace TranslationService {
        const baseUrl = "Administration/Translation";
        function List(request: TranslationListRequest, onSuccess?: (response: Serenity.ListResponse<TranslationItem>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: TranslationUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            List = "Administration/Translation/List",
            Update = "Administration/Translation/Update"
        }
    }
}
declare namespace SpendAnalyzer.Administration {
    interface TranslationUpdateRequest extends Serenity.ServiceRequest {
        TargetLanguageID?: string;
        Translations?: {
            [key: string]: string;
        };
    }
}
declare namespace SpendAnalyzer.Administration {
}
declare namespace SpendAnalyzer.Administration {
    interface UserForm {
        Username: Serenity.StringEditor;
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        UserImage: Serenity.ImageUploadEditor;
        Password: Serenity.PasswordEditor;
        PasswordConfirm: Serenity.PasswordEditor;
        Source: Serenity.StringEditor;
        Tenants: Serenity.StringEditor;
    }
    class UserForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SpendAnalyzer.Administration {
    interface UserPermissionListRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace SpendAnalyzer.Administration {
    interface UserPermissionRow {
        UserPermissionId?: number;
        UserId?: number;
        PermissionKey?: string;
        Granted?: boolean;
        Username?: string;
        User?: string;
    }
    namespace UserPermissionRow {
        const idProperty = "UserPermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.UserPermission";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserPermissionId = "UserPermissionId",
            UserId = "UserId",
            PermissionKey = "PermissionKey",
            Granted = "Granted",
            Username = "Username",
            User = "User"
        }
    }
}
declare namespace SpendAnalyzer.Administration {
    namespace UserPermissionService {
        const baseUrl = "Administration/UserPermission";
        function Update(request: UserPermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<UserPermissionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListRolePermissions(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListPermissionKeys(request: Serenity.ServiceRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserPermission/Update",
            List = "Administration/UserPermission/List",
            ListRolePermissions = "Administration/UserPermission/ListRolePermissions",
            ListPermissionKeys = "Administration/UserPermission/ListPermissionKeys"
        }
    }
}
declare namespace SpendAnalyzer.Administration {
    interface UserPermissionUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: UserPermissionRow[];
    }
}
declare namespace SpendAnalyzer.Administration {
    interface UserRoleListRequest extends Serenity.ServiceRequest {
        UserID?: number;
    }
}
declare namespace SpendAnalyzer.Administration {
    interface UserRoleListResponse extends Serenity.ListResponse<number> {
    }
}
declare namespace SpendAnalyzer.Administration {
    interface UserRoleRow {
        UserRoleId?: number;
        UserId?: number;
        RoleId?: number;
        Username?: string;
        User?: string;
    }
    namespace UserRoleRow {
        const idProperty = "UserRoleId";
        const localTextPrefix = "Administration.UserRole";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserRoleId = "UserRoleId",
            UserId = "UserId",
            RoleId = "RoleId",
            Username = "Username",
            User = "User"
        }
    }
}
declare namespace SpendAnalyzer.Administration {
    namespace UserRoleService {
        const baseUrl = "Administration/UserRole";
        function Update(request: UserRoleUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserRoleListRequest, onSuccess?: (response: UserRoleListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserRole/Update",
            List = "Administration/UserRole/List"
        }
    }
}
declare namespace SpendAnalyzer.Administration {
    interface UserRoleUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Roles?: number[];
    }
}
declare namespace SpendAnalyzer.Administration {
    interface UserRow {
        UserId?: number;
        Username?: string;
        Source?: string;
        PasswordHash?: string;
        PasswordSalt?: string;
        DisplayName?: string;
        Email?: string;
        UserImage?: string;
        LastDirectoryUpdate?: string;
        IsActive?: number;
        Password?: string;
        PasswordConfirm?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace UserRow {
        const idProperty = "UserId";
        const isActiveProperty = "IsActive";
        const nameProperty = "Username";
        const localTextPrefix = "Administration.User";
        const lookupKey = "Administration.User";
        function getLookup(): Q.Lookup<UserRow>;
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserId = "UserId",
            Username = "Username",
            Source = "Source",
            PasswordHash = "PasswordHash",
            PasswordSalt = "PasswordSalt",
            DisplayName = "DisplayName",
            Email = "Email",
            UserImage = "UserImage",
            LastDirectoryUpdate = "LastDirectoryUpdate",
            IsActive = "IsActive",
            Password = "Password",
            PasswordConfirm = "PasswordConfirm",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            Tenants = "Tenants"
        }
    }
}
declare namespace SpendAnalyzer.Administration {
    namespace UserService {
        const baseUrl = "Administration/User";
        function Create(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/User/Create",
            Update = "Administration/User/Update",
            Delete = "Administration/User/Delete",
            Undelete = "Administration/User/Undelete",
            Retrieve = "Administration/User/Retrieve",
            List = "Administration/User/List"
        }
    }
}
declare namespace SmoothData.BusinessObjects {
}
declare namespace SmoothData.BusinessObjects {
}
declare namespace SmoothData.BusinessObjects {
    interface BaseQryFERow {
        field?: string;
        label?: string;
        type?: string;
        CategoryId?: number;
        CategoryCategoryName?: string;
    }
    namespace BaseQryFERow {
        const idProperty = "label";
        const nameProperty = "label";
        const localTextPrefix = "BusinessObjects.BaseQryFE";
        const lookupKey = "BusinessObjects.BaseQryFE";
        function getLookup(): Q.Lookup<BaseQryFERow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            field = "field",
            label = "label",
            type = "type",
            CategoryId = "CategoryId",
            CategoryCategoryName = "CategoryCategoryName"
        }
    }
}
declare namespace SmoothData.BusinessObjects {
}
declare namespace SmoothData.BusinessObjects {
    interface BaseQryForm {
        ParentId: Serenity.StringEditor;
        TemplateName: Serenity.StringEditor;
        CategoryId: Serenity.LookupEditor;
        RunTimeTableName: Serenity.StringEditor;
        RltdColumns: Serenity.StringEditor;
        DfltVl: Serenity.StringEditor;
    }
    class BaseQryForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SmoothData.BusinessObjects {
    class BaseQryLookUpForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface BaseQryLookUpForm {
        LookUpId: Serenity.IntegerEditor;
        BsId: Serenity.IntegerEditor;
        FieldMemberId: Serenity.IntegerEditor;
    }
}
declare namespace SmoothData.BusinessObjects {
    interface BaseQryLookUpRow {
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
    namespace BaseQryLookUpRow {
        const idProperty = "BsLookupId";
        const localTextPrefix = "BusinessObjects.BaseQryLookUp";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        namespace Fields {
            const BsLookupId: any;
            const LookUpId: any;
            const BsId: any;
            const FieldMemberId: any;
            const LookUpName: any;
            const LookUpLookUpQuery: any;
            const BsParentId: any;
            const BsTemplateName: any;
            const BsCategoryId: any;
            const BsFieldList: any;
            const BsRunTimeTableName: any;
            const BsParams: any;
            const BsRltdColumns: any;
            const BsDfltVl: any;
            const FieldMemberBsId: any;
            const FieldMemberName: any;
            const FieldMemberDataType: any;
            const FieldMemberSize: any;
        }
    }
}
declare namespace SmoothData.BusinessObjects {
    namespace BaseQryLookUpService {
        const baseUrl = "BusinessObjects/BaseQryLookUp";
        function Create(request: Serenity.SaveRequest<BaseQryLookUpRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<BaseQryLookUpRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<BaseQryLookUpRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<BaseQryLookUpRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace SmoothData.BusinessObjects {
    interface BaseQryRow {
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
    namespace BaseQryRow {
        const idProperty = "BsId";
        const nameProperty = "TemplateName";
        const localTextPrefix = "BusinessObjects.BaseQry";
        const lookupKey = "BusinessObjects.BaseQry";
        function getLookup(): Q.Lookup<BaseQryRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
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
declare namespace SmoothData.BusinessObjects {
    namespace BaseQryService {
        const baseUrl = "BusinessObjects/BaseQry";
        function Create(request: Serenity.SaveRequest<BaseQryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<BaseQryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<BaseQryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<BaseQryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListFE(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<BaseQryFERow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "BusinessObjects/BaseQry/Create",
            Update = "BusinessObjects/BaseQry/Update",
            Delete = "BusinessObjects/BaseQry/Delete",
            Retrieve = "BusinessObjects/BaseQry/Retrieve",
            List = "BusinessObjects/BaseQry/List",
            ListFE = "BusinessObjects/BaseQry/ListFE"
        }
    }
}
declare namespace SmoothData.BusinessObjects {
    class JbForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface JbForm {
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
}
declare namespace SmoothData.BusinessObjects {
    enum JbPeriod {
        Daily = 1,
        Weekly = 2,
        Monthly = 3
    }
}
declare namespace SmoothData.BusinessObjects {
    class JbRnForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface JbRnForm {
        JbId: Serenity.IntegerEditor;
        Date: Serenity.DateEditor;
        Repository: Serenity.StringEditor;
    }
}
declare namespace SmoothData.BusinessObjects {
    interface JbRnRow {
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
    namespace JbRnRow {
        const idProperty = "JbRnId";
        const nameProperty = "Repository";
        const localTextPrefix = "BusinessObjects.JbRn";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        namespace Fields {
            const JbRnId: any;
            const JbId: any;
            const Date: any;
            const Repository: any;
            const JbName: any;
            const JbPckgId: any;
            const JbCreatedBy: any;
            const JbLastModifiedDate: any;
            const JbModifiedBy: any;
            const JbLastRunDate: any;
            const JbStatus: any;
            const JbKeepHistory: any;
            const JbPeriod: any;
            const JbRunTime: any;
            const JbFromDate: any;
            const JbToDate: any;
            const JbMonday: any;
            const JbTuesday: any;
            const JbWednesday: any;
            const JbThursday: any;
            const JbFriday: any;
            const JbSaturday: any;
            const JbSunday: any;
        }
    }
}
declare namespace SmoothData.BusinessObjects {
    namespace JbRnService {
        const baseUrl = "BusinessObjects/JbRn";
        function Create(request: Serenity.SaveRequest<JbRnRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<JbRnRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<JbRnRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<JbRnRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace SmoothData.BusinessObjects {
    interface JbRow {
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
    namespace JbRow {
        const idProperty = "JbId";
        const nameProperty = "Name";
        const localTextPrefix = "BusinessObjects.Jb";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        namespace Fields {
            const JbId: any;
            const Name: any;
            const PckgId: any;
            const CreatedBy: any;
            const LastModifiedDate: any;
            const ModifiedBy: any;
            const LastRunDate: any;
            const Status: any;
            const KeepHistory: any;
            const Period: any;
            const RunTime: any;
            const FromDate: any;
            const ToDate: any;
            const Monday: any;
            const Tuesday: any;
            const Wednesday: any;
            const Thursday: any;
            const Friday: any;
            const Saturday: any;
            const Sunday: any;
            const PckgName: any;
            const Pckg: any;
            const PckgDateCreated: any;
            const PckgCreatedBy: any;
            const PckgLastModifiedBy: any;
            const PckgLastModifiedDate: any;
            const PckgIsLocalCopy: any;
        }
    }
}
declare namespace SmoothData.BusinessObjects {
    namespace JbService {
        const baseUrl = "BusinessObjects/Jb";
        function Create(request: Serenity.SaveRequest<JbRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<JbRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<JbRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<JbRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace SpendAnalyzer.Common {
    interface UserPreferenceRetrieveRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
    }
}
declare namespace SpendAnalyzer.Common {
    interface UserPreferenceRetrieveResponse extends Serenity.ServiceResponse {
        Value?: string;
    }
}
declare namespace SpendAnalyzer.Common {
    interface UserPreferenceRow {
        UserPreferenceId?: number;
        UserId?: number;
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
    namespace UserPreferenceRow {
        const idProperty = "UserPreferenceId";
        const nameProperty = "Name";
        const localTextPrefix = "Common.UserPreference";
        const deletePermission = "";
        const insertPermission = "";
        const readPermission = "";
        const updatePermission = "";
        const enum Fields {
            UserPreferenceId = "UserPreferenceId",
            UserId = "UserId",
            PreferenceType = "PreferenceType",
            Name = "Name",
            Value = "Value"
        }
    }
}
declare namespace SpendAnalyzer.Common {
    namespace UserPreferenceService {
        const baseUrl = "Common/UserPreference";
        function Update(request: UserPreferenceUpdateRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: UserPreferenceRetrieveRequest, onSuccess?: (response: UserPreferenceRetrieveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Common/UserPreference/Update",
            Retrieve = "Common/UserPreference/Retrieve"
        }
    }
}
declare namespace SpendAnalyzer.Common {
    interface UserPreferenceUpdateRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
}
declare namespace SpendAnalyzer {
    interface ExcelImportRequest extends Serenity.ServiceRequest {
        FileName?: string;
    }
}
declare namespace SpendAnalyzer {
    interface ExcelImportResponse extends Serenity.ServiceResponse {
        Inserted?: number;
        Updated?: number;
        ErrorList?: string[];
    }
}
declare namespace SpendAnalyzer {
    interface GetNextNumberRequest extends Serenity.ServiceRequest {
        Prefix?: string;
        Length?: number;
    }
}
declare namespace SpendAnalyzer {
    interface GetNextNumberResponse extends Serenity.ServiceResponse {
        Number?: number;
        Serial?: string;
    }
}
declare namespace SpendAnalyzer.Membership {
    interface ChangePasswordForm {
        OldPassword: Serenity.PasswordEditor;
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ChangePasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SpendAnalyzer.Membership {
    interface ChangePasswordRequest extends Serenity.ServiceRequest {
        OldPassword?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace SpendAnalyzer.Membership {
    interface ForgotPasswordForm {
        Email: Serenity.EmailEditor;
    }
    class ForgotPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SpendAnalyzer.Membership {
    interface ForgotPasswordRequest extends Serenity.ServiceRequest {
        Email?: string;
    }
}
declare namespace SpendAnalyzer.Membership {
    interface LoginForm {
        Username: Serenity.StringEditor;
        Password: Serenity.PasswordEditor;
    }
    class LoginForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SpendAnalyzer.Membership {
    interface LoginRequest extends Serenity.ServiceRequest {
        Username?: string;
        Password?: string;
    }
}
declare namespace SpendAnalyzer.Membership {
    interface ResetPasswordForm {
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ResetPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SpendAnalyzer.Membership {
    interface ResetPasswordRequest extends Serenity.ServiceRequest {
        Token?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace SpendAnalyzer.Membership {
    interface SignUpForm {
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        ConfirmEmail: Serenity.EmailEditor;
        Password: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class SignUpForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SpendAnalyzer.Membership {
    interface SignUpRequest extends Serenity.ServiceRequest {
        DisplayName?: string;
        Email?: string;
        Password?: string;
    }
}
declare namespace SpendAnalyzer {
    interface ScriptUserDefinition {
        Username?: string;
        DisplayName?: string;
        IsAdmin?: boolean;
        Permissions?: {
            [key: string]: boolean;
        };
    }
}
declare namespace SpendAnalyzer.Texts {
}
declare namespace SpendAnalyzer.Administration {
    class LanguageDialog extends Serenity.EntityDialog<LanguageRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: LanguageForm;
    }
}
declare namespace SpendAnalyzer.Administration {
    class LanguageGrid extends Serenity.EntityGrid<LanguageRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LanguageDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): LanguageRow.Fields[];
    }
}
declare namespace SpendAnalyzer.Administration {
    class RoleDialog extends Serenity.EntityDialog<RoleRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: RoleForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
    }
}
declare namespace SpendAnalyzer.Administration {
    class RoleGrid extends Serenity.EntityGrid<RoleRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RoleDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): RoleRow.Fields[];
    }
}
declare namespace SpendAnalyzer.Administration {
    class RolePermissionDialog extends Serenity.TemplatedDialog<RolePermissionDialogOptions> {
        private permissions;
        constructor(opt: RolePermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface RolePermissionDialogOptions {
        roleID?: number;
        title?: string;
    }
}
declare var Vue: any;
declare namespace SpendAnalyzer.Administration {
    class SergenPanel extends Serenity.Widget<any> {
        constructor(container: JQuery);
    }
}
declare namespace SpendAnalyzer.Administration {
    class TranslationGrid extends Serenity.EntityGrid<TranslationItem, any> {
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private hasChanges;
        private searchText;
        private sourceLanguage;
        private targetLanguage;
        private targetLanguageKey;
        constructor(container: JQuery);
        protected onClick(e: JQueryEventObject, row: number, cell: number): any;
        protected getColumns(): Slick.Column[];
        protected createToolbarExtensions(): void;
        protected saveChanges(language: string): PromiseLike<any>;
        protected onViewSubmit(): boolean;
        protected getButtons(): Serenity.ToolButton[];
        protected createQuickSearchInput(): void;
        protected onViewFilter(item: TranslationItem): boolean;
        protected usePager(): boolean;
    }
}
declare namespace SpendAnalyzer.Administration {
    class TreeLevelAccessDialog extends Serenity.TemplatedDialog<any> {
        constructor();
    }
}
declare namespace SpendAnalyzer.Administration {
    class UserDialog extends Serenity.EntityDialog<UserRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: UserForm;
        private userSynfusinDlg;
        private treeVw;
        private data;
        constructor();
        protected validateBeforeSave(): boolean;
        protected getToolbarButtons(): Serenity.ToolButton[];
        SetTree(data: any): void;
        protected updateInterface(): void;
        protected afterLoadEntity(): void;
    }
}
declare namespace SpendAnalyzer.Administration {
    class UserGrid extends Serenity.EntityGrid<UserRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UserDialog;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): UserRow.Fields[];
    }
}
declare namespace SpendAnalyzer.Authorization {
    let userDefinition: ScriptUserDefinition;
    function hasPermission(permissionKey: string): boolean;
}
declare namespace SpendAnalyzer.Administration {
    class PermissionCheckEditor extends Serenity.DataGrid<PermissionCheckItem, PermissionCheckEditorOptions> {
        protected getIdProperty(): string;
        private searchText;
        private byParentKey;
        constructor(container: JQuery, opt: PermissionCheckEditorOptions);
        private getItemGrantRevokeClass;
        private roleOrImplicit;
        private getItemEffectiveClass;
        protected getColumns(): Slick.Column[];
        setItems(items: PermissionCheckItem[]): void;
        protected onViewSubmit(): boolean;
        protected onViewFilter(item: PermissionCheckItem): boolean;
        private matchContains;
        private getDescendants;
        protected onClick(e: any, row: any, cell: any): void;
        private getParentKey;
        protected getButtons(): Serenity.ToolButton[];
        protected createToolbarExtensions(): void;
        private getSortedGroupAndPermissionKeys;
        get value(): UserPermissionRow[];
        set value(value: UserPermissionRow[]);
        private _rolePermissions;
        get rolePermissions(): string[];
        set rolePermissions(value: string[]);
        private _implicitPermissions;
        set implicitPermissions(value: Q.Dictionary<string[]>);
    }
    interface PermissionCheckEditorOptions {
        showRevoke?: boolean;
    }
    interface PermissionCheckItem {
        ParentKey?: string;
        Key?: string;
        Title?: string;
        IsGroup?: boolean;
        GrantRevoke?: boolean;
    }
}
declare namespace SpendAnalyzer.Administration {
    class UserPermissionDialog extends Serenity.TemplatedDialog<UserPermissionDialogOptions> {
        private permissions;
        constructor(opt: UserPermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserPermissionDialogOptions {
        userID?: number;
        username?: string;
    }
}
declare namespace SpendAnalyzer.Administration {
    class RoleCheckEditor extends Serenity.CheckTreeEditor<Serenity.CheckTreeItem<any>, any> {
        private searchText;
        constructor(div: JQuery);
        protected createToolbarExtensions(): void;
        protected getButtons(): any[];
        protected getTreeItems(): Serenity.CheckTreeItem<any>[];
        protected onViewFilter(item: any): boolean;
    }
}
declare namespace SpendAnalyzer.Administration {
    class UserRoleDialog extends Serenity.TemplatedDialog<UserRoleDialogOptions> {
        private permissions;
        constructor(opt: UserRoleDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserRoleDialogOptions {
        userID: number;
        username: string;
    }
}
declare namespace SpendAnalyzer.LanguageList {
    function getValue(): string[][];
}
declare namespace SpendAnalyzer.ScriptInitialization {
}
declare namespace SpendAnalyzer {
    class BasicProgressDialog extends Serenity.TemplatedDialog<any> {
        constructor();
        cancelled: boolean;
        get max(): number;
        set max(value: number);
        get value(): number;
        set value(value: number);
        get title(): string;
        set title(value: string);
        cancelTitle: string;
        getDialogOptions(): JQueryUI.DialogOptions;
        initDialog(): void;
        getTemplate(): string;
    }
}
declare namespace SpendAnalyzer.Common {
    class BulkServiceAction {
        protected keys: string[];
        protected queue: string[];
        protected queueIndex: number;
        protected progressDialog: BasicProgressDialog;
        protected pendingRequests: number;
        protected completedRequests: number;
        protected errorByKey: Q.Dictionary<Serenity.ServiceError>;
        private successCount;
        private errorCount;
        done: () => void;
        protected createProgressDialog(): void;
        protected getConfirmationFormat(): string;
        protected getConfirmationMessage(targetCount: any): string;
        protected confirm(targetCount: any, action: any): void;
        protected getNothingToProcessMessage(): string;
        protected nothingToProcess(): void;
        protected getParallelRequests(): number;
        protected getBatchSize(): number;
        protected startParallelExecution(): void;
        protected serviceCallCleanup(): void;
        protected executeForBatch(batch: string[]): void;
        protected executeNextBatch(): void;
        protected getAllHadErrorsFormat(): string;
        protected showAllHadErrors(): void;
        protected getSomeHadErrorsFormat(): string;
        protected showSomeHadErrors(): void;
        protected getAllSuccessFormat(): string;
        protected showAllSuccess(): void;
        protected showResults(): void;
        execute(keys: string[]): void;
        get_successCount(): any;
        set_successCount(value: number): void;
        get_errorCount(): any;
        set_errorCount(value: number): void;
    }
}
declare namespace SpendAnalyzer.DialogUtils {
    function pendingChangesConfirmation(element: JQuery, hasPendingChanges: () => boolean): void;
}
declare namespace SpendAnalyzer.Common {
    class EnumSelectFormatter implements Slick.Formatter {
        constructor();
        format(ctx: Slick.FormatterContext): string;
        enumKey: string;
        allowClear: boolean;
        emptyItemText: string;
    }
}
declare namespace SpendAnalyzer.Common {
    interface ExcelExportOptions {
        grid: Serenity.DataGrid<any, any>;
        service: string;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
    }
    namespace ExcelExportHelper {
        function createToolButton(options: ExcelExportOptions): Serenity.ToolButton;
    }
}
declare namespace SpendAnalyzer.Common {
    class GridEditorBase<TEntity> extends Serenity.EntityGrid<TEntity, any> implements Serenity.IGetEditValue, Serenity.ISetEditValue {
        protected getIdProperty(): string;
        protected nextId: number;
        constructor(container: JQuery);
        protected id(entity: TEntity): any;
        protected getNextId(): string;
        protected setNewId(entity: TEntity): void;
        protected save(opt: Serenity.ServiceOptions<any>, callback: (r: Serenity.ServiceResponse) => void): void;
        protected deleteEntity(id: number): boolean;
        protected validateEntity(row: TEntity, id: number): boolean;
        protected setEntities(items: TEntity[]): void;
        protected getNewEntity(): TEntity;
        protected getButtons(): Serenity.ToolButton[];
        protected editItem(entityOrId: any): void;
        getEditValue(property: any, target: any): void;
        setEditValue(source: any, property: any): void;
        get value(): TEntity[];
        set value(value: TEntity[]);
        protected getGridCanLoad(): boolean;
        protected usePager(): boolean;
        protected getInitialTitle(): any;
        protected createQuickSearchInput(): void;
        protected enableDeleteColumn(): boolean;
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace SpendAnalyzer.Common {
    class GridEditorDialog<TEntity> extends Serenity.EntityDialog<TEntity, any> {
        protected getIdProperty(): string;
        onSave: (options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void) => void;
        onDelete: (options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void) => void;
        destroy(): void;
        protected updateInterface(): void;
        protected saveHandler(options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void): void;
        protected deleteHandler(options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void): void;
    }
}
declare namespace SpendAnalyzer {
    /**
     * This is an editor widget but it only displays a text, not edits it.
     *
     */
    class StaticTextBlock extends Serenity.Widget<StaticTextBlockOptions> implements Serenity.ISetEditValue {
        private value;
        constructor(container: JQuery, options: StaticTextBlockOptions);
        private updateElementContent;
        /**
         * By implementing ISetEditValue interface, we allow this editor to display its field value.
         * But only do this when our text content is not explicitly set in options
         */
        setEditValue(source: any, property: Serenity.PropertyItem): void;
    }
    interface StaticTextBlockOptions {
        text: string;
        isHtml: boolean;
        isLocalText: boolean;
        hideLabel: boolean;
    }
}
declare namespace SpendAnalyzer.Common {
    class LanguageSelection extends Serenity.Widget<any> {
        constructor(select: JQuery, currentLanguage: string);
    }
}
declare namespace SpendAnalyzer.Common {
    class SidebarSearch extends Serenity.Widget<any> {
        private menuUL;
        constructor(input: JQuery, menuUL: JQuery);
        protected updateMatchFlags(text: string): void;
    }
}
declare namespace SpendAnalyzer.Common {
    class ThemeSelection extends Serenity.Widget<any> {
        constructor(select: JQuery);
        protected getCurrentTheme(): string;
    }
}
declare var jsPDF: any;
declare namespace SpendAnalyzer.Common {
    interface PdfExportOptions {
        grid: Serenity.DataGrid<any, any>;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
        reportTitle?: string;
        titleTop?: number;
        titleFontSize?: number;
        fileName?: string;
        pageNumbers?: boolean;
        columnTitles?: {
            [key: string]: string;
        };
        tableOptions?: jsPDF.AutoTableOptions;
        output?: string;
        autoPrint?: boolean;
        printDateTimeHeader?: boolean;
    }
    namespace PdfExportHelper {
        function exportToPdf(options: PdfExportOptions): void;
        function createToolButton(options: PdfExportOptions): Serenity.ToolButton;
    }
}
declare var jsPDF: any;
declare namespace SpendAnalyzer.Common {
    class ReportDialog extends Serenity.TemplatedDialog<ReportDialogOptions> {
        private report;
        private propertyGrid;
        constructor(options: ReportDialogOptions);
        protected getDialogButtons(): any;
        protected createPropertyGrid(): void;
        protected loadReport(reportKey: string): void;
        protected updateInterface(): void;
        executeReport(target: string, ext: string, download: boolean): void;
        getToolbarButtons(): {
            title: string;
            cssClass: string;
            onClick: () => void;
        }[];
    }
    interface ReportDialogOptions {
        reportKey: string;
    }
}
declare namespace SpendAnalyzer.Common {
    interface ReportExecuteOptions {
        reportKey: string;
        download?: boolean;
        extension?: 'pdf' | 'htm' | 'html' | 'xlsx' | 'docx';
        getParams?: () => any;
        params?: {
            [key: string]: any;
        };
        target?: string;
    }
    interface ReportButtonOptions extends ReportExecuteOptions {
        title?: string;
        cssClass?: string;
        icon?: string;
    }
    namespace ReportHelper {
        function createToolButton(options: ReportButtonOptions): Serenity.ToolButton;
        function execute(options: ReportExecuteOptions): void;
    }
}
declare var jsPDF: any;
declare namespace SpendAnalyzer.Common {
    class ReportPage extends Serenity.Widget<any> {
        private reportKey;
        private propertyItems;
        private propertyGrid;
        constructor(element: JQuery);
        protected updateMatchFlags(text: string): void;
        protected categoryClick(e: any): void;
        protected reportLinkClick(e: any): void;
    }
}
declare namespace SpendAnalyzer.Common {
    class UserPreferenceStorage implements Serenity.SettingStorage {
        getItem(key: string): string;
        setItem(key: string, data: string): void;
    }
}
declare namespace SpendAnalyzer.BusinessObjects {
    enum AppRpstryCntxtDemo {
        GetHomeSectionA = 1
    }
    class AppRpstryDemo {
        private _appRpstryCntxt;
        get AppRpstryCntxt(): any;
        set AppRpstryCntxt(val: any);
        GetHomeSectionA(): {
            "QryBldrLstA": {
                "SplitQry": boolean;
                "QryCntnr": {
                    "Id": string;
                    "QMD": {
                        "condition": string;
                        "rules": {
                            "Id": any;
                            "condition": any;
                            "label": string;
                            "field": string;
                            "operator": string;
                            "value": string;
                            "type": string;
                            "rules": any;
                        }[];
                    };
                };
                "QuerySetComp": {
                    "SelectFields": {
                        "Name": string;
                        "Alias": any;
                        "RunTimeTableName": any;
                        "TemplateName": string;
                        "FullName": string;
                        "FullName_2": string;
                        "IsGroupBy": boolean;
                        "Hide": boolean;
                        "UnionTableName": any;
                        "Value": string;
                        "IsSelected": boolean;
                        "GroupRuleId": string;
                        "CurFldNm": string;
                        "Cs": any;
                        "IsCs": boolean;
                        "GB": boolean;
                        "AG": string;
                        "OtPt": any;
                        "Ma__in_Id": any;
                        "Apd": any;
                        "IsUpvt": boolean;
                    }[];
                    "CaseFields": any;
                    "QryVar": any;
                };
                "ParamQryBldrList": any[];
            }[];
            "QryBldr_B": any;
            "Rpt": {
                "FlNm": string;
                "FlTyp": any;
            };
            "ColumnsModel": any;
            "QueryParams": any;
        };
    }
}
declare namespace SpendAnalyzer.BusinessObjects {
    enum AppRpstryCntxt {
        GetCardTrnxCntxt = 1,
        GetCstmrsCnt = 2,
        GetChannelsLnChrts = 3,
        GetMonthlyAcquisition = 4,
        GetTopSpndCatgrs = 5,
        GetTopChnnls = 6,
        GetASpdTypByMnth = 7,
        GetCstmrsTrnxTrndByMnth = 8,
        GetBOBR = 9,
        GetEHVDM = 10,
        GetDRIP = 11,
        GetRGS = 12,
        GetUseCaseBySgmntForPieChart = 13,
        GetDshBrdA = 14,
        GetHome = 15,
        GetMonthlyTrend = 16,
        GetChnnls = 17,
        ShowTrends = 18,
        GetMonthlyVolTrend = 19,
        GetSpendCategoryChart = 20,
        GetUSSD6MthsSmry = 21
    }
    class AppRpstry {
        PropSpdTyp: string;
        Prop_BRANCH_CODE: string;
        Prop_STATEID: number;
        Prop_ZONEID: number;
        Prop_REGIONID: number;
        Prop_AGE_CODE: string;
        Prop_TENURE_CODE: string;
        Prop_PRODUCT_CODE: string;
        Prop_SEGMENT_CODE: string;
        Prop_ACCOUNT_CODE: string;
        Prop_CURRENCY_CODE: string;
        constructor();
        private _appRpstryCntxt;
        get AppRpstryCntxt(): any;
        set AppRpstryCntxt(val: any);
        private _startDate;
        get PropStartDate(): any;
        set PropStartDate(val: any);
        private _endDate;
        get PropEndDate(): any;
        set PropEndDate(val: any);
        GetCardTrnxCntxt(): {
            "QryBldrLstA": {
                "QryCntnr": {
                    "Id": string;
                    "QMD": {
                        "condition": string;
                        "rules": {
                            "Id": any;
                            "condition": any;
                            "label": string;
                            "field": string;
                            "operator": string;
                            "value": string;
                            "type": string;
                            "rules": any;
                        }[];
                    };
                };
                "QuerySetComp": {
                    "SelectFields": {
                        "Name": string;
                        "Alias": any;
                        "RunTimeTableName": any;
                        "TemplateName": string;
                        "FullName": string;
                        "FullName_2": string;
                        "IsGroupBy": boolean;
                        "Hide": boolean;
                        "UnionTableName": any;
                        "Value": string;
                        "IsSelected": boolean;
                        "GroupRuleId": string;
                        "CurFldNm": string;
                        "Cs": any;
                        "IsCs": boolean;
                        "GB": boolean;
                        "AG": string;
                        "OtPt": any;
                        "Ma__in_Id": any;
                        "Apd": any;
                    }[];
                    "CaseFields": any;
                    "QryVar": any;
                };
                "ParamQryBldrList": {
                    "Id": string;
                    "InputRuleParam": {
                        "Id": any;
                        "condition": string;
                        "label": any;
                        "field": any;
                        "operator": any;
                        "value": any;
                        "type": any;
                        "rules": {
                            "Id": any;
                            "condition": any;
                            "label": string;
                            "field": string;
                            "operator": string;
                            "value": any;
                            "type": string;
                            "rules": any;
                        }[];
                    };
                }[];
            }[];
            "QryBldr_B": any;
            "Rpt": any;
            "ColumnsModel": any;
            "QueryParams": any;
        };
        GetCstmrsCnt(): {
            "QryBldrLstA": {
                "QryCntnr": {
                    "Id": string;
                    "QMD": {
                        "condition": string;
                        "rules": {
                            "Id": any;
                            "condition": any;
                            "label": string;
                            "field": string;
                            "operator": string;
                            "value": string;
                            "type": string;
                            "rules": any;
                        }[];
                    };
                };
                "QuerySetComp": {
                    "SelectFields": {
                        "Name": string;
                        "Alias": any;
                        "RunTimeTableName": any;
                        "TemplateName": string;
                        "FullName": string;
                        "FullName_2": string;
                        "IsGroupBy": boolean;
                        "Hide": boolean;
                        "UnionTableName": any;
                        "Value": string;
                        "IsSelected": boolean;
                        "GroupRuleId": string;
                        "CurFldNm": string;
                        "Cs": any;
                        "IsCs": boolean;
                        "GB": boolean;
                        "AG": string;
                        "OtPt": any;
                        "Ma__in_Id": any;
                        "Apd": any;
                    }[];
                    "CaseFields": any;
                    "QryVar": any;
                };
                "ParamQryBldrList": {
                    "Id": string;
                    "InputRuleParam": {
                        "Id": any;
                        "condition": string;
                        "label": any;
                        "field": any;
                        "operator": any;
                        "value": any;
                        "type": any;
                        "rules": {
                            "Id": any;
                            "condition": any;
                            "label": string;
                            "field": string;
                            "operator": string;
                            "value": any;
                            "type": string;
                            "rules": any;
                        }[];
                    };
                }[];
            }[];
            "QryBldr_B": any;
            "Rpt": any;
            "ColumnsModel": any;
            "QueryParams": any;
        };
        GetChannelsLnChrts(): {
            "QryBldrLstA": {
                "QryCntnr": {
                    "Id": string;
                    "QMD": {
                        "condition": string;
                        "rules": {
                            "Id": any;
                            "condition": any;
                            "label": string;
                            "field": string;
                            "operator": string;
                            "value": string;
                            "type": string;
                            "rules": any;
                        }[];
                    };
                };
                "QuerySetComp": {
                    "SelectFields": {
                        "Name": string;
                        "Alias": any;
                        "RunTimeTableName": any;
                        "TemplateName": string;
                        "FullName": string;
                        "FullName_2": string;
                        "IsGroupBy": boolean;
                        "Hide": boolean;
                        "UnionTableName": any;
                        "Value": string;
                        "IsSelected": boolean;
                        "GroupRuleId": string;
                        "CurFldNm": string;
                        "Cs": any;
                        "IsCs": boolean;
                        "GB": boolean;
                        "AG": string;
                        "OtPt": any;
                        "Ma__in_Id": any;
                        "Apd": any;
                    }[];
                    "CaseFields": any;
                    "QryVar": any;
                };
                "ParamQryBldrList": {
                    "Id": string;
                    "InputRuleParam": {
                        "Id": any;
                        "condition": string;
                        "label": any;
                        "field": any;
                        "operator": any;
                        "value": any;
                        "type": any;
                        "rules": {
                            "Id": any;
                            "condition": any;
                            "label": string;
                            "field": string;
                            "operator": string;
                            "value": any;
                            "type": string;
                            "rules": any;
                        }[];
                    };
                }[];
            }[];
            "QryBldr_B": any;
            "Rpt": any;
            "ColumnsModel": any;
            "QueryParams": any;
        };
        GetMonthlyAcquisition(): {
            "QryBldrLstA": {
                "QryCntnr": {
                    "Id": string;
                    "QMD": {
                        "condition": string;
                        "rules": {
                            "Id": any;
                            "condition": any;
                            "label": string;
                            "field": string;
                            "operator": string;
                            "value": string;
                            "type": string;
                            "rules": any;
                        }[];
                    };
                };
                "QuerySetComp": {
                    "SelectFields": {
                        "Name": string;
                        "Alias": string;
                        "RunTimeTableName": any;
                        "TemplateName": string;
                        "FullName": string;
                        "FullName_2": string;
                        "IsGroupBy": boolean;
                        "Hide": boolean;
                        "UnionTableName": any;
                        "Value": string;
                        "IsSelected": boolean;
                        "GroupRuleId": string;
                        "CurFldNm": string;
                        "Cs": any;
                        "IsCs": boolean;
                        "GB": boolean;
                        "AG": string;
                        "OtPt": any;
                        "Ma__in_Id": any;
                        "Apd": any;
                    }[];
                    "CaseFields": any;
                    "QryVar": any;
                };
                "ParamQryBldrList": {
                    "Id": string;
                    "InputRuleParam": {
                        "Id": any;
                        "condition": string;
                        "label": any;
                        "field": any;
                        "operator": any;
                        "value": any;
                        "type": any;
                        "rules": {
                            "Id": any;
                            "condition": any;
                            "label": string;
                            "field": string;
                            "operator": string;
                            "value": any;
                            "type": string;
                            "rules": any;
                        }[];
                    };
                }[];
            }[];
            "QryBldr_B": any;
            "Rpt": any;
            "ColumnsModel": any;
            "QueryParams": any;
        };
        GetTopSpndCatgrs(): {
            "QryBldrLstA": {
                "QryCntnr": {
                    "Id": string;
                    "QMD": {
                        "condition": string;
                        "rules": {
                            "Id": any;
                            "condition": any;
                            "label": string;
                            "field": string;
                            "operator": string;
                            "value": string;
                            "type": string;
                            "rules": any;
                        }[];
                    };
                };
                "QuerySetComp": {
                    "SelectFields": {
                        "Name": string;
                        "Alias": any;
                        "RunTimeTableName": any;
                        "TemplateName": string;
                        "FullName": string;
                        "FullName_2": string;
                        "IsGroupBy": boolean;
                        "Hide": boolean;
                        "UnionTableName": any;
                        "Value": string;
                        "IsSelected": boolean;
                        "GroupRuleId": string;
                        "CurFldNm": string;
                        "Cs": any;
                        "IsCs": boolean;
                        "GB": boolean;
                        "AG": string;
                        "OtPt": any;
                        "Ma__in_Id": any;
                        "Apd": any;
                        "IsUpvt": boolean;
                    }[];
                    "CaseFields": any;
                    "QryVar": {
                        "Id": any;
                        "Name": string;
                        "Value": any;
                    }[];
                };
                "ParamQryBldrList": {
                    "Id": string;
                    "InputRuleParam": {
                        "Id": any;
                        "condition": string;
                        "label": any;
                        "field": any;
                        "operator": any;
                        "value": any;
                        "type": any;
                        "rules": any[];
                    };
                }[];
            }[];
            "QryBldr_B": any;
            "Rpt": {
                "FlNm": string;
                "FlTyp": any;
            };
            "ColumnsModel": any;
            "QueryParams": any;
        };
        GetTopChnnls(): {
            "QryBldrLstA": {
                "QryCntnr": {
                    "Id": string;
                    "QMD": {
                        "condition": string;
                        "rules": {
                            "Id": any;
                            "condition": any;
                            "label": string;
                            "field": string;
                            "operator": string;
                            "value": string;
                            "type": string;
                            "rules": any;
                        }[];
                    };
                };
                "QuerySetComp": {
                    "SelectFields": {
                        "Name": string;
                        "Alias": any;
                        "RunTimeTableName": any;
                        "TemplateName": string;
                        "FullName": string;
                        "FullName_2": string;
                        "IsGroupBy": boolean;
                        "Hide": boolean;
                        "UnionTableName": any;
                        "Value": string;
                        "IsSelected": boolean;
                        "GroupRuleId": string;
                        "CurFldNm": string;
                        "Cs": any;
                        "IsCs": boolean;
                        "GB": boolean;
                        "AG": string;
                        "OtPt": any;
                        "Ma__in_Id": any;
                        "Apd": any;
                    }[];
                    "CaseFields": any;
                    "QryVar": any;
                };
                "ParamQryBldrList": {
                    "Id": string;
                    "InputRuleParam": {
                        "Id": any;
                        "condition": string;
                        "label": any;
                        "field": any;
                        "operator": any;
                        "value": any;
                        "type": any;
                        "rules": {
                            "Id": any;
                            "condition": any;
                            "label": string;
                            "field": string;
                            "operator": string;
                            "value": any;
                            "type": string;
                            "rules": any;
                        }[];
                    };
                }[];
            }[];
            "QryBldr_B": any;
            "Rpt": any;
            "ColumnsModel": any;
            "QueryParams": any;
        };
        GetASpdTypByMnth(): {
            "QryBldrLstA": {
                "QryCntnr": {
                    "Id": string;
                    "QMD": {
                        "condition": string;
                        "rules": {
                            "Id": any;
                            "condition": any;
                            "label": string;
                            "field": string;
                            "operator": string;
                            "value": string;
                            "type": string;
                            "rules": any;
                        }[];
                    };
                };
                "QuerySetComp": {
                    "SelectFields": {
                        "Name": string;
                        "Alias": any;
                        "RunTimeTableName": any;
                        "TemplateName": string;
                        "FullName": string;
                        "FullName_2": string;
                        "IsGroupBy": boolean;
                        "Hide": boolean;
                        "UnionTableName": any;
                        "Value": string;
                        "IsSelected": boolean;
                        "GroupRuleId": string;
                        "CurFldNm": string;
                        "Cs": any;
                        "IsCs": boolean;
                        "GB": boolean;
                        "AG": string;
                        "OtPt": any;
                        "Ma__in_Id": any;
                        "Apd": any;
                    }[];
                    "CaseFields": any;
                    "QryVar": any;
                };
                "ParamQryBldrList": {
                    "Id": string;
                    "InputRuleParam": {
                        "Id": any;
                        "condition": string;
                        "label": any;
                        "field": any;
                        "operator": any;
                        "value": any;
                        "type": any;
                        "rules": {
                            "Id": any;
                            "condition": any;
                            "label": string;
                            "field": string;
                            "operator": string;
                            "value": any;
                            "type": string;
                            "rules": any;
                        }[];
                    };
                }[];
            }[];
            "QryBldr_B": any;
            "Rpt": any;
            "ColumnsModel": any;
            "QueryParams": any;
        };
        GetCstmrsTrnxTrndByMnth(): {
            "QryBldrLstA": {
                "QryCntnr": {
                    "Id": string;
                    "QMD": {
                        "condition": string;
                        "rules": {
                            "Id": any;
                            "condition": any;
                            "label": string;
                            "field": string;
                            "operator": string;
                            "value": string;
                            "type": string;
                            "rules": any;
                        }[];
                    };
                };
                "QuerySetComp": {
                    "SelectFields": {
                        "Name": string;
                        "Alias": any;
                        "RunTimeTableName": any;
                        "TemplateName": string;
                        "FullName": string;
                        "FullName_2": string;
                        "IsGroupBy": boolean;
                        "Hide": boolean;
                        "UnionTableName": any;
                        "Value": string;
                        "IsSelected": boolean;
                        "GroupRuleId": string;
                        "CurFldNm": string;
                        "Cs": any;
                        "IsCs": boolean;
                        "GB": boolean;
                        "AG": string;
                        "OtPt": any;
                        "Ma__in_Id": any;
                        "Apd": any;
                    }[];
                    "CaseFields": any;
                    "QryVar": any;
                };
                "ParamQryBldrList": {
                    "Id": string;
                    "InputRuleParam": {
                        "Id": any;
                        "condition": string;
                        "label": any;
                        "field": any;
                        "operator": any;
                        "value": any;
                        "type": any;
                        "rules": {
                            "Id": any;
                            "condition": any;
                            "label": string;
                            "field": string;
                            "operator": string;
                            "value": any;
                            "type": string;
                            "rules": any;
                        }[];
                    };
                }[];
            }[];
            "QryBldr_B": any;
            "Rpt": any;
            "ColumnsModel": any;
            "QueryParams": any;
        };
        GetBOBR(): {
            "QryBldrLstA": {
                "QryCntnr": {
                    "Id": string;
                    "QMD": {
                        "condition": string;
                        "rules": {
                            "Id": any;
                            "condition": any;
                            "label": string;
                            "field": string;
                            "operator": string;
                            "value": string;
                            "type": string;
                            "rules": any;
                        }[];
                    };
                };
                "QuerySetComp": {
                    "SelectFields": {
                        "Name": string;
                        "Alias": any;
                        "RunTimeTableName": any;
                        "TemplateName": string;
                        "FullName": string;
                        "FullName_2": string;
                        "IsGroupBy": boolean;
                        "Hide": boolean;
                        "UnionTableName": any;
                        "Value": string;
                        "IsSelected": boolean;
                        "GroupRuleId": string;
                        "CurFldNm": string;
                        "Cs": any;
                        "IsCs": boolean;
                        "GB": boolean;
                        "AG": string;
                        "OtPt": any;
                        "Ma__in_Id": any;
                        "Apd": any;
                        "IsUpvt": boolean;
                    }[];
                    "CaseFields": any;
                    "QryVar": any;
                };
                "ParamQryBldrList": {
                    "Id": string;
                    "InputRuleParam": {
                        "Id": any;
                        "condition": string;
                        "label": any;
                        "field": any;
                        "operator": any;
                        "value": any;
                        "type": any;
                        "rules": any[];
                    };
                }[];
            }[];
            "QryBldr_B": any;
            "Rpt": {
                "FlNm": string;
                "FlTyp": any;
            };
            "ColumnsModel": any;
            "QueryParams": any;
        };
        GetEHVDM(): {
            "QryBldrLstA": {
                "QryCntnr": {
                    "Id": string;
                    "QMD": {
                        "condition": string;
                        "rules": {
                            "Id": any;
                            "condition": any;
                            "label": string;
                            "field": string;
                            "operator": string;
                            "value": string;
                            "type": string;
                            "rules": any;
                        }[];
                    };
                };
                "QuerySetComp": {
                    "SelectFields": {
                        "Name": string;
                        "Alias": string;
                        "RunTimeTableName": any;
                        "TemplateName": string;
                        "FullName": string;
                        "FullName_2": string;
                        "IsGroupBy": boolean;
                        "Hide": boolean;
                        "UnionTableName": any;
                        "Value": string;
                        "IsSelected": boolean;
                        "GroupRuleId": string;
                        "CurFldNm": string;
                        "Cs": any;
                        "IsCs": boolean;
                        "GB": boolean;
                        "AG": string;
                        "OtPt": any;
                        "Ma__in_Id": any;
                        "Apd": any;
                        "IsUpvt": boolean;
                    }[];
                    "CaseFields": any;
                    "QryVar": any;
                };
                "ParamQryBldrList": any[];
            }[];
            "QryBldr_B": any;
            "Rpt": {
                "FlNm": string;
                "FlTyp": any;
            };
            "ColumnsModel": any;
            "QueryParams": any;
        };
        GetDRIP(): {
            "QryBldrLstA": {
                "QryCntnr": {
                    "Id": string;
                    "QMD": {
                        "condition": string;
                        "rules": {
                            "Id": any;
                            "condition": any;
                            "label": string;
                            "field": string;
                            "operator": string;
                            "value": string;
                            "type": string;
                            "rules": any;
                        }[];
                    };
                };
                "QuerySetComp": {
                    "SelectFields": {
                        "Name": string;
                        "Alias": any;
                        "RunTimeTableName": any;
                        "TemplateName": string;
                        "FullName": string;
                        "FullName_2": string;
                        "IsGroupBy": boolean;
                        "Hide": boolean;
                        "UnionTableName": any;
                        "Value": string;
                        "IsSelected": boolean;
                        "GroupRuleId": string;
                        "CurFldNm": string;
                        "Cs": any;
                        "IsCs": boolean;
                        "GB": boolean;
                        "AG": string;
                        "OtPt": any;
                        "Ma__in_Id": any;
                        "Apd": any;
                        "IsUpvt": boolean;
                    }[];
                    "CaseFields": any;
                    "QryVar": any;
                };
                "ParamQryBldrList": any[];
            }[];
            "QryBldr_B": any;
            "Rpt": {
                "FlNm": string;
                "FlTyp": any;
            };
            "ColumnsModel": any;
            "QueryParams": any;
        };
        GetRGS(): {
            "QryBldrLstA": {
                "QryCntnr": {
                    "Id": string;
                    "QMD": {
                        "condition": string;
                        "rules": {
                            "Id": any;
                            "condition": any;
                            "label": string;
                            "field": string;
                            "operator": string;
                            "value": string;
                            "type": string;
                            "rules": any;
                        }[];
                    };
                };
                "QuerySetComp": {
                    "SelectFields": {
                        "Name": string;
                        "Alias": any;
                        "RunTimeTableName": any;
                        "TemplateName": string;
                        "FullName": string;
                        "FullName_2": string;
                        "IsGroupBy": boolean;
                        "Hide": boolean;
                        "UnionTableName": any;
                        "Value": string;
                        "IsSelected": boolean;
                        "GroupRuleId": string;
                        "CurFldNm": string;
                        "Cs": any;
                        "IsCs": boolean;
                        "GB": boolean;
                        "AG": string;
                        "OtPt": any;
                        "Ma__in_Id": any;
                        "Apd": any;
                        "IsUpvt": boolean;
                    }[];
                    "CaseFields": any;
                    "QryVar": any;
                };
                "ParamQryBldrList": any[];
            }[];
            "QryBldr_B": any;
            "Rpt": {
                "FlNm": string;
                "FlTyp": any;
            };
            "ColumnsModel": any;
            "QueryParams": any;
        };
        GetUseCaseBySgmntForPieChart(): {
            x: string;
            y: number;
            text: string;
        }[];
        GetHome(): {
            "QryBldrLstA": {
                "QryCntnr": {
                    "Id": string;
                    "QMD": {
                        "condition": string;
                        "rules": {
                            "Id": any;
                            "condition": any;
                            "label": string;
                            "field": string;
                            "operator": string;
                            "value": string;
                            "type": string;
                            "rules": any;
                        }[];
                    };
                };
                "QuerySetComp": {
                    "SelectFields": {
                        "Name": string;
                        "Alias": any;
                        "RunTimeTableName": any;
                        "TemplateName": string;
                        "FullName": string;
                        "FullName_2": string;
                        "IsGroupBy": boolean;
                        "Hide": boolean;
                        "UnionTableName": any;
                        "Value": string;
                        "IsSelected": boolean;
                        "GroupRuleId": string;
                        "CurFldNm": string;
                        "Cs": any;
                        "IsCs": boolean;
                        "GB": boolean;
                        "AG": string;
                        "OtPt": any;
                        "Ma__in_Id": any;
                        "Apd": any;
                    }[];
                    "CaseFields": any;
                    "QryVar": {
                        "Id": any;
                        "Name": string;
                        "Value": any;
                    }[];
                };
                "ParamQryBldrList": {
                    "Id": string;
                    "InputRuleParam": {
                        "Id": any;
                        "condition": string;
                        "label": any;
                        "field": any;
                        "operator": any;
                        "value": any;
                        "type": any;
                        "rules": any[];
                    };
                }[];
            }[];
            "QryBldr_B": any;
            "Rpt": {
                "FlNm": string;
                "FlTyp": any;
            };
            "ColumnsModel": any;
            "QueryParams": any;
        };
        GetDshBrdA(): {
            "QryBldrLstA": {
                "QryCntnr": {
                    "Id": string;
                    "QMD": {
                        "condition": string;
                        "rules": {
                            "Id": any;
                            "condition": any;
                            "label": string;
                            "field": string;
                            "operator": string;
                            "value": string;
                            "type": string;
                            "rules": any;
                        }[];
                    };
                };
                "QuerySetComp": {
                    "SelectFields": {
                        "Name": string;
                        "Alias": string;
                        "RunTimeTableName": any;
                        "TemplateName": string;
                        "FullName": string;
                        "FullName_2": string;
                        "IsGroupBy": boolean;
                        "Hide": boolean;
                        "UnionTableName": any;
                        "Value": string;
                        "IsSelected": boolean;
                        "GroupRuleId": string;
                        "CurFldNm": string;
                        "Cs": any;
                        "IsCs": boolean;
                        "GB": boolean;
                        "AG": string;
                        "OtPt": any;
                        "Ma__in_Id": any;
                        "Apd": any;
                    }[];
                    "CaseFields": any;
                    "QryVar": {
                        "Id": any;
                        "Name": string;
                        "Value": any;
                    }[];
                };
                "ParamQryBldrList": {
                    "Id": string;
                    "InputRuleParam": {
                        "Id": any;
                        "condition": string;
                        "label": any;
                        "field": any;
                        "operator": any;
                        "value": any;
                        "type": any;
                        "rules": any[];
                    };
                }[];
            }[];
            "QryBldr_B": any;
            "Rpt": {
                "FlNm": string;
                "FlTyp": any;
            };
            "ColumnsModel": any;
            "QueryParams": any;
        };
        GetMonthlyTrend(): {
            "QryBldrLstA": {
                "QryCntnr": {
                    "Id": string;
                    "QMD": {
                        "condition": string;
                        "rules": {
                            "Id": any;
                            "condition": any;
                            "label": string;
                            "field": string;
                            "operator": string;
                            "value": string;
                            "type": string;
                            "rules": any;
                        }[];
                    };
                };
                "QuerySetComp": {
                    "SelectFields": {
                        "Name": string;
                        "Alias": any;
                        "RunTimeTableName": any;
                        "TemplateName": string;
                        "FullName": string;
                        "FullName_2": string;
                        "IsGroupBy": boolean;
                        "Hide": boolean;
                        "UnionTableName": any;
                        "Value": string;
                        "IsSelected": boolean;
                        "GroupRuleId": string;
                        "CurFldNm": string;
                        "Cs": any;
                        "IsCs": boolean;
                        "GB": boolean;
                        "AG": string;
                        "OtPt": any;
                        "Ma__in_Id": any;
                        "Apd": any;
                    }[];
                    "CaseFields": any;
                    "QryVar": {
                        "Id": any;
                        "Name": string;
                        "Value": any;
                    }[];
                };
                "ParamQryBldrList": {
                    "Id": string;
                    "InputRuleParam": {
                        "Id": any;
                        "condition": string;
                        "label": any;
                        "field": any;
                        "operator": any;
                        "value": any;
                        "type": any;
                        "rules": any[];
                    };
                }[];
            }[];
            "QryBldr_B": any;
            "Rpt": {
                "FlNm": string;
                "FlTyp": any;
            };
            "ColumnsModel": any;
            "QueryParams": any;
        };
        GetMonthlyVolTrend(): {
            "QryBldrLstA": {
                "QryCntnr": {
                    "Id": string;
                    "QMD": {
                        "condition": string;
                        "rules": {
                            "Id": any;
                            "condition": any;
                            "label": string;
                            "field": string;
                            "operator": string;
                            "value": string;
                            "type": string;
                            "rules": any;
                        }[];
                    };
                };
                "QuerySetComp": {
                    "SelectFields": {
                        "Name": string;
                        "Alias": any;
                        "RunTimeTableName": any;
                        "TemplateName": string;
                        "FullName": string;
                        "FullName_2": string;
                        "IsGroupBy": boolean;
                        "Hide": boolean;
                        "UnionTableName": any;
                        "Value": string;
                        "IsSelected": boolean;
                        "GroupRuleId": string;
                        "CurFldNm": string;
                        "Cs": any;
                        "IsCs": boolean;
                        "GB": boolean;
                        "AG": string;
                        "OtPt": any;
                        "Ma__in_Id": any;
                        "Apd": any;
                        "IsUpvt": boolean;
                    }[];
                    "CaseFields": any;
                    "QryVar": any;
                };
                "ParamQryBldrList": any[];
            }[];
            "QryBldr_B": any;
            "Rpt": {
                "FlNm": string;
                "FlTyp": any;
            };
            "ColumnsModel": any;
            "QueryParams": any;
        };
        GetChnnls(): {
            "QryBldrLstA": {
                "QryCntnr": {
                    "Id": string;
                    "QMD": {
                        "condition": string;
                        "rules": {
                            "Id": any;
                            "condition": any;
                            "label": string;
                            "field": string;
                            "operator": string;
                            "value": string;
                            "type": string;
                            "rules": any;
                        }[];
                    };
                };
                "QuerySetComp": {
                    "SelectFields": {
                        "Name": string;
                        "Alias": any;
                        "RunTimeTableName": any;
                        "TemplateName": string;
                        "FullName": string;
                        "FullName_2": string;
                        "IsGroupBy": boolean;
                        "Hide": boolean;
                        "UnionTableName": any;
                        "Value": string;
                        "IsSelected": boolean;
                        "GroupRuleId": string;
                        "CurFldNm": string;
                        "Cs": any;
                        "IsCs": boolean;
                        "GB": boolean;
                        "AG": string;
                        "OtPt": any;
                        "Ma__in_Id": any;
                        "Apd": any;
                        "IsUpvt": boolean;
                    }[];
                    "CaseFields": any;
                    "QryVar": {
                        "Id": any;
                        "Name": string;
                        "Value": any;
                    }[];
                };
                "ParamQryBldrList": {
                    "Id": string;
                    "InputRuleParam": {
                        "Id": any;
                        "condition": string;
                        "label": any;
                        "field": any;
                        "operator": any;
                        "value": any;
                        "type": any;
                        "rules": any[];
                    };
                }[];
            }[];
            "QryBldr_B": any;
            "Rpt": {
                "FlNm": string;
                "FlTyp": any;
            };
            "ColumnsModel": any;
            "QueryParams": any;
        };
        GetUSSD6MthsSmry(): {
            "QryBldrLstA": {
                "SplitQry": boolean;
                "QryCntnr": {
                    "Id": string;
                    "QMD": {
                        "condition": string;
                        "rules": {
                            "Id": any;
                            "condition": any;
                            "label": string;
                            "field": string;
                            "operator": string;
                            "value": string;
                            "type": string;
                            "rules": any;
                        }[];
                    };
                };
                "QuerySetComp": {
                    "SelectFields": {
                        "Name": string;
                        "Alias": any;
                        "RunTimeTableName": any;
                        "TemplateName": string;
                        "FullName": string;
                        "FullName_2": string;
                        "IsGroupBy": boolean;
                        "Hide": boolean;
                        "UnionTableName": any;
                        "Value": string;
                        "IsSelected": boolean;
                        "GroupRuleId": string;
                        "CurFldNm": string;
                        "Cs": any;
                        "IsCs": boolean;
                        "GB": boolean;
                        "AG": string;
                        "OtPt": any;
                        "Ma__in_Id": any;
                        "Apd": any;
                        "IsUpvt": boolean;
                    }[];
                    "CaseFields": any;
                    "QryVar": {
                        "Id": any;
                        "Name": string;
                        "Value": any;
                    }[];
                };
                "ParamQryBldrList": any[];
            }[];
            "QryBldr_B": any;
            "Rpt": {
                "FlNm": string;
                "FlTyp": any;
            };
            "ColumnsModel": any;
            "QueryParams": any;
        };
        GetBranches(): {
            "QryBldrLstA": {
                "QryCntnr": {
                    "Id": string;
                    "QMD": {
                        "condition": string;
                        "rules": {
                            "Id": any;
                            "condition": any;
                            "label": string;
                            "field": string;
                            "operator": string;
                            "value": string;
                            "type": string;
                            "rules": any;
                        }[];
                    };
                };
                "QuerySetComp": {
                    "SelectFields": {
                        "Name": string;
                        "Alias": any;
                        "RunTimeTableName": any;
                        "TemplateName": string;
                        "FullName": string;
                        "FullName_2": string;
                        "IsGroupBy": boolean;
                        "Hide": boolean;
                        "UnionTableName": any;
                        "Value": string;
                        "IsSelected": boolean;
                        "GroupRuleId": string;
                        "CurFldNm": string;
                        "Cs": any;
                        "IsCs": boolean;
                        "GB": boolean;
                        "AG": any;
                        "OtPt": any;
                        "Ma__in_Id": any;
                        "Apd": any;
                    }[];
                    "CaseFields": any;
                    "QryVar": {
                        "Id": any;
                        "Name": string;
                        "Value": any;
                    }[];
                };
                "ParamQryBldrList": any[];
            }[];
            "QryBldr_B": any;
            "Rpt": {
                "FlNm": string;
                "FlTyp": any;
            };
            "ColumnsModel": any;
            "QueryParams": any;
        };
        GetAdminBranches(): {
            "QryBldrLstA": {
                "QryCntnr": {
                    "Id": string;
                    "QMD": {
                        "condition": string;
                        "rules": {
                            "Id": any;
                            "condition": any;
                            "label": string;
                            "field": string;
                            "operator": string;
                            "value": string;
                            "type": string;
                            "rules": any;
                        }[];
                    };
                };
                "QuerySetComp": {
                    "SelectFields": {
                        "Name": string;
                        "Alias": any;
                        "RunTimeTableName": any;
                        "TemplateName": string;
                        "FullName": string;
                        "FullName_2": string;
                        "IsGroupBy": boolean;
                        "Hide": boolean;
                        "UnionTableName": any;
                        "Value": string;
                        "IsSelected": boolean;
                        "GroupRuleId": string;
                        "CurFldNm": string;
                        "Cs": any;
                        "IsCs": boolean;
                        "GB": boolean;
                        "AG": any;
                        "OtPt": any;
                        "Ma__in_Id": any;
                        "Apd": any;
                        "IsUpvt": boolean;
                    }[];
                    "CaseFields": any;
                    "QryVar": any;
                };
                "ParamQryBldrList": any[];
            }[];
            "QryBldr_B": any;
            "Rpt": {
                "FlNm": string;
                "FlTyp": any;
            };
            "ColumnsModel": any;
            "QueryParams": any;
        };
        private GetSpndAnlyzrTnt;
        private GetParamList;
    }
}
declare namespace SpendAnalyzer.BusinessObjects {
    class DsdBrdTp10ChnnlGrd {
        grd: ej.grids.Grid;
        constructor();
        Load(ds: any): void;
    }
}
declare namespace SpendAnalyzer.BusinessObjects {
    class DsdBrdTp10SpdTypGrd {
        grd: ej.grids.Grid;
        constructor();
        Load(ds: any): void;
    }
}
declare namespace SpendAnalyzer.BusinessObjects {
    class DshBrdChnlSpdTypPie {
        private _Pie;
        private _ds;
        private _ani;
        constructor();
        private Pie;
        UpdatePie(res: any): void;
        private PieDrl;
        private PointClick;
        private GetSeries;
        private GetSeries2;
    }
}
declare namespace SpendAnalyzer.BusinessObjects {
    class DshBrdCrdRpstry implements EventTarget {
        private delegate;
        onLoad: (res: any) => void;
        Suffix: string;
        Res: [];
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        dispatchEvent(event: Event): boolean;
        removeEventListener(type: string, callback: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
        Load(_startDate: any, _endDate: any): void;
    }
}
declare namespace SpendAnalyzer.BusinessObjects {
    class DtMgr {
        constructor();
        static GetDatePresets(): any[];
        static GetPrevStartDate(date: any, nOfMths: any): string;
        static GetPrevEndDate(date: any, nOfMths: any): string;
        static GetDate(propName: string): string;
    }
}
declare namespace SpendAnalyzer.BusinessObjects {
    class HrdrsRpstry implements EventTarget {
        private delegate;
        onLoad: (hrdrs: HrdrsRpstry) => void;
        Suffix: string;
        Res: [];
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        dispatchEvent(event: Event): boolean;
        removeEventListener(type: string, callback: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
        Load(tblNm: any, prfx: any, suffix: any): void;
        getCols(cols: any): any;
    }
}
declare namespace SpendAnalyzer.BusinessObjects {
    class Lyt {
        private trgrtdLyt;
        constructor();
        private SetSdBr;
        private CrdsBtns;
        Load(): void;
        Load2(): void;
        Load3(): void;
        private SdBrPaneOneComp;
        onDateRangeChange(args: any): void;
    }
}
declare namespace SpendAnalyzer.BusinessObjects {
    class Mdl {
        constructor();
    }
}
declare namespace SpendAnalyzer.BusinessObjects {
    class SdBr {
        private progressButton;
        private cst_Sgmnt;
        private ageRange;
        private product;
        private tenure;
        private currCode;
        private accountType;
        private progressBar;
        treeVw: ej.navigations.TreeView;
        private appRpstry;
        constructor(appRpstry: AppRpstry);
        GetSubmitButton(): ej.splitbuttons.ProgressButton;
        SetSdBr(): void;
        UpdateValues(): void;
        FetchBranches(): void;
        SetTree(data: any): void;
    }
}
declare namespace SpendAnalyzer.BusinessObjects {
    class SmplVizInitzn {
        constructor();
    }
}
declare namespace SpendAnalyzer.BusinessObjects {
    class SngltnAggrgtRpstry implements EventTarget {
        private delegate;
        onLoad: (res: []) => void;
        Suffix: string;
        Res: [];
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        dispatchEvent(event: Event): boolean;
        removeEventListener(type: string, callback: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
        Load(_cols: any, _colsSm: any, _colRplc: any, _srcTl: any, _startDate: any, _endDate: any): void;
    }
}
declare namespace SpendAnalyzer.BusinessObjects {
    class SngltnRpstry implements EventTarget {
        private delegate;
        onLoad: (res: []) => void;
        Suffix: string;
        Res: [];
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        dispatchEvent(event: Event): boolean;
        removeEventListener(type: string, callback: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
        Load(_cols1: any, _cols2: any, _srcTl: any, _startDate: any, _endDate: any): void;
    }
}
declare namespace SpendAnalyzer.BusinessObjects {
    class SpdAnlyzrUtil {
        static FormatNumber(numString: string): any;
        static FormatTreeVwData(data: any, chckdLstStringified?: string): any[];
        private static IsChckd;
        private static GetTreeNode;
        static GetChckdBrnchs(treeVw: ej.navigations.TreeView): string;
        static ExandNodes(treeVw: ej.navigations.TreeView): void;
    }
}
declare namespace SpendAnalyzer.BusinessObjects {
    class SpndAnlyzrLyt {
        private appRpstry;
        private spdAnlyzrTab;
        private crdScr;
        private cntrlrSpdDshBrd;
        private chnnlAnlytcsCntrlr;
        private modelController;
        private cntrlrCmpgn;
        private sdBr;
        private spdAnlyzrTabSlctdIndex;
        private spnd_dshbrd_container_b_tab;
        private isOnceOpenedWorkSpace;
        constructor();
    }
}
declare namespace SpendAnalyzer.BusinessObjects {
    class SpndAnlyzrLytHome {
        private appRpstry;
        private cntrlrHome;
        private sdBr;
        constructor();
    }
}
declare namespace SpendAnalyzer.BusinessObjects {
    class SvcRqst implements EventTarget {
        private delegate;
        onLoad: (res: any) => void;
        private dataStoreList;
        private dataStore;
        constructor();
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        dispatchEvent(event: Event): boolean;
        removeEventListener(type: string, callback: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
        Load(rqstObj: any, appRpstryCntxt?: AppRpstryCntxt, cache?: boolean): void;
        private Exist;
        GetCached(appRpstryCntxt: AppRpstryCntxt): object;
        private Cache;
        RemoveCache(appRpstryCntxt: AppRpstryCntxt): void;
    }
}
declare namespace SpendAnalyzer.BusinessObjects {
    class TrgrtdAnlysLnChrt {
        private _lnChrt;
        IsInitiated: boolean;
        constructor();
        Init(res: any): void;
        private GetLineChart;
        private GetSeries;
        UpdateLnChart(res: any): void;
        private prog_Bar;
        ShowPreLoader(): void;
        HidePreLoader(): void;
    }
}
declare namespace SpendAnalyzer.BusinessObjects {
    class TrgrdLyt {
        private appRpstry;
        private svcRqst;
        private intl;
        private lnChart;
        private _smplVizInitzn;
        private _trgtdAnlysCrds;
        private _trgtdTop10Chnls;
        private progressButton;
        constructor();
        IsSideBarInit: boolean;
        SetSdBr(): void;
        private SetHndlrs;
    }
}
declare namespace SpendAnalyzer.BusinessObjects {
    class TrgtdAnlysCrds {
        private intl;
        private svcRqst;
        private appRpstry;
        progressButton_CstmrsCnt: ej.splitbuttons.ProgressButton;
        isCustomerCntMntlyInit: boolean;
        constructor(appRpstry: AppRpstry, svcRqst: SvcRqst);
        SetCstmrCnt(res: any): void;
        SetCrdsVals(res: any): void;
        private CrdsBtns;
        private monthlyAcquisition;
        private monthlyTab;
        private cstmrsCnt_Dlg;
        RndrMonthlyAcquisitionLnChrt(res: any): void;
        UpdateMonthlyAcquisitionLnChrt(res: any): void;
    }
}
declare namespace SpendAnalyzer.BusinessObjects {
    class TrgtdAnlysTop10Chnnls {
        private _top10Chnls;
        Top10Chnls(ds: any): void;
    }
}
declare namespace SpendAnalyzer.BusinessObjects {
    class ChnnlAnlytcsCntrlr {
        private appRpstry;
        private intl;
        chnnlAnlytcsVz: ChnnlAnlytcsVz;
        dataLayer: ChnnlAnlytcsDL;
        static chnnlAnlytcsCntrlr: ChnnlAnlytcsCntrlr;
        private progressBar;
        private channel_analytics_tab;
        constructor(appRpstry: AppRpstry);
        private _dataVzCntxt;
        get DataVzCntxt(): ChnnlAnlytcsVz.DataVzCntxt;
        set DataVzCntxt(val: ChnnlAnlytcsVz.DataVzCntxt);
        Start(): void;
        private SetHndlrs;
        private GetChannel6MthsSmry;
        private GetUSSD6MthsSmry;
        private cnt;
        private soft_bg;
        private small_chart;
        private LoadCards;
    }
}
declare namespace SpendAnalyzer.BusinessObjects {
    class CntrlrCmpgn {
        private appRpstry;
        private svcRqst;
        private intl;
        private vzCmpgn;
        private progressBar;
        constructor(appRpstry: AppRpstry);
        Start(): void;
        private SetHndlrs;
    }
}
declare namespace SpendAnalyzer.BusinessObjects {
    class CntrlrCrdScr {
        private accountNumber;
        private grpAccountNumber1;
        private grpAccountNumber2;
        private grpAccountNumber3;
        private grpAccountNumber4;
        constructor();
    }
}
declare namespace SpendAnalyzer.BusinessObjects {
    class CntrlrHome implements EventTarget {
        private delegate;
        onComplete: () => void;
        onLoad: () => void;
        private appRpstry;
        private svcRqst;
        private intl;
        private progressBar;
        private progressBarForActiveCstmrs;
        private isLoaded;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        dispatchEvent(event: Event): boolean;
        removeEventListener(type: string, callback: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
        constructor(appRpstry: AppRpstry);
        Start(): void;
        private SetHndlrs;
        private Render;
    }
}
declare namespace SpendAnalyzer.BusinessObjects {
    class ModelController {
        private appRpstry;
        private svcRqst;
        private intl;
        private modelVz;
        private progressBar;
        private dataLayer;
        private tooltipBOBR;
        constructor(appRpstry: AppRpstry);
        private _dataVzCntxt;
        get DataVzCntxt(): ModelVz.DataVzCntxt;
        set DataVzCntxt(val: ModelVz.DataVzCntxt);
        Start(): void;
        private SetHndlrs;
        private SetTootlTip;
    }
}
declare namespace SpendAnalyzer.BusinessObjects {
    class SpdDshBrdCntrlr implements EventTarget {
        private delegate;
        onComplete: () => void;
        onLoad: () => void;
        private appRpstry;
        private svcRqst;
        private dataLayer;
        private intl;
        private spdDshBrdVz;
        private progressBar;
        private progressBarB;
        private progressBarC;
        private dataTrend;
        private isLoaded;
        private cntrlrCntxt;
        private spnd_dshbrd_container_b_tab;
        private spnd_dshbrd_container_c_tab;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        dispatchEvent(event: Event): boolean;
        removeEventListener(type: string, callback: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
        constructor(appRpstry: AppRpstry);
        private _dataVzCntxt;
        get DataVzCntxt(): SpdDshBrdVz.DataVzCntxt;
        set DataVzCntxt(val: SpdDshBrdVz.DataVzCntxt);
        Start(): void;
        SetCrdsVals(res: any): void;
        private SetHndlrs;
        private RenderSectionA;
        private cnt;
        private soft_bg;
        private GetTopSpndCtgryTmplt;
    }
}
declare namespace SpendAnalyzer.BusinessObjects {
    class ChnnlAnlytcsDL implements EventTarget {
        private delegate;
        private appRpstry;
        private svcRqst;
        private chnnlAnlyticsTrnxnSmryLst;
        onReady: (res: any) => void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        dispatchEvent(event: Event): boolean;
        removeEventListener(type: string, callback: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
        constructor(appRpstry: AppRpstry);
        private _dataLayerCntxt;
        get DataLayerCntxt(): any;
        set DataLayerCntxt(val: any);
        GetChannelsTrxnSmry(): void;
        GetUSSD6MthsSmry(): void;
        private SetHndlr;
        private GetData;
        private GetTrnxSmry;
    }
}
declare namespace SpendAnalyzer.BusinessObjects.ChnnlAnlytcsDL {
    interface ChannelTrnxnSmry {
        DateStamp: any;
        Channel: any;
        TrnxnCnt: any;
        TrnxnAmt: any;
    }
}
declare namespace SpendAnalyzer.BusinessObjects {
    class ModelDL implements EventTarget {
        private delegate;
        private appRpstry;
        private svcRqst;
        private model;
        onReady: (res: any) => void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        dispatchEvent(event: Event): boolean;
        removeEventListener(type: string, callback: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
        constructor(appRpstry: AppRpstry);
        private _dataLayerCntxt;
        get DataLayerCntxt(): any;
        set DataLayerCntxt(val: any);
        GetBOBR(): void;
        GetEHVDM(): void;
        GetDRIP(): void;
        GetRGS(): void;
        private SetHndlr;
    }
}
declare namespace SpendAnalyzer.BusinessObjects.ModelDL {
    interface Model {
        x: any;
        y: any;
    }
}
declare namespace SpendAnalyzer.BusinessObjects {
    class SpdDshBrdDL implements EventTarget {
        private delegate;
        private appRpstry;
        private svcRqst;
        private sectionAData;
        private sectionBData;
        private sectionCData;
        private trnxSumry;
        onReady: (res: any) => void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        dispatchEvent(event: Event): boolean;
        removeEventListener(type: string, callback: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
        constructor(appRpstry: AppRpstry);
        private _dataLayerCntxt;
        get DataLayerCntxt(): any;
        set DataLayerCntxt(val: any);
        GetSectionA(): void;
        GetSectionB(): void;
        GetSectionC(): void;
        GetSectionCTab1(): void;
        GetTrnxSumry(): void;
        GetTrnxSumryForVol(): void;
        private SetHndlr;
        private GetData;
        private GetTrnxSmry;
        private GetTrnxSmryForVol;
    }
}
declare namespace SpendAnalyzer.BusinessObjects.SpdDshBrdDL {
    interface SestionA {
        CustomerCount: any;
        ActiveCustomers: any;
        CrValue: any;
        CrVolume: any;
        DrValue: any;
        DrVolume: any;
    }
    interface SestionB {
        TotalCr: any;
        TotalDr: any;
        TotalCrValue: any;
        TotalCrVolume: any;
        TotalDrValue: any;
        TotalDrVolume: any;
        Trends: Array<TrnxSumry>;
    }
    interface SestionC {
        SpendType: any;
        TrnxnCnt: any;
        TrnxnAmt: any;
    }
    interface TrnxSumry {
        DateStamp: any;
        TrnxType: any;
        TotalCr: any;
        TotalCrVolume: any;
        TotalDr: any;
        TotalDrVolume: any;
    }
}
declare namespace SpendAnalyzer.BusinessObjects {
    class TmpltDL implements EventTarget {
        private delegate;
        private appRpstry;
        private svcRqst;
        onReady: (res: any) => void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        dispatchEvent(event: Event): boolean;
        removeEventListener(type: string, callback: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
        constructor(appRpstry: AppRpstry);
        private _dataLayerCntxt;
        get DataLayerCntxt(): any;
        set DataLayerCntxt(val: any);
        private SetHndlr;
    }
}
declare namespace SpendAnalyzer.BusinessObjects.SpdDshBrdDL {
    interface NewInterface {
    }
}
declare namespace SpendAnalyzer.BusinessObjects {
    class ChnnlAnlytcsVz {
        private varNmPrfx;
        private dlg;
        private trnxnByValue;
        constructor();
        SetDlg(): void;
        private chart;
        private SetChart;
        GetSeries(dataSrc: any): ej.charts.SeriesModel;
        SetTrnxnByValueChart(): void;
        GetTrnxnByValueSeries(dataSrc: any): {
            type: string;
            dataSource: ej.data.DataManager;
            xName: string;
            width: number;
            marker: {
                visible: boolean;
                width: number;
                height: number;
                fill: string;
                border: {
                    width: number;
                    color: string;
                };
            };
            yName: string;
            enableTooltip: boolean;
            border: {
                width: number;
                color: string;
            };
            fill: string;
            cornerRadius: {
                topLeft: number;
                topRight: number;
            };
        }[];
        RenderChart(header: any, series: any, dataVzCntxt: ChnnlAnlytcsVz.DataVzCntxt): void;
    }
}
declare namespace SpendAnalyzer.BusinessObjects.ChnnlAnlytcsVz {
    enum DataVzCntxt {
        ChannelAnalyticsSmry = 1,
        ChannelSmryDetails = 2,
        Channel6MthsSmry = 3,
        TrnxnByValue = 4,
        TrnxnByVolume = 5
    }
}
declare namespace SpendAnalyzer.BusinessObjects {
    class ModelVz {
        private chartBOBR;
        private chartEHVDM;
        private chartDRIP;
        private chartRGS;
        constructor();
        RenderChart(series: any, dataVzCntxt: ModelVz.DataVzCntxt): void;
        SetBOBRChart(): void;
        GetBOBRSeries(res: any): ej.charts.SeriesModel[];
        SetEHVDMChart(): void;
        GetEHVDMSeries(res: any): ej.charts.SeriesModel[];
        SetDRIPChart(): void;
        GetDRIPSeries(res: any): ej.charts.SeriesModel[];
        SetRGSChart(): void;
        GetRGSSeries(res: any): ej.charts.SeriesModel[];
    }
}
declare namespace SpendAnalyzer.BusinessObjects.ModelVz {
    enum DataVzCntxt {
        BOBR = 1,
        EHVDM = 2,
        DRIP = 3,
        RGS = 4
    }
}
declare namespace SpendAnalyzer.BusinessObjects {
    class SpdDshBrdVz {
        private varNmPrfx;
        private dlg;
        private colSpendCategoryChrt;
        constructor();
        SetDlg(): void;
        RenderChart(series: any, dataVzCntxt: SpdDshBrdVz.DataVzCntxt, header?: string): void;
        private colChrt;
        private SetChart;
        private cstmrsTrnxnTrendChart;
        SetCstmrsTrnxnTrendChart(): void;
        GetGetCstmrsTrnxTrndSeries(res: any): ej.charts.SeriesModel[];
        private trnxnVolumeByMonth;
        SetTrnxnVolumeByMonthChart(): void;
        GetTrnxnVolumeByMonthSeries(res: any): ej.charts.SeriesModel[];
        GetCrTrendSeries(dataSrc: any): {
            type: string;
            dataSource: ej.data.DataManager;
            query: ej.data.Query;
            xName: string;
            width: number;
            marker: {
                visible: boolean;
                width: number;
                height: number;
                fill: string;
                border: {
                    width: number;
                    color: string;
                };
            };
            yName: string;
            enableTooltip: boolean;
            border: {
                width: number;
                color: string;
            };
            fill: string;
        }[];
        GetDrTrendSeries(dataSrc: any): {
            type: string;
            dataSource: ej.data.DataManager;
            query: ej.data.Query;
            xName: string;
            width: number;
            marker: {
                visible: boolean;
                width: number;
                height: number;
                fill: string;
                border: {
                    width: number;
                    color: string;
                };
            };
            yName: string;
            enableTooltip: boolean;
            border: {
                width: number;
                color: string;
            };
            fill: string;
        }[];
        SetSpendCategoryChart(): void;
        GetSpendCategoryChartSeries(dataSrc: any): {
            type: string;
            dataSource: ej.data.DataManager;
            xName: string;
            width: number;
            marker: {
                visible: boolean;
                width: number;
                height: number;
                fill: string;
                border: {
                    width: number;
                    color: string;
                };
            };
            yName: string;
            enableTooltip: boolean;
            border: {
                width: number;
                color: string;
            };
            fill: string;
            cornerRadius: {
                topLeft: number;
                topRight: number;
            };
        }[];
        GetMonthlyAcquisitionSeries(res: any): ej.charts.SeriesModel[];
    }
}
declare namespace SpendAnalyzer.BusinessObjects.SpdDshBrdVz {
    enum DataVzCntxt {
        SectionA = 1,
        SectionB = 2,
        SectionC = 3,
        SectionCTab1 = 4,
        SectionACrValTrend = 5,
        SectionACrVolTrend = 6,
        SectionADrValTrend = 7,
        SectionADrVolTrend = 8,
        SectionBTab1 = 9
    }
}
declare namespace SpendAnalyzer.BusinessObjects {
    class VzCmpgn {
        private usCsBySgmntPie;
        constructor();
        RenderChart(series: any, appRpstryCntxt: AppRpstryCntxt): void;
        private SetUsCsBySgmntPieChart;
        GetUsCsBySgmntPieChartSeries(ds: any): ej.charts.AccumulationSeriesModel[];
    }
}
declare namespace SpendAnalyzer.Membership {
    class LoginPanel extends Serenity.PropertyPanel<LoginRequest, any> {
        protected getFormKey(): string;
        constructor(container: JQuery);
        protected redirectToReturnUrl(): void;
        protected getTemplate(): string;
    }
}
declare namespace SpendAnalyzer.Membership {
    class ChangePasswordPanel extends Serenity.PropertyPanel<ChangePasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace SpendAnalyzer.Membership {
    class ForgotPasswordPanel extends Serenity.PropertyPanel<ForgotPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace SpendAnalyzer.Membership {
    class ResetPasswordPanel extends Serenity.PropertyPanel<ResetPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace SpendAnalyzer.Membership {
    class SignUpPanel extends Serenity.PropertyPanel<SignUpRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
