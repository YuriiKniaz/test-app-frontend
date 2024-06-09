import axios from 'axios';

const URL = 'https://test-app-backend-f2ac.onrender.com';

export const uploadFile = async formData => {
  const response = await axios.post(`${URL}/upload`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};
