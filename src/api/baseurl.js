import axios from "axios";

const baseurl = axios.create({
    baseURL: "http://localhost:5000"
})
export default baseurl;