import axios from "axios";

export const postAPI = async (url: string, post: object, token?: string) => {
  console.log("post", post);
  const res = await axios.post(`http://localhost:4200/api/${url}`, post, {
    headers: { "Content-Type": "application/json", Authorization: token },
  });

  return res;
};

export const getAPI = async (url: string, token?: string) => {
  const res = await axios.get(`http://localhost:4200/api/${url}`, {
    headers: { "Content-Type": "application/json", Authorization: token },
  });

  return res;
};

export const putAPI = async (url: string, post: object, token?: string) => {
  const res = await axios.put(`http://localhost:4200/api/${url}`, post, {
    headers: { "Content-Type": "application/json", Authorization: token },
  });

  return res;
};

export const deleteAPI = async (url: string, token?: string) => {
  const res = await axios.delete(`http://localhost:4200/apii/${url}`, {
    headers: { Authorization: token },
  });

  return res;
};
