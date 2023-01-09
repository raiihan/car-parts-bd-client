import axios from "axios";

const baseurl = axios.create({
    baseURL: "https://car-parts-server.vercel.app/"
})
export default baseurl;