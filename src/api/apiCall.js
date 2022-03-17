import { get, post } from "./index";

export default {
    getPosts: ({ commit, getters }) => {
        const query = {
            _page: getters.paginations.page,
            _limit: getters.paginations.limit,
        };
        commit("setFetching", true);
        get("https://jsonplaceholder.typicode.com/posts", query)
            .then((res) => {
                let { status, data } = res;
                if (status === 200) {
                    commit("setPosts", data);
                    commit("setNextPage", data);
                }
                commit("setFetching", false);
            })
            .catch((e) => {
                commit("setFetching", false);
                console.log(e);
            });
    },
    getUsers: (state, { userId }) => {
        let query = {
            id : userId,
        };
        return get("https://jsonplaceholder.typicode.com/users/", query);
    },
};
