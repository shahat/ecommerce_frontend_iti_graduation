import axios from "axios";

const instance= axios.create({
    baseURL:"127.0.0.1"
})
export default instance;