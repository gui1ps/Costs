import axios from "axios";

const categories=axios.create(
    {
        baseURL:'http://localhost:5000/categories',
        method:'get',
        headers:{
            'Content-Type':'aplication/json'
        }
    }
)

const projectPost = axios.create(
    {
        baseURL:'http://localhost:5000/projects',
        headers:{
            'Content-Type':'aplication/json'
        }
    }
)

export default {categories,projectPost}