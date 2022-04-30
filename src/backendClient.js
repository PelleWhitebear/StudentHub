import axios from "axios";

const BACKEND_SERVICE_URL = "http://130.225.170.77//api//";

export const getData = async (url) => {
  try {
    let { data } = await axios.get(BACKEND_SERVICE_URL.concat(url));
    return { data };
  } catch (error) {
    console.log(error);
    console.log("Error with fetching data from backend server");
  }
};
