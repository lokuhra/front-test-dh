import auth0 from "auth0-js";
import { clientID, domain } from "../utils/auto0.settings";

function webAuth(clientID, domain) {
  return new auth0.WebAuth({
    clientID: clientID,
    domain: domain
  });
}
function getProfile() {
  return webAuth(clientID, domain).profile;
}

function login() {
  const options = {
    responseType: "id_token",
    // redirectUri: "http://localhost:3000/redirect",
    redirectUri: "https://front-test-dh.now.sh/redirect",
    scope: "openid profile email"
  };

  return webAuth(clientID, domain).authorize(options);
}

function parseHash(cb) {
  return webAuth(clientID, domain).parseHash(cb);
}

function logout() {
  return webAuth(clientID, domain).logout();
}

export { login, parseHash, logout, getProfile };
