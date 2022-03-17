<template>
    <el-dialog v-model="dialogVisible" title="Login" width="80%" :before-close="handleClose">
        <el-form label-width="120px">
            <el-form-item label="Email">
                <el-input v-model="email" />
            </el-form-item>
            <el-form-item label="Password">
                <el-input v-model="password" type="password" placeholder="Please input password" show-password />
            </el-form-item>
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="handleClose">Cancel</el-button>
                <el-button type="primary" @click="doLogin">Login</el-button>
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
            email: "",
            password: "8",
        };
    },
    beforeRouteEnter(to, from, next) {
        next((vm) => {
            vm.checkLogin();
        });
    },
    mounted() {
        this.init();
    },
    computed: {},
    methods: {
        ...mapActions({
            getUsers: "getUsers",
        }),
        async init() {
            this.toggleDialog(true);
        },
        handleClose() {
            this.dialogVisible = false;
            this.$router.push({ name: "home" });
        },
        toggleDialog(val) {
            this.dialogVisible = val;
        },
        checkLogin() {
            let email = localStorage.getItem("email");
            let password = localStorage.getItem("password");
            if (email && password) {
                this.$router.push({ name: "admin" });
            }
        },
        doLogin() {
            this.getUsers({ userId: this.password })
                .then((res) => {
                    let { data, status } = res;
                    if (status === status) {
                        if (data.length > 0) {
                            localStorage.setItem("email", data[0].email);
                            localStorage.setItem("password", data[0].id);
                            this.$router.push({ name: "admin" });
                        }
                    }
                })
                .catch((e) => {
                    console.log(e);
                });
        },
    },
};
</script>
<style scoped>
.dialog-footer button:first-child {
    margin-right: 10px;
}
</style>
