import axios from 'axios';
const baseUrl = "https://www.studenthub.bhsi.xyz/api/student/createStudent"
const localBaseUrl = 'http://localhost:8080/api/createStudent'


export const postStudent = async (data) => {
await axios.post(baseUrl, data)
      .then((result) => {
        console.log(result.data)
      }).catch((error) =>{
        if(error.response){
          console.log(error.response)
        }else if(error.message){
          console.log(error.message)
        }else if(error.request){
          console.log(error.request)
        }
      })
    };
   
  
export default { postStudent }
