"use client"
import React from 'react';

const ConfirmationComponent = ({ course, date }) => {
    return (
        <div class='confirmation'>
            <h2>Attendance Confirmed</h2>
            <p>You have successfully marked attendance for:</p>
            <p>Course: {course}</p>
            <p>Date: {date}</p>
        </div>
    );
};

export default ConfirmationComponent;
