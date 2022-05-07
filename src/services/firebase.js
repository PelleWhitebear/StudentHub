import {
  signInWithEmailAndPassword,
  getAuth
} from "firebase/auth";

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
  
  export default { login, getUserToken, setToken };

