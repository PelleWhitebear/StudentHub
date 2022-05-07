import {
  signInWithEmailAndPassword,
  getAuth
} from "firebase/auth";

const auth = getAuth();

const baseUrl = 'https://www.studenthub.bhsi.xyz/api/createUser'
const localBaseUrl = 'http://localhost:8080/api/createUser'

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
  
  export { login }

