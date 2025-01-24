import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask, fetchWeatherForTask } from '../../redux/actions/taskActions';

const TaskInput = () => {
  const [taskText, setTaskText] = useState('');
  const [priority, setPriority] = useState('medium');
  const [city, setCity] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (taskText.trim()) {
      const weather = await dispatch(fetchWeatherForTask(city));
      dispatch(addTask({ text: taskText, priority, weather }));
      setTaskText('');
      setPriority('medium');
      setCity('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow rounded p-4 mb-4">
      <div className="mb-3">
        <label htmlFor="task" className="form-label">Task</label>
        <input
          type="text"
          className="form-control"
          id="task"
          placeholder="Enter a new task"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="priority" className="form-label">Priority</label>
        <select
          className="form-select"
          id="priority"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="city" className="form-label">City (for weather)</label>
        <input
          type="text"
          className="form-control"
          id="city"
          placeholder="Enter a city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary w-100">Add Task</button>
    </form>
  );
};

export default TaskInput;