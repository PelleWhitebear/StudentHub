import axios from 'axios';
const localStudentUrl = 'http://localhost:8080/api/student/changeToken';
const studentUrl = 'https://www.studenthub.bhsi.xyz/api/student/changeToken';

const updateTokenInDatabase = async (id, newObject) => {
    try {
      let object = {
        token: newObject
      }
      return await axios.put(`${studentUrl}/${id}`, object)
    } catch {
      
    }
  };

export default { updateTokenInDatabase }