import axios from 'axios';
import tokenService from './tokenService';

const baseUrl = 'https://www.studenthub.bhsi.xyz/api/courseDatabase';
const localBaseUrl = 'http://localhost:8080/api/courseDatabase';



const getAll = async () => {
    try {
      let { data } = await axios.get(baseUrl);
      return { data };
    } catch (error) {
      console.log(error);
      console.log("Error with fetching data from backend server");
    }
  };
   
  const getAllByToken = async () => {
    try {
      let { data } = await axios.get(`${baseUrl}/${tokenService.getToken()}`);
      return { data };
    } catch (error) {
      console.log(error);
      console.log("Error with fetching data from backend server");
    }
  };
  
  
export default { getAll, getAllByToken }
