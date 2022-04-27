import axios from "axios";

const BACKEND_SERVICE_URL = "https://www.studenthub.bhsi.xyz/api/";

export const getData = async (url) => {
  try {
    let { data } = await axios.get(BACKEND_SERVICE_URL.concat(url));
    return { data };
  } catch (error) {
    console.log(error);
    console.log("Error with fetching data from backend server");
  }
};
