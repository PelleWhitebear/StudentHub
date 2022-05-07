import axios from 'axios';
import {
  signInWithEmailAndPassword,
  getAuth
} from "firebase/auth";

const studentUrl = 'http://localhost:8080/api/student/changeToken';
const auth = getAuth();
let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}

const login = async (email, password) => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      let userUid = auth.currentUser.uid 
      localStorage.setItem('uid', userUid);
          
    } catch (error) {
      console.log(error.message);
    }
  };

  const getUserToken = async () => {
    if (auth.currentUser)
    return await auth.currentUser.getIdToken(true);
  };

    
  const updateTokenInDatabase = async (id, newObject) => {
    try {
      let object = {
        token: newObject
      }
      return await axios.put(`${studentUrl}/${id}`, object)
    } catch {
      
    }
   

  };
  
  export default { login, getUserToken, setToken, updateTokenInDatabase };

  

