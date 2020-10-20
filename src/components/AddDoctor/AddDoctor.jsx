import React from 'react';
import { Redirect } from 'react-router-dom';

export const AddDoctor = () => {
    return (
        <Redirect to={{
            pathname: '/add-doctor/step1'
        }} />
    )
}

export default AddDoctor
