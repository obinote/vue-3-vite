<template>
    <div id="home-page">
        <div class="loading" v-if="isFetching">
            <el-skeleton :rows="5" />
        </div>
        <div class="main-content" v-else>
            <p @click="loadMore">Load More</p>
            <div>
                <div v-for="(post, idx) in posts" :key="`${post.id}-post-${idx}`">
                    <div class="post-title">
                        <p>{{ post.id }}</p>
                    </div>
                    <div class="post-title">
                        <p>{{ post.title }}</p>
                    </div>
                    <post class="post-body">
                        <p>{{ post.body }}</p>
                    </post>
                </div>
            </div>
            <!-- <ul v-infinite-scroll="load" class="infinite-list" style="overflow: auto">
                <li v-for="i in count" :key="i" class="infinite-list-item">{{ i }}</li>
            </ul> -->
        </div>
    </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
    name: "Home",
    components: {},
    data() {
        return {
            postList: [],
            count: 10,
        };
    },
    mounted() {
        this.init();
    },
    computed: {
        ...mapGetters({
            posts: "posts",
            isFetching: "isFetching",
        }),
    },
    methods: {
        ...mapActions({
            getPosts: "getPosts",
        }),
        async init() {
            this.getPosts();
        },
        loadMore() {
            this.getPosts();
        },
        load() {
            this.count += 3;
        },
    },
};
</script>
