<template>
    <div id="app">
        <Header />
        <!--<img alt="Vue logo" src="./assets/logo.png">-->
        <router-view></router-view>
        <!--<HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>-->
        <Footer />
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Header from './components/Header.vue';
    import Footer from './components/Footer.vue';

    export default Vue.extend({
        name: 'App',
        components: {
            Header,
            Footer
        }
    });
</script>

<style>
    body {
        height: 100vh;
        margin: 0;
    }

    #app {
        height: 100%;
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        /*margin-top: 60px;*/
    }
</style>
