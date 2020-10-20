import React from 'react';
import { Table } from 'reactstrap';
import { useSelector } from "react-redux";
import { NewListElement } from './NewListElement';

export const NewDoctorList = () => {

    const stateDate = useSelector(state => state);

    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Practising At</th>
                        <th>Speciality</th>
                        <th>Consult Fees</th>
                        <th>Experience</th>
                        <th>Shedule</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {stateDate.DocList.map(doc =>
                        <NewListElement doctor={doc} key={doc.phone} />
                    )}
                </tbody>
            </Table>
        </div>
    )
}

export default NewDoctorList
