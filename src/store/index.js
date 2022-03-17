import { createStore } from "vuex";
import apiCall from "../api/apiCall";

const defaultState = {
    posts: [],
    isFetching: false,
    paginations: {
        limit: 10,
        page: 1,
    },
};

const getters = Object.keys(defaultState).reduce((getters, key) => {
    getters[key] = (state) => state[key];
    return getters;
}, {});

export default createStore({
    state: defaultState,
    mutations: {
        setPosts: (state, payload) => {
            state.posts = state.posts.concat(payload);
        },
        setFetching: (state, payload) => {
            state.isFetching = payload;
        },
        setNextPage: (state, payload) => {
            state.paginations.page += 1;
        },
    },
    actions: {
        ...apiCall,
    },
    getters,
    module: {},
});
