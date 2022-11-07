import axios from "axios";

axios.defaults.withCredentials = true;
const baseUrl = process.env.REACT_APP_SERVER_BASE_URL;
export const postAPI = async (url: string, post: object, token?: string) => {
  const res = await axios.post(`${baseUrl}/api/${url}`, post, {
    headers: { Authorization: token },
  });

  return res;
};

export const getAPI = async (url: string, token?: string) => {
  const res = await axios.get(`${baseUrl}/api/${url}`, {
    headers: { Authorization: token },
  });

  return res;
};

export const patchAPI = async (url: string, post: object, token?: string) => {
  const res = await axios.patch(`${baseUrl}/api/${url}`, post, {
    headers: { Authorization: token },
  });

  return res;
};

export const putAPI = async (url: string, post: object, token?: string) => {
  const res = await axios.put(`${baseUrl}/api/${url}`, post, {
    headers: { Authorization: token },
  });

  return res;
};

export const deleteAPI = async (url: string, token?: string) => {
  const res = await axios.delete(`${baseUrl}/api/${url}`, {
    headers: { Authorization: token },
  });

  return res;
};
