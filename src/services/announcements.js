import axios from 'axios';
const baseUrl = 'https://www.studenthub.bhsi.xyz/api/lessonplan'
const localBaseUrl = 'http://localhost:8080/api/announcements'
const localStudentBaseUrl = 'http://localhost:8080/api/student'


let token = localStorage.getItem("token");

const setToken = newToken => {
  token = `bearer ${newToken}`
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
   
  const getAllByToken = async () => {
    try {
      let { data } = await axios.get(`${localStudentBaseUrl}/${token}/announcements`);
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
