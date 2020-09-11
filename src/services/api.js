import axios from "axios"
export const url = 'https://api.github.com/';

const Api = axios.create({
  baseURL: url,
  contentType: 'application/x-www-form-urlencoded',
  headers: {'Content-Type':'application/json',}
});

export default Api
