import axios from "axios";
import {baseUrl} from './constatants/constant'

const instance = axios.create({
    baseURL: baseUrl,
  });

  export default instance