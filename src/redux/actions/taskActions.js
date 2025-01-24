import { 
    ADD_TASK, 
    DELETE_TASK, 
    UPDATE_TASK_PRIORITY 
  } from '../types';
  import axios from 'axios';
  
  export const addTask = (task) => {
    return (dispatch) => {
      dispatch({
        type: ADD_TASK,
        payload: {
          id: Date.now(),
          text: task.text,
          priority: task.priority || 'medium',
          weather: task.weather
        }
      });
    };
  };
  
  export const deleteTask = (taskId) => {
    return (dispatch) => {
      dispatch({
        type: DELETE_TASK,
        payload: taskId
      });
    };
  };
  
  export const updateTaskPriority = (taskId, priority) => {
    return (dispatch) => {
      dispatch({
        type: UPDATE_TASK_PRIORITY,
        payload: { id: taskId, priority }
      });
    };
  };
  
  // Weather API Integration
  export const fetchWeatherForTask = (city) => {
    const API_KEY = process.env.REACT_APP_API_KEY; 
    return async (dispatch) => {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        return response.data;
      } catch (error) {
        console.error('Weather fetch error', error);
        return null;
      }
    };
  };