const axios = require('axios').default;

class Apı{
    constructor(){

    }
    async getData(number){
        const data = await axios(`https://jsonplaceholder.typicode.com/users?userId=${number}`).then((response)=>{
            console.log("GET ISLEMI YAPILDI.");
            console.log(response.data);
        }).then(async () =>{
            const dataa = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${number}`);
            console.log("POST ISLEMI YAPILDI.");
            console.log(dataa.data);
        })

    
    }
}


const api = new Apı();

api.getData(1);
