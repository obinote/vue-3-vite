<template>
    <div id="admin-page">
        <p>Welcome Admin</p>
    </div>
</template>
<script>
export default {
    name: "Admin",
    beforeRouteEnter(to, from, next) {
        next((vm) => {
            vm.checkLogin();
        });
    },
    methods: {
        checkLogin() {
            let email = localStorage.getItem("email");
            let password = localStorage.getItem("password");
            if (!email || !password) {
                this.$router.push({ name: "login" });
            }
        },
    },
};
</script>
