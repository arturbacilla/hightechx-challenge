import axios from 'axios';

const URL = `http://${process.env.REACT_APP_HOSTNAME}` || 'localhost';
const PORT = `${process.env.REACT_APP_BACKEND_PORT}` || '3001';

const api = axios.create({
  baseURL: `${URL}:${PORT}`, 
});

export const executeLogin = async (endpoint, body) => {
  try {
    const result = await api.post(endpoint, body);
    return result.data
  } catch (error) {
    console.log(error);
  }
}

export const executeGet = async (endpoint, token) => {
  try {
    const result = await api.get(endpoint, {
      headers: {
        authorization: token
      }
    })
    return result.data
  } catch (error) {
    console.log(error);
  }
}

export const executePost = async (endpoint, body, token) => {
  try {
    const result = await api.post(endpoint, body, {
      headers: {
        authorization: token
      }
    })
    return result.data
  } catch (error) {
    console.log(error);
  }
}

export default api