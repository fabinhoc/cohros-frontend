import { http } from "./Config";

export default {
  findByClientId: client_id => {
    return http.get(
      "http://localhost/cohros/phone/findByClientId/" + client_id
    );
  }
};
