import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "a84991730b1e4700a014b3528191c0ae",
  },
});

export interface FetchResponse<T> {
  count: number;
  results: T[];
}
