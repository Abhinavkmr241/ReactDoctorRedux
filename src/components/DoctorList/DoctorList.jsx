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
        pageSize: 10
    }

    componentDidMount() {
        makePostRequest('https://api-dev.askvaidya.in/admin/v1/doctors', true, {
            pageNumber: 1,
            pageSize: this.state.pageSize,
            filters: {}
        }).then(res => {
            this.setState({
                doctors: res.doctors,
                totalCount: res.totalCount
            })
        }).catch(e => console.log(e));
    }

    paginate = (pageNumber) => {
        makePostRequest('https://api-dev.askvaidya.in/admin/v1/doctors', true, {
            pageNumber: pageNumber,
            pageSize: this.state.pageSize,
            filters: {}
        }).then(res => {
            this.setState({
                doctors: res.doctors,
                totalCount: res.totalCount
            })
        }).catch(e => console.log(e));
    }

    render() {
        return (
            <div>
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
                <div className="paginateDetails">
                    <div>
                        <Pagination pageSize={this.state.pageSize} totalCount={this.state.totalCount}
                            paginate={this.paginate}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default DoctorList;
