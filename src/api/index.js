import axios from "axios";


export const get = async (url, query = null) => {
    return await axios.get(url, {params: query});
};

export const post = async (url, query = null) => {
    return await axios.post(url, {params: query});
};
