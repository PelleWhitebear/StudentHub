import axios from 'axios';
const baseUrl = 'https://www.studenthub.bhsi.xyz/api/student'
const localBaseUrl = 'http://localhost:8080/api/student'

let token = "eyJhbGciOiJSUzI1NiIsImtpZCI6ImJlYmYxMDBlYWRkYTMzMmVjOGZlYTU3ZjliNWJjM2E2YWIyOWY1NTUiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZHR1c3R1ZGVudGh1YiIsImF1ZCI6ImR0dXN0dWRlbnRodWIiLCJhdXRoX3RpbWUiOjE2NTIwNDUyNjgsInVzZXJfaWQiOiIyVFpYWm9DYVZHVmJ4VXJBRlV4RUFJV3dWRXkxIiwic3ViIjoiMlRaWFpvQ2FWR1ZieFVyQUZVeEVBSVd3VkV5MSIsImlhdCI6MTY1MjA0NTI2OSwiZXhwIjoxNjUyMDQ4ODY5LCJlbWFpbCI6InMyMDUzNTNAc3R1ZGVudC5kdHUuZGsiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiczIwNTM1M0BzdHVkZW50LmR0dS5kayJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.VvFyre3oJ4MIsDHIJIhP4e7FltEQfdhDD3uMAxxQj3g3NnGAA1ssbUMOoZKG6kFlwFfvqYOrb_WMRaIzFsdlPmi2xlBhKCfdzCkZ3DI62rU_l56ogmD2LJ9q-cQRNGYp-Y6M1bz9Ts_YHohiAiZGnZaOV2Wm6rK4CEumNFvci-J6EBJBv5HA7pHi3wetFkU65qtIjbmkLjZO_cl9cARFEWSMNHv2HANBx2-2El270h1zFjH5wDJF5QzrsE1Aw9PaSxpw_8ZuLksn_KRvr68JkGkv0PfPQyzEOz_hJCla6gt-cMDOfL-h2nNXHm_6cfNvtVEldrOpef_3aLBGaTRuDA"

const setToken = newToken => {
  token = `bearer ${newToken}`
}

const getAll = async () => {
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
  
export default { getAll, create, update, setToken }
