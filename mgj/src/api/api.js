const axios = require('axios');

let api={
    mgjApi(str){
        return axios.get(str)
    },
    mgjApiId(str,id){
        return axios.get(str+id+'.json')
    }
}

export default api