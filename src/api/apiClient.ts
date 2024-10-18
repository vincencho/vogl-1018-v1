import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://zu621tawdd.execute-api.ap-northeast-2.amazonaws.com',
  timeout: 30000, // 30 seconds
});

// Add a request interceptor
apiClient.interceptors.request.use((config) => {
  console.log('Request:', config);
  return config;
}, (error) => {
  console.error('Request error:', error);
  return Promise.reject(error);
});

// Add a response interceptor
apiClient.interceptors.response.use((response) => {
  console.log('Response:', response);
  return response;
}, (error) => {
  console.error('Response error:', error);
  return Promise.reject(error);
});

export default apiClient;