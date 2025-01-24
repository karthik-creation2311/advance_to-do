import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, updateTaskPriority } from '../../redux/actions/taskActions';

const TaskList = () => {
  const { tasks } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  const handlePriorityChange = (taskId, priority) => {
    dispatch(updateTaskPriority(taskId, priority));
  };

  // Sort tasks by priority: High > Medium > Low
  const sortedTasks = [...tasks].sort((a, b) => {
    const priorityOrder = { high: 1, medium: 2, low: 3 };
    return priorityOrder[a.priority] - priorityOrder[b.priority];
  });

  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title mb-0">Tasks</h2>
      </div>
      <div className="card-body">
        {sortedTasks.length === 0 ? (
          <p className="text-center">No tasks found.</p>
        ) : (
          <ul className="list-group">
            {sortedTasks.map((task) => (
              <li key={task.id} className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <h3 className="h5">{task.text}</h3>
                  <p className="text-muted mb-1">
                    Priority: {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
                  </p>
                  {task.weather && (
                    <p className="text-muted">
                      Weather: {task.weather.weather[0].description} ({task.weather.main.temp}°C)
                    </p>
                  )}
                </div>
                <div className="d-flex align-items-center">
                  <select
                    className="form-select form-select-sm me-2"
                    style={{ width: 'auto' }}
                    value={task.priority}
                    onChange={(e) => handlePriorityChange(task.id, e.target.value)}
                  >
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                  </select>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(task.id)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TaskList;
