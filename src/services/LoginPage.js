import axios from 'axios';
const baseUrl = 'https://www.studenthub.bhsi.xyz/api/createUser'
const localBaseUrl = 'http://localhost:8080/api/createUser'

let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}


  
export default {  }
