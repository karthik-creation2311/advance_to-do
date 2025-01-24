import { 
    ADD_TASK, 
    DELETE_TASK, 
    UPDATE_TASK_PRIORITY, 
    LOAD_TASKS 
  } from '../types';
  import { saveToLocalStorage, getFromLocalStorage } from '../../utils/localStorage';
  
  const initialState = {
    tasks: getFromLocalStorage('tasks') || []
  };
  
  const taskReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TASK:
        const newTasks = [...state.tasks, action.payload];
        saveToLocalStorage('tasks', newTasks);
        return { ...state, tasks: newTasks };
      
      case DELETE_TASK:
        const filteredTasks = state.tasks.filter(task => task.id !== action.payload);
        saveToLocalStorage('tasks', filteredTasks);
        return { ...state, tasks: filteredTasks };
      
      case UPDATE_TASK_PRIORITY:
        const updatedTasks = state.tasks.map(task => 
          task.id === action.payload.id 
            ? { ...task, priority: action.payload.priority } 
            : task
        );
        saveToLocalStorage('tasks', updatedTasks);
        return { ...state, tasks: updatedTasks };
      
      case LOAD_TASKS:
        return { ...state, tasks: action.payload };
      
      default:
        return state;
    }
  };
  
  export default taskReducer;