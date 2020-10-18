import React, { Component } from 'react';
// import { getDoctorList } from '../../http/http-calls';
import { makePostRequest } from '../../http/http-service'

export class DoctorList extends Component {

    // componentDidMount() {
    //     makePostRequest(
    //         "https://api-dev.askvaidya.in/admin/v1/doctors",
    //         true,
    //         {
    //             pageNumber: 1,
    //             pageSize: 10,
    //             filtres: {}
    //         }
    //     ).then(res => console.log(res));
    // }

    render() {
        return (
            <div>
                <h1>Doc List Page</h1>
            </div>
        )
    }
}

export default DoctorList;
