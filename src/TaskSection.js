import React from 'react';
import TaskItem from './TaskItem';

const TaskSection = ({ tasks, deleteTask, toggleTaskCompletion, editTask }) => {
  return (
    <div className="task-section">
      <ul>
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <TaskItem
                key={task.id}
                task={task}
                deleteTask={deleteTask}
                toggleTaskCompletion={toggleTaskCompletion}
                editTask={editTask}
            />
            ))
        ) : (
          <p>No tasks available</p>
        )}
      </ul>
    </div>
  );
};

export default TaskSection;
