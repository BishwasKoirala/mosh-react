import { CanceledError } from "axios";
import axios from "axios";

export default axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  ////// if needed
  // headers : {
  //   'api-key' : ' keyvalusakjehfkaushdv kjhs'
  // }
});

export { CanceledError };
