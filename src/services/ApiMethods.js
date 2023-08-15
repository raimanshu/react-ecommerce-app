const ApiServices = {
    postRequest: async (apiEndpoint, payload, bearerToken = null) => {
        try {
            const headers = {};
            if (bearerToken) {
                headers.Authorization = `Bearer ${bearerToken}`;
            }
            headers["Content-Type"] = "application/json";
            const response = await fetch(apiEndpoint, {
                method: "POST",
                body: JSON.stringify(payload),
                headers,
            });
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Error:", error);
        }
    },
    getRequest: async (apiEndpoint, bearerToken = null, response_json = true) => {
        try {
            const headers = {};
            if (bearerToken) {
                headers.Authorization = `Bearer ${bearerToken}`;
            }
            const response = await fetch(apiEndpoint, {
                method: "GET",
                headers,
            });
            let data;
            if (response_json) data = await response.json();
            else data = await response;
            return data;
        } catch (error) {
            console.error("Error:", error);
        }
    },
    putRequest: async (apiEndpoint, payload, bearerToken = null) => {
        try {
            const headers = {};
            if (bearerToken) {
                headers.Authorization = `Bearer ${bearerToken}`;
            }
            headers["Content-Type"] = "application/json";
            const response = await fetch(apiEndpoint, {
                method: "PUT",
                body: JSON.stringify(payload),
                headers,
            });
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Error:", error);
        }
    },
    deleteRequest: async (
        apiEndpoint,
        bearerToken = null,
        response_json = true,
    ) => {
        try {
            const headers = {};
            if (bearerToken) {
                headers.Authorization = `Bearer ${bearerToken}`;
            }
            headers["Content-Type"] = "application/json";
            const response = await fetch(apiEndpoint, {
                method: "DELETE",
                headers,
            });
            let data;
            if (response_json) data = await response.json();
            else data = await response;
            return data;
        } catch (error) {
            console.error("Error:", error);
        }
    },
};

export default ApiServices;
