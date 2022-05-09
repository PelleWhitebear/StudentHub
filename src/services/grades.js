import axios from 'axios';
const baseUrl = 'https://www.studenthub.bhsi.xyz/api/grade'
const localBaseUrl = 'http://localhost:8080/api/grade'

let token = null

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

const WeigthGrades = async () => {
  //let data = await getAll()
  let mockData = { gradeDK: [4, 7, 10], etcs: [5, 5, 10]}

  const [valueSum, weightSum] = mockData.reduce(([valueSum, weightSum], [value, weight]) =>
    ([valueSum + value.gradeDK * weight.etcs, weightSum + weight.etcs]), [0, 0]);

  let weigthedAverage = valueSum/weightSum;

  return weigthedAverage;
}
   
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
  
export default { getAll, create, update, setToken, WeigthGrades }
