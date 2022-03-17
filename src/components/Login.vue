<template>
    <el-dialog v-model="dialogVisible" title="Tips" width="30%" :before-close="handleClose">
        <span>This is a message</span>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="handleClose">Cancel</el-button>
                <el-button type="primary" @click="login()">Confirm</el-button>
            </span>
        </template>
    </el-dialog>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    name: "Login",
    data() {
        return {
            dialogVisible: false,
        };
    },
    mounted() {
        this.init();
    },
    computed: {},
    methods: {
        ...mapActions({
            // getPosts: "getPosts",
        }),
        async init() {
            this.toggleDialog(true);
        },
        handleClose() {
            this.dialogVisible = false;
            this.$router.go(-1);
        },
        toggleDialog(val) {
            this.dialogVisible = val;
        },
        login() {

        }
    },
};
</script>
<style scoped>
.dialog-footer button:first-child {
    margin-right: 10px;
}
</style>
