"use client"
import React from 'react';
import LoginComponent from './LoginComponent';
import DashboardComponent from './DashboardComponent';
import AttendanceMarkingComponent from './AttendanceMarkingComponent';
import ConfirmationComponent from './ConfirmationComponent';

class app extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      upcomingClasses: [
        { course: 'Math', date: '2023-08-29', time: '10:00 AM' },
        { course: 'Science', date: '2023-08-29', time: '2:00 PM' },
        { course: 'Computer Science', date: '2023-08-29', time: '1:00 PM' },
      ],
      selectedClass: null,
    };
  }

  handleLogin = () => {
    // Simulate successful login for demonstration purposes
    this.setState({ isLoggedIn: true });
  };

  handleMarkAttendance = (classInfo) => {
    // Set selectedClass and show attendance marking screen
    this.setState({ selectedClass: classInfo });
  };

  handleAttendanceConfirmation = () => {
    // Clear selectedClass and show confirmation screen
    this.setState({ selectedClass: null });
  };

  render() {
    const { isLoggedIn, upcomingClasses, selectedClass } = this.state;

    return (
      <div className="app">
        {isLoggedIn ? (
          selectedClass ? (
            <AttendanceMarkingComponent
              classDetails={selectedClass}
              onAttendanceConfirmed={this.handleAttendanceConfirmation}
            />
          ) : (
            <DashboardComponent
              upcomingClasses={upcomingClasses}
              onMarkAttendance={this.handleMarkAttendance}
            />
          )
        ) : (
          <LoginComponent onLogin={this.handleLogin} />
        )}

        {selectedClass === null ? null : (
          <ConfirmationComponent
            course={selectedClass.course}
            date={selectedClass.date}
          />
        )}
      </div>
    );
  }
}

export default app;