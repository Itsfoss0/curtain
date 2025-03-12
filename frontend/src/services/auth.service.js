import axios from 'axios';
const API_URL = 'http://localhost:3001/api/v1';

const registerUser = async (userDetails) => {
  try {
    const res = await axios.post(`${API_URL}/auth/register`, userDetails);
    return res;
  } catch (error) {
    console.log(error.message);
    return error.response;
  }
};

const loginUser = async (userDetails) => {
  try {
    const res = await axios.post(`${API_URL}/auth/login`, userDetails);
    return res;
  } catch (error) {
    return error.response;
  }
};

const verifyUser = async (token, userId) => {
  const res = await axios.get(
    `${API_URL}/auth/verify/${userId}?token=${token}`
  );
  return res;
};

const verifyResetToken = async (token, userId) => {
  const res = await axios.get(
    `${API_URL}/user/password/check/${userId}?token=${token}`
  );
  return res;
};

const resetPassword = async (token, userId, password) => {
  const res = await axios.post(
    `${API_URL}/user/password/${userId}?token=${token}`,
    password
  );
  return res;
};

const requestPasswordReset = async (email) => {
  try {
    const res = await axios.post(
      `${API_URL}/user/password/forgot`,
      email
    );
    return res;
  } catch (err) {
    console.error(err.message);
    return { response: { data: { message: err.response?.data?.error } } };
  }
};

export default {
  registerUser,
  loginUser,
  verifyUser,
  verifyResetToken,
  resetPassword,
  requestPasswordReset
};
