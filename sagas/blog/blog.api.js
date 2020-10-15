import axios from "axios";



function* getBlogsFromAPI ({urlGetBlogs}){

    const { data } = yield axios.get(urlGetBlogs);
    return data;
}

export const Api = {
    getBlogsFromAPI,
}