import { http } from "./Config";

export default {
  getAll: () => {
    return http.get("http://localhost/cohros/client/");
  },
  findById: client_id => {
    return http.get("http://localhost/cohros/client/" + client_id);
  }
};
