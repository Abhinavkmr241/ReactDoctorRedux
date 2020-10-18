import { getToken } from "./token-interceptor";

export const makePostRequest = async (
    url,
    attachToken = false,
    params = {}
  ) => {
    let headers = {
      Accept: "application/json",
      "Content-Type": "application/json"
    };
    if (attachToken) {
      try {
        const authToken = await getToken();
        if (authToken) {
          headers["Authorization"] = "Bearer " + authToken;
        }
      } catch (e) {
        console.log("Error fetching auth token: ", e);
      }
    }
    return new Promise((resolve, reject) => {
      try {
        fetch(url, {
          method: "POST",
          headers: headers,
          body: JSON.stringify(params)
        })
          .then(
            res => res.json(),
            error => {
              reject(error);
            }
          )
          .then(
            jsonResponse => {
              if (jsonResponse.error === false) {
                resolve(jsonResponse);
              } else {
                console.log(jsonResponse);
                reject(jsonResponse);
              }
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