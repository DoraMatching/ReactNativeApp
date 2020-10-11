import axios from "axios";

const urlLoginUser = "https://api.dev.doramatching.tk/login";
const urlLoginWithGithubUser = "https://api.dev.doramatching.tk/github";
const urlRegisterUser = "https://api.dev.doramatching.tk/register";

function* loginFromApi(user) {
  const { username, email, password } = user;
  //console.log("in API login", "OK");
  //   const response = yield fetch(urlLoginUser, {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       username,
  //       password,
  //     }),
  //   });
  const { data } = yield axios.post(urlLoginUser, {
    username,
    email,
    password,
  });
  //console.log("in API login", data);
  return data;
}

function* registerFromAPI({ username, email, password }) {
  const { data } = yield axios.post(urlRegisterUser, {
    username,
    email,
    password,
  });
  return data;
}

function* loginWithGitHubFromAPI(accessToken) {
  const { data } = yield axios.post(urlLoginWithGithubUser, {
    accessToken,
  });
  return data;
}

export const Api = {
  loginFromApi,
  loginWithGitHubFromAPI,
  registerFromAPI,
};
