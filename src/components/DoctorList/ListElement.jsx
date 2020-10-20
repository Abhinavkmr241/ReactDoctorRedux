import React, { useState } from 'react';
import Modal from 'react-modal';
import { SetAvailability } from './SetAvailability';
import './ListElement.css';

Modal.setAppElement('#root');
export const ListElement = ({ doctor }) => {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <tr>
            <td>{doctor.name.full}</td>
            <td>{doctor.email}</td>
            <td>{doctor.phone}</td>
            <td>{doctor.hasOwnProperty('location') ?
                (doctor.location.city + ", " + doctor.location.state) : 'N/A'}
            </td>
            <td>{doctor.hasOwnProperty('_specialty') ?
                doctor._specialty.name : 'N/A'}
            </td>
            <td>{doctor.fee}</td>
            <td>{doctor.totalAppointment}</td>
            <td>
                <button onClick={() => setModalIsOpen(true)}>See</button>
                <Modal className="modalView" isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} >
                    <h4>Timing</h4>
                    <SetAvailability key={doctor._id} availability={doctor.availability} />
                </Modal>
            </td>
            <td>{(doctor.isActive) ? 'Active' : 'Inactive'}</td>
        </tr>
    )
}

export default ListElement
