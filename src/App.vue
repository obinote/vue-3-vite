<template>
    <el-menu class="el-menu-demo" mode="horizontal">
        <el-menu-item index="1"><router-link to="/">Home</router-link></el-menu-item>
        <el-menu-item index="3"><router-link to="/admin">Admin</router-link></el-menu-item>
        <el-menu-item index="4"><router-link to="/login">Login</router-link></el-menu-item>
        <el-menu-item index="4" @click="logout">LogOut</el-menu-item>
    </el-menu>
    <router-view />
</template>
<script>
export default {
    name: "App",
    methods: {
        logout() {
            localStorage.setItem("email", "");
            localStorage.setItem("password", "");
        },
    },
};
</script>
