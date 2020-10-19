import React, { Component } from 'react';
import { makePostRequest } from '../../http/http-service';
import './DoctorList.css';
import { Table } from 'reactstrap';
import { ListElement } from './ListElement';
import { Pagination } from './Pagination';

export class DoctorList extends Component {

    state = {
        doctors: [],
        totalCount: '',
        pageNumber: 1,
        pageSize: 10
    }

    componentDidMount() {
        makePostRequest('https://api-dev.askvaidya.in/admin/v1/doctors', true, {
            pageNumber: this.state.pageNumber,
            pageSize: 10,
            filters: {}
        }).then(res => {
            console.log(res)
            this.setState({
                doctors: res.doctors,
                totalCount: res.totalCount
            })
        }).catch(e => console.log(e));
    }

    // componentDidUpdate() {
    //     makePostRequest('https://api-dev.askvaidya.in/admin/v1/doctors', true, {
    //         pageNumber: this.state.pageNumber,
    //         pageSize: 10,
    //         filters: {}
    //     }).then(res => {
    //         console.log(res)
    //         this.setState({
    //             doctors: res.doctors,
    //             totalCount: res.totalCount
    //         })
    //     }).catch(e => console.log(e));
    // }

    paginate = (pageNumber) => {
        this.setState({
            pageNumber: pageNumber
        });
    }

    render() {
        return (
            <div className="doctorListTab">
                <Table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Location</th>
                            <th>Speciality</th>
                            <th>Consult Fees</th>
                            <th>Consults</th>
                            <th>Shedule</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.doctors.map(doc => 
                            <ListElement doctor={doc} key={doc._id} />    
                        )}
                    </tbody>
                </Table>
                <Pagination pageSize={this.state.pageSize} totalCount={this.state.totalCount}
                    paginate = {this.paginate}
                />
            </div>
        )
    }
}

export default DoctorList;
