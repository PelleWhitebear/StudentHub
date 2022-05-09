import axios from 'axios';
const baseUrl = 'https://www.studenthub.bhsi.xyz/api/createUser'
const localBaseUrl = 'http://localhost:8080/api/createUser'

let token = null

const setToken = newToken => {
  token = newToken;
}

const getAll = async () => {
    try {
      let { data } = await axios.get(localBaseUrl);
      return { data };
    } catch (error) {
      console.log(error);
      console.log("Error with fetching data from backend server");
    }
  };
   
  
export default { getAll, setToken }
