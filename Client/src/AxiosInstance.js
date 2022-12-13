import axios from "axios";



const Instance = axios.create({
    // baseURL: "http://52.196.106.22/api/",
    baseURL: "http://localhost:4000/api/",
    // baseURL: "https://stratedia.herokuapp.com/api/",
});
// axios.interceptors.request.use(function (config) {
//     config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
//     return config;
// });

export default Instance;