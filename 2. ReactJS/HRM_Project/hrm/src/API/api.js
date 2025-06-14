import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:8080/api/v1/",
  headers: {
    "content-type": "application/json",
  },
});

export let api = (method_param, endpoint, payload) => {
  return axiosClient(endpoint, { method: method_param, data: payload })
    .then((response) => {
      //   console.log("api");
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};
