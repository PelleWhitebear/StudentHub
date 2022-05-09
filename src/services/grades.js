import axios from 'axios';
const baseUrl = 'https://www.studenthub.bhsi.xyz/api/grade'
const localBaseUrl = 'http://localhost:8080/api/grade'

let token = null;

const setToken = newToken => {
  token = newToken;
}

const getAll = async () => {
    try {
      let { data } = await axios.get(`${baseUrl}`);
      return { data };
    } catch (error) {
      console.log(error);
      console.log("Error with fetching data from backend server");
    }
  };

const WeigthGrades = async () => {
  
  let {data} = await getAll()

  const {valueSum, weightSum} = data.reduce((previous, value) =>{
      previous.valueSum = previous.valueSum + (value.gradeDK * value.course.ects);
      previous.weightSum += value.course.ects;
      return previous;
    }, {valueSum: 0, weightSum: 0});

  const weigthedAverage = valueSum/weightSum;

  return [weigthedAverage, weightSum];
  
}
   
  const getAllByToken = async () => {
    try {
      let { data } = await axios.get(`${baseUrl}/getGrades/${token}`);
      return { data };
    } catch (error) {
      console.log(error);
      console.log("Error with fetching data from backend server");
    }
  };


  
  const update = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(response => response.data)
  };
  
export default { getAll, update, setToken, getAllByToken, WeigthGrades }
