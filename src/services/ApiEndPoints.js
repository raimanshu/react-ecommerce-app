const baseUrl = import.meta.env.VITE_API_BASE_URL;

const authenticationApiEndpoints = {

    saveAssetChanges: (tenantId) => {
        return `${baseUrl}/dashboard/${tenantId}/save-asset-changes/`;
    },
};
const dashboardApiEndpoints = {
    fetchUserDeals: (tenantId, params) => {
        return `${baseUrl}/dashboard/${tenantId}/fetch-user-deals/${params.queryStrings}`;
    },
};
const adminApiEndpoints = {
    assignUserRole: (tenantId) => {
        return `${baseUrl}/admin/${tenantId}/assign-user-role/`;
    },

};
const customApiEndpoints = {
    getEnum: (_, params) => {
        return `${baseUrl}/api/enum/${params.enum_type}/`;
    },
    notificationStream: () => {
        return `${baseUrl}/notif-stream/`;
    },
};

const ApiEndpoint = (props) => {
    if (authenticationApiEndpoints[props.operationName]) {
        return authenticationApiEndpoints[props.operationName](
            props.tenantId,
            props.params,
        );
    } else if (dashboardApiEndpoints[props.operationName]) {
        return dashboardApiEndpoints[props.operationName](
            props.tenantId,
            props.params,
        );
    } else if (adminApiEndpoints[props.operationName]) {
        return adminApiEndpoints[props.operationName](props.tenantId, props.params);
    } else if (customApiEndpoints[props.operationName]) {
        return customApiEndpoints[props.operationName](
            props.tenantId,
            props.params,
        );
    }
    let endpoint = baseUrl;
    if (props.tenantId && props.routeName) {
        endpoint += `/admin/${props.tenantId}`;
    } else if (props.tenantId) {
        endpoint += `/tenant/${props.tenantId}`;
    }
    if (props.entityName === "tenant") {
        endpoint += `/api/${props.entityName}/${props.operationName}/`;
    } else {
        endpoint += `/${props.entityName}/${props.operationName}/`;
    }
    if (props.requestType !== "POST" && props.entityId) {
        endpoint += `${props.entityId}/`;
    }
    if (props.requestType === "GET" && props.queryStrings) {
        endpoint += `?${props.queryStrings}`;
    }
    return endpoint;
};

export default ApiEndpoint;
