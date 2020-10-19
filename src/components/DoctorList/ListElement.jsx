import React from 'react'

export const ListElement = (doctor) => {

    return (
        <tr>
                <td>{doctor.doctor.name.full}</td>
                <td>{doctor.doctor.email}</td>
                <td>{doctor.doctor.phone}</td>
                <td>{doctor.doctor.hasOwnProperty('location') ? 
                    (doctor.doctor.location.city + ", "+ doctor.doctor.location.state): 'N/A'}</td>
                <td>{doctor.doctor._specialty.name}</td>
                <td>{doctor.doctor.fee}</td>
                <td>{doctor.doctor.totalAppointment}</td>
                <td><button>See</button></td>
                <td>{(doctor.doctor.isActive) ? 'Active' : 'Inactive'}</td>
            </tr>
    )
}

export default ListElement
