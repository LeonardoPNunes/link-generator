import axios from "axios";

export const key = "5b568e7b1d830d85934edc4df2f1e236493f9afa";

const api = axios.create({
    baseURL:"https://api-ssl.bitly.com/v4/",
    headers:{
        "Authorization":`Bearer ${key}`
    }
})
export default api;