import { BASE_URL } from "../../enviroments";
import axios from "axios";

const saveForm = (body) => {
  return new Promise((resolve, reject) => {
    axios({
      url: `${BASE_URL}formSubmission`,
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
        Accept: "application/json",
        type: "formData",
      },
      data: body,
    })
      .then((res) => {
        resolve(res?.data);
        console.log("res", res);
      })
      .catch((err) => {
        console.log("err?.response?.data?.error", err?.response);
        reject(err?.response);
      });
  });
};
export default saveForm;
