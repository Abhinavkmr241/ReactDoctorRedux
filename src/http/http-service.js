export const makePostRequest = async (
    url,
    body
) => {
    let authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlY2U0MjA0ZmZkOTliMGRkMTNhNDNjMSIsIl9pZCI6IjVlY2U0MjA0ZmZkOTliMGRkMTNhNDNjMSIsImZ1bGxOYW1lIjoiQXNrIFZhaWR5YSIsImVtYWlsIjoiYWRtaW5AYXNrLXZhaWR5YS5jb20iLCJ1c2VyVHlwZSI6IkFkbWluIiwiaXNTdXBlckFkbWluIjp0cnVlLCJpYXQiOjE2MDI1MDMwNTcsImV4cCI6MTYwNTA5NTA1N30.dfpg0kxVmq64BRwrYs769z2MOmT4Jl9of55DSOIInSk';
    let headers = {};
    headers["Authorization"] = "Bearer " + authToken;
    return new Promise((resolve, reject) => {
        try {
            fetch(url, {
                method: "POST",
                headers: headers,
                body: body
            })
                .then(
                    res => res.json(),
                    error => {
                        reject(error);
                    }
                )
                .then(
                    jsonResponse => {
                        resolve(jsonResponse);
                    },
                    error => {
                        reject(error);
                    }
                )
                .catch(error => {
                    reject(error);
                });
        } catch (e) {
            console.log(e);
            reject();
        }
    });
};