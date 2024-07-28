import axios from "axios";
import { USERS_PATH, TASKS_PATH } from "./constant";
const getAllUsers = async () => {
  return await axios.get(USERS_PATH);
};
const postNewUser = async (username, password, email, phone, image) => {
  const data = {
    username,
    password,
    email,
    phone,
    image,
  };
  return await axios.post(USERS_PATH, data);
};
const patchUser = async ({ id, ...rest }) => {
  // const data = {
  //   username,
  //   email,
  //   phone,
  //   image,
  // };
  return await axios.patch(`${USERS_PATH}${id}`, rest);
};
const deleteUser = async (id) => {
  return await axios.delete(`${USERS_PATH}${id}`);
};
const patchPassUser = ({ id, ...rest }) => {
  return axios.patch(`${USERS_PATH}${id}`, rest);
};
const getUserTasks = (id) => {
  return axios.get(`${TASKS_PATH}?userId=${id}`);
};
const patchTask = ({ id, ...rest }) => {
  return axios.patch(`${TASKS_PATH}${id}`, rest);
};
const postTask = ({ ...rest }) => {
  return axios.post(TASKS_PATH, rest);
};
const deleteTask = (id) => {
  return axios.delete(`${TASKS_PATH}${id}`);
};
export {
  getAllUsers,
  postNewUser,
  patchUser,
  deleteUser,
  patchPassUser,
  getUserTasks,
  patchTask,
  postTask,
  deleteTask,
};
