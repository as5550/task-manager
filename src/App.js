import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import TaskSection from './TaskSection';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const [activeSection, setActiveSection] = useState('all');
  const [showForm, SetShowForm] = useState(false);

  useEffect(() => {
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const editTask = (id, updatedTask) => {
    setTasks(tasks.map(task => (task.id === id ? updatedTask : task)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const handleClick = () => {
    SetShowForm(!showForm);
  }

  const checkStatus = (dueDate) => {
    dueDate = dueDate.split('-').join('');
    let newDate = new Date()
    let date_raw = newDate.getDate().toString(); 
    let month_raw = newDate.getMonth() > 8 ? newDate.getMonth() + 1 : '0' + (newDate.getMonth() + 1).toString();
    let year = newDate.getFullYear().toString();
    newDate = year + month_raw + date_raw;
    let status = dueDate > newDate ? 'upcoming' : 'overdue';
    return status;
  }

  const overdueTasks = tasks.filter(task => checkStatus(task.dueDate) === 'overdue' && !task.completed);
  const upcomingTasks = tasks.filter(task => checkStatus(task.dueDate) === 'upcoming' && !task.completed);
  const completedTasks = tasks.filter(task => task.completed === true);

  let sectionTasks;
  if (activeSection === 'upcoming') sectionTasks = upcomingTasks;
  if (activeSection === 'overdue') sectionTasks = overdueTasks;
  if (activeSection === 'completed') sectionTasks = completedTasks;
  if (activeSection === 'all') sectionTasks = tasks;

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <button type="submit" onClick={handleClick}>{showForm ? 'Hide' : 'Show'} Form To Add Task</button>
      {showForm && <TaskForm addTask={addTask} />}
      <Sidebar setActiveSection={setActiveSection} />
      {activeSection && activeSection !== 'all' ? (<div className="main-content">
        <h1>{activeSection.charAt(0).toUpperCase() + activeSection.slice(1)} Tasks</h1>
        <TaskSection 
         tasks={sectionTasks}
         deleteTask={deleteTask}
         toggleTaskCompletion={toggleTaskCompletion}
         editTask={editTask} />
      </div>) :
      (<TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        toggleTaskCompletion={toggleTaskCompletion}
        editTask={editTask}
      />)}
    </div>
  );
};

export default App;
