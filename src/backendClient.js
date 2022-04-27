import axios from "axios";
import { BACKEND_SERVICE_URL } from "./index";

export const getData = async (url) => {
    try {
      let { data } = await axios.get(BACKEND_SERVICE_URL.concat(url));
      return { data };
    } catch (error) {
      console.log(error);
      console.log("Error with fetching data from backend server");
    }
  };

const BackendClient = (props) => {
    return (
        <div></div>
    )
  };
  export default BackendClient;
  

