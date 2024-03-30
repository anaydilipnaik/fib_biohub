import { semiEndpoint } from "../utils/ApiEndpoint";
import axios from "axios";

export function calculateFib(dataJson) {
  return axios.post(semiEndpoint + "/fibonacci", dataJson);
}
