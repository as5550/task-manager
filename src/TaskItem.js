import React, { useState } from 'react';

const TaskItem = ({ task, deleteTask, toggleTaskCompletion, editTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);
  const [editedDescription, setEditedDescription] = useState(task.description);
  const [editedDueDate, setEditedDueDate] = useState(task.dueDate);
  const [editedPriority, setEditedPriority] = useState(task.priority);

  const handleEditSave = () => {
    editTask(task.id, { ...task, title: editedTitle, description: editedDescription, dueDate: editedDueDate, priority: editedPriority, status: task.completed ? 'completed' : 'upcoming' });
    setIsEditing(false);
  };

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <textarea
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
          ></textarea>
          <input
            type="date"
            value={editedDueDate}
            onChange={(e) => setEditedDueDate(e.target.value)}
          />
          <select
            value={editedPriority}
            onChange={(e) => setEditedPriority(e.target.value)}
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
          <button onClick={handleEditSave}>Save</button>
        </div>
      ) : (
        <div>
          <h3>{task.title} <span className="priority">{task.priority}</span></h3>
          <p>{task.description}</p>
          <p>Due: {task.dueDate}</p>
          <button onClick={() => toggleTaskCompletion(task.id)}>
            {task.completed ? 'Undo' : 'Complete'}
          </button>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default TaskItem;
