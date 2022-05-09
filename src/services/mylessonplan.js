import axios from 'axios';
const baseUrl = 'https://www.studenthub.bhsi.xyz/api/lessonplan'
const localBaseUrl = 'http://localhost:8080/api/lessonplan'


let token = "eyJhbGciOiJSUzI1NiIsImtpZCI6ImJlYmYxMDBlYWRkYTMzMmVjOGZlYTU3ZjliNWJjM2E2YWIyOWY1NTUiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZHR1c3R1ZGVudGh1YiIsImF1ZCI6ImR0dXN0dWRlbnRodWIiLCJhdXRoX3RpbWUiOjE2NTIwODc1MTAsInVzZXJfaWQiOiIyVFpYWm9DYVZHVmJ4VXJBRlV4RUFJV3dWRXkxIiwic3ViIjoiMlRaWFpvQ2FWR1ZieFVyQUZVeEVBSVd3VkV5MSIsImlhdCI6MTY1MjA4NzUxMCwiZXhwIjoxNjUyMDkxMTEwLCJlbWFpbCI6InMyMDUzNTNAc3R1ZGVudC5kdHUuZGsiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiczIwNTM1M0BzdHVkZW50LmR0dS5kayJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.DpZUZ1LkcXQumIvuzz4UoaYz-4k4U4G7d2SgNhNFMSFewMAQar7D3THUl5f6k2iKrmwtMzJsmgBMfktwjUka3WajOw4YPhaZ4EaxFDieAiOtVTsRzbRK5uRakt7qmnoHoxGQrA5XC_2rNSLpyfYsj0N0bxkDTEwsBltST57oTcmuLTyB6vtDCGzaZgyhcahyqhB4-IupmVgqfHBg5oDhgE1q088RObc9cCEhmf0rEhB0M7KKSWP3t1JO-6hHdEMIuU_Jud3BjYVBvoHAlEHni0MBmaa5AwsF-SS26VraCiez-qZb3pINfO-yv9BipUcNY9FCjQ7DImay3I7VL0-0vg"

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
      let { data } = await axios.get(`${localBaseUrl}/${token}`);
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
