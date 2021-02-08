import axios from 'axios';

export default axios.create({
    baseURL: 'https://developers.zomato.com/api/v2.1',
    headers:{
        'user-key':'3cafe7401b35c6d84390c54eb14e7744'
        
    }
});