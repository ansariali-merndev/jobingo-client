import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

export const addJob = async (data) => {
  try {
    const res = await instance.post("/add-job", data);
    return res.data;
  } catch (error) {
    console.log("Error: ", error.message);
    throw error;
  }
};

export const getAllJob = async () => {
  try {
    const res = await instance.get("/get-job");
    return res.data;
  } catch (error) {
    console.log("Error: ", error.message);
    throw error;
  }
};

export const toggleSavedJob = async (data) => {
  try {
    const res = await instance.post("/saved-job", data);
    return res.data;
  } catch (error) {
    console.log("Error: ", error.message);
    throw error;
  }
};

export const getSavedJob = async (data) => {
  try {
    const res = await instance.post("/getSavedJobByEmail", data);
    return res.data;
  } catch (error) {
    console.log("Error: ", error.message);
    throw error;
  }
};

export const getJobById = async (data) => {
  try {
    const res = await instance.post("/getJobById", data);
    return res.data;
  } catch (error) {
    console.log("Error: ", error.message);
    throw error;
  }
};

export const incrementApplicants = async (data) => {
  try {
    const res = await instance.post("/incr", data);
    return res.data;
  } catch (error) {
    console.log("Error: ", error.message);
    throw error;
  }
};
