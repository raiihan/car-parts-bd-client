import axios from "axios";

const axiosPrivate = axios.create({
    baseURL: "https://car-parts-server.vercel.app/"
})

axiosPrivate.interceptors.request.use(function (config) {
    if (!config.headers.authorization) {
        config.headers.authorization = `Bearer ${localStorage.getItem('accessJWT')}`
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});

export default axiosPrivate;