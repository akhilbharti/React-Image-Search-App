import axios from 'axios';


export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID 8af45136770cbac6090d5ec5dca19245a4802864186036e9e6c8fa90e25b036b'
    }
});
