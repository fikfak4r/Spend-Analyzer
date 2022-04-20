namespace SmoothData.BusinessObjects {
    export namespace BaseQryService {
        export const baseUrl = 'BusinessObjects/BaseQry';

        export declare function Create(request: Serenity.SaveRequest<BaseQryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<BaseQryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<BaseQryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<BaseQryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function ListFE(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<BaseQryFERow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "BusinessObjects/BaseQry/Create",
            Update = "BusinessObjects/BaseQry/Update",
            Delete = "BusinessObjects/BaseQry/Delete",
            Retrieve = "BusinessObjects/BaseQry/Retrieve",
            List = "BusinessObjects/BaseQry/List",
            ListFE = "BusinessObjects/BaseQry/ListFE"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List', 
            'ListFE'
        ].forEach(x => {
            (<any>BaseQryService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
