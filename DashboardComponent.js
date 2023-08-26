"use client"

import React from 'react';

const DashboardComponent = ({ upcomingClasses, onMarkAttendance }) => {
    return (
        <div className='dashboard'>
            <div class='head'><h2 >Upcoming Classes</h2></div>
            {upcomingClasses.map((classInfo, index) => (
                <div className='block' key={index}>
                    <p className='course'>{classInfo.course}</p>
                    <p className='date'>{classInfo.date} | {classInfo.time}</p>
                    <button onClick={() => onMarkAttendance(classInfo)}>Mark Attendance</button>
                </div>
            ))}
        </div>
    );
};

export default DashboardComponent;

