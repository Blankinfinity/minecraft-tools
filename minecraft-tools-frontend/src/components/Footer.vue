<template>
    <footer>
        <p>{{ footerText }}</p>
    </footer>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.extend({
        data() {
            return {
                footerText: 'Copyright anno 2023'
            }
        }
    });
</script>

<style scoped>
    footer {
        background-color: #037e15;
        padding: 10px;
        height: 48px;
        position: fixed;
        width: 100%;
        bottom: 0;
        color: white;
    }
</style>