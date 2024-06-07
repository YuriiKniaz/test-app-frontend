import axios from 'axios';

const URL = 'http://localhost:3000';

export const uploadFile = async formData => {
  const response = await axios.post(`${URL}/upload`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};
