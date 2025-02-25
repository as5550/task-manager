import React from 'react';
import './Sidebar.css';

const Sidebar = ({ setActiveSection }) => {
  return (
    <div className="sidebar">
      <h2>Task Status</h2>
      <ul>
        <li onClick={() => setActiveSection('upcoming')}>Upcoming Tasks</li>
        <li onClick={() => setActiveSection('overdue')}>Overdue Tasks</li>
        <li onClick={() => setActiveSection('completed')}>Completed Tasks</li>
        <li onClick={() => setActiveSection('all')}>AllTasks</li>
      </ul>
    </div>
  );
};

export default Sidebar;
