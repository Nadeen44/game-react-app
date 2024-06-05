import axios from "axios";

 export default axios.create({
    baseURL:'https://api.rawg.io/api/',
    params:{
        key:'42e00cbf942341a993a8cb080d7b5583'
    }
})