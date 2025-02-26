import React, { useState } from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, deleteTask, toggleTaskCompletion, editTask }) => {
  const [search, setSearch] = useState('');
  const [filterPriority, setFilterPriority] = useState('');
  const [filterStatus, setFilterStatus] = useState('');

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.title.toLowerCase().includes(search.toLowerCase());
    const matchesPriority = filterPriority ? task.priority === filterPriority : true;
    const matchesStatus =
      filterStatus === '' ? true : filterStatus === 'completed' ? task.completed : !task.completed;

    return matchesSearch && matchesPriority && matchesStatus;
  });

  return (
    <div className="task-list">
      <div className="filters">
        <input
          type="text"
          placeholder="Search tasks"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select onChange={(e) => setFilterPriority(e.target.value)} value={filterPriority}>
          <option value="">Priorities</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <select onChange={(e) => setFilterStatus(e.target.value)} value={filterStatus}>
          <option value="">Completion Status</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
        </select>
      </div>

      <div>
        {filteredTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleTaskCompletion={toggleTaskCompletion}
            editTask={editTask}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
