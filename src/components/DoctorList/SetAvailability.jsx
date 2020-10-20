import React, { useState } from 'react';

export const SetAvailability = ({ availability }) => {

    const [serviceTime] = useState([
        { label: "8:00 AM", value: 8 }, { label: "9:00 AM", value: 9 }, { label: "10:00 AM", value: 10 }, { label: "11:00 AM", value: 11 }, { label: "12:00 PM", value: 12 },
        { label: "1:00 PM", value: 13 }, { label: "2:00 PM", value: 14 }, { label: "3:00 PM", value: 15 }, { label: "4:00 PM", value: 16 }, { label: "5:00 PM", value: 17 },
        { label: "6:00 PM", value: 18 }, { label: "7:00 PM", value: 19 }, { label: "8:00 PM", value: 20 }, { label: "9:00 PM", value: 21 }, { label: "10:00 PM", value: 22 }
    ])

    const [days] = useState({
        Monday: [],
        Tuesday: [],
        Wednesday: [],
        Thursday: [],
        Friday: [],
        Saturday: [],
        Sunday: []
    })

    for (let i of availability) {
        for (let j of serviceTime) {
            if (i.from === j.value) {
                i.from = j.label
            } else if (i.to === j.value) {
                i.to = j.label
            }
        }
    }

    for (let i of availability) {
        days[i.day].push({ fromTime: i.from, toTime: i.to })
    }

    const listItem = day => {
        let str = day + " : ";
        days[day].forEach((key, index) => {
            str += key.fromTime + " to " + key.toTime;
            if (days[day][index + 1]) {
                str += ", ";
            }
        });
        return str;
    };

    const availList = Object.keys(days).map(day => {
        if (days[day].length) {
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

export default SetAvailability
