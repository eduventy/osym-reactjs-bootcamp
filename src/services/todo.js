import axios from "axios";

const url = "https://kokpit.smartlimon.com/items/bootcamp_todo";

export const getTasks = () => {
  return axios.get(url);
};
