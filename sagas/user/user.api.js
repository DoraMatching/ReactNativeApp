const urlLoginUser = 'https://api.dev.doramatching.tk/login';

function* loginFromApi(user){
    const response = yield fetch(urlLoginUser, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: user.username,
            password: user.password,
        }),
    });
    return response;
}

export const Api = {
    loginFromApi,
}