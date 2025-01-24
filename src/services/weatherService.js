import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY; 
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

const getWeatherData = async (city) => {
  try {
    const response = await axios.get(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};

export default getWeatherData;
