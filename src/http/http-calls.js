import { makePostRequest } from './http-service';

export const getDoctorList = () => {
    return new Promise((resolve, reject) => {
        makePostRequest(
            "https://api-dev.askvaidya.in/admin/v1/doctors",
            true,
            {
                pageNumber: 1,
                pageSize: 10,
                filtres: {}
            }
        )
        .then(res => {
            resolve(res);
        })
        .catch(e => {
            console.log("API call error: ", e);
            reject(e);
        });
    });
}