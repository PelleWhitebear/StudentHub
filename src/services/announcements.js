import axios from 'axios';

const baseUrl = 'https://www.studenthub.bhsi.xyz/api/announcements'
const studentBaseUrl = 'https://www.studenthub.bhsi.xyz/api/student'
const localBaseUrl = 'http://localhost:8080/api/announcements'
const localStudentBaseUrl = 'http://localhost:8080/api/student'


var token = null;

const setToken = newToken => {
  token = newToken;
}

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
      let { data } = await axios.get(`${studentBaseUrl}/${token}/announcements`);
      return { data };
    } catch (error) {
      console.log(error);
      console.log("Error with fetching data from backend server");
    }
  };

  const create = async newObject => {
    const config = {
      headers: { Authorization: token },
    }
  
    const response = await axios.post(baseUrl, newObject, config)
    return response.data
  };
  
  const update = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(response => response.data)
  };
  
export default { getAll, create, update, setToken, getAllByToken }
