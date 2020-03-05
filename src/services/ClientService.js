import { http } from "./Config";
const qs = require("querystring");
const config = {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  }
};
export default {
  getAll: () => {
    return http.get("http://localhost/cohros/client/");
  },
  findById: client_id => {
    return http.get("http://localhost/cohros/client/" + client_id);
  },
  save: data => {
    return http.post(
      "http://localhost/cohros/client/save",
      qs.stringify(data),
      config
    );
  },
  edit: (data, id) => {
    return http.post(
      "http://localhost/cohros/client/update/" + id,
      qs.stringify(data),
      config
    );
  },
  delete: id => {
    return http.post("http://localhost/cohros/client/delete/" + id);
  }
};
