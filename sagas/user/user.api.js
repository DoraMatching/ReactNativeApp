import axios from "axios";

const urlLoginUser = "https://api.dev.doramatching.tk/login";
const urlLoginWithGithubUser = "https://api.dev.doramatching.tk/login";

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

function* loginWithGitHubFromAPI(accessToken) {
  const { data } = yield axios.post(urlLoginWithGithubUser, {
    accessToken,
  });
}

export const Api = {
  loginFromApi,
  loginWithGitHubFromAPI,
};
