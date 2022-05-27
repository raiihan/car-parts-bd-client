import axios from "axios";

const baseurl = axios.create({
    baseURL: "https://lit-crag-25230.herokuapp.com"
})
export default baseurl;