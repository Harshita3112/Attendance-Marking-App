"use client"
import React, { useState } from 'react';

const AttendanceMarkingComponent = ({ classDetails, onAttendanceConfirmed }) => {
    const [isMarkingAttendance, setIsMarkingAttendance] = useState(false);

    const handleMarkAttendance = () => {
        
        setIsMarkingAttendance(true);

        setTimeout(() => {
            setIsMarkingAttendance(false);
            onAttendanceConfirmed();
        }, 1500); 
    };

    return (
        <div class='attendence'>
           <div className='heading'> <h2>Mark Attendance</h2></div>
            <p>Course: {classDetails.course}</p>
            <p>Date: {classDetails.date}</p>
            <p>Time: {classDetails.time}</p>
            <button onClick={handleMarkAttendance} disabled={isMarkingAttendance}>
                {isMarkingAttendance ? 'Marking...' : 'Mark Attendance'}
            </button>
        </div>
    );
};

export default AttendanceMarkingComponent;
