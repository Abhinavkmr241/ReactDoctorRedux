import React, { Component } from 'react';
import { getDoctorList } from '../../http/http-calls';

export class DoctorList extends Component {

    componentDidMount() {
        getDoctorList().then(res => console.log(res));
    }

    render() {
        return (
            <div>
                <h1>Doc List Page</h1>
            </div>
        )
    }
}

export default DoctorList;
