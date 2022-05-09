import axios from 'axios';
import tokenService from './tokenService';


const baseUrl = 'https://www.studenthub.bhsi.xyz/api/grade'
const localBaseUrl = 'http://localhost:8080/api/grade'


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
  
  let {data} = await getAllByToken()

  const {valueSum, weightSum} = data.reduce((previous, value) =>{
      previous.valueSum = previous.valueSum + (value.gradeDK * value.course.ects);
      previous.weightSum += parseInt(value.course.ects);
      return previous;
    }, {valueSum: 0, weightSum: 0});

  const weigthedAverage = valueSum/weightSum;

  return [weigthedAverage, weightSum];
  
}
   
  const getAllByToken = async () => {
    try {
      let { data } = await axios.get(`${baseUrl}/getGrades/${tokenService.getToken()}`);
      return { data };
    } catch (error) {
      console.log(error);
      console.log("Error with fetching data from backend server");
    }
  };
  
export default { getAll, getAllByToken, WeigthGrades }
