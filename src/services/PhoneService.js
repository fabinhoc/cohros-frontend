import { http } from "./Config";
const qs = require("querystring");
const config = {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  }
};
export default {
  findByClientId: client_id => {
    return http.get(
      "http://localhost/cohros/phone/findByClientId/" + client_id
    );
  },
  findById: id => {
    return http.get("http://localhost/cohros/phone/" + id);
  },
  save: data => {
    return http.post(
      "http://localhost/cohros/phone/save",
      qs.stringify(data),
      config
    );
  },
  edit: (data, id) => {
    return http.post(
      "http://localhost/cohros/phone/update/" + id,
      qs.stringify(data),
      config
    );
  },
  delete: id => {
    return http.post("http://localhost/cohros/phone/delete/" + id);
  }
};
