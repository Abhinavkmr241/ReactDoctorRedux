import React, { useState } from 'react';
import Modal from 'react-modal';
import { ShowAvailability } from './ShowAvailability';
import '../DoctorList/ListElement.css';

Modal.setAppElement('#root');
export const NewListElement = ({ doctor }) => {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <tr>
            <td>{doctor.name}</td>
            <td>{doctor.email}</td>
            <td>{doctor.phone}</td>
            <td>{doctor.practising}</td>
            <td>{doctor.speciality}</td>
            <td>{doctor.fees}</td>
            <td>{doctor.experience}</td>
            <td>
                <button onClick={() => setModalIsOpen(true)}>See</button>
                <Modal className="modalView" isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} >
                    <h4>Timing</h4>
                    <ShowAvailability key={doctor._id} availability={doctor.availability} />
                </Modal>
            </td>
            <td>Active</td>
        </tr>
    )
}

export default NewListElement
