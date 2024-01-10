import axios from "axios";

export const key = "5f36e4973a4f6eae4e42ee3a8d34abae7510bac3";

const api = axios.create({
    baseURL:"https://api-ssl.bitly.com/v4",
    headers:{
        "Authorization":`Bearer ${key}`
    }
})
export default api;
