import React from 'react';


export const ShowAvailability = ({availability}) => {

    const listItem = day => {
        let str = day + " : ";
        availability[day].forEach((key, index) => {
            str += key.fromTime + " to " + key.toTime;
            if (availability[day][index + 1]) {
                str += ", ";
            }
        });
        return str;
    };

    const availList = Object.keys(availability).map(day => {
        if (availability[day].length) {
            return (
                <li>{listItem(day)}</li>
            )
        }
    })

    return (
        <div style={{backgroundColor: 'yellow', color: 'royalblue'}}>
            <ul style={{listStyleType: 'none'}}>
                {availList}
            </ul>
        </div>
    )
}

export default ShowAvailability
