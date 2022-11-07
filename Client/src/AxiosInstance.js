import axios from "axios";



const Instance = axios.create({
    // baseURL: "http://localhost:4000/api/",
    baseURL: "https://stratedia.herokuapp.com/api/",
});

export default Instance;