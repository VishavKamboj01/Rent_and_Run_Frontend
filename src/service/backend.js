import axios from "axios";

const url = "http://localhost:3000/api/";

function login(user) {
  return axios.post(url + "auth", user);
}

export { login };
