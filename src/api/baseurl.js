import axios from "axios";

const baseurl = axios.create({
    baseURL: "https://car-parts-bd-server.onrender.com/"
})
export default baseurl;