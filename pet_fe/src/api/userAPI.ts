import axios from "axios";

const URL: string = "http://localhost:2233";

export const registerStudent = async (data: any) => {
  try {
    return axios.post(`${URL}/api/create-student`, data).then((res) => {
      return res.data.data;
    });
  } catch (error) {
    console.log(error);
  }
};

export const singinStudent = async (data: any) => {
  try {
    return axios.post(`${URL}/api/sign-in-student`, data).then((res) => {
      return res.data.data;
    });
  } catch (error) {
    console.log(error);
  }
};

export const getStudent = async (userID: string) => {
  try {
    return axios.get(`${URL}/api/${userID}/one-student`).then((res) => {
      return res.data.data;
    });
  } catch (error) {
    console.log(error);
  }
};

export const getStudentBags = async (userID: string) => {
  try {
    return axios.get(`${URL}/api/${userID}/view-student-bag`).then((res) => {
      return res.data.data;
    });
  } catch (error) {
    console.log(error);
  }
};
