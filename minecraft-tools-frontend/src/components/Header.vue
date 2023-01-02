<template>
    <header>
        <img src="../assets/bee-minecraft.gif" alt="Alternate Text" />
        <h3>{{ title }}</h3>
    </header>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.extend({
        data() {
            return {
                title: 'Minecraft Tools'
            }
        }
    });
</script>

<style scoped>
    header {
        background-color: #037e15;
        padding: 10px;
        height: 48px;
        position: fixed;
        top: 0;
        width: 100%;
        display: flex;
        color: white;
    }

    img {
        padding-inline-end: 10px;
    }
</style>