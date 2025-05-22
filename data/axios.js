import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

export const addJob = async (data) => {
  const res = await instance.post("/add-job", data);
  return res.data;
};
