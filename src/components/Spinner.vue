<template>
    <div v-show="visible"
         class="spinner"
         :class="{
             'spinner--primary': color === 'primary',
             'spinner--secondary': color === 'secondary',
             'spinner--success': color === 'success',
             'spinner--warning': color === 'warning',
             'spinner--danger': color === 'danger',
             'spinner--info': color === 'info',
         }">
        <div></div><div></div><div></div><div></div>
        <div></div><div></div><div></div><div></div><div></div><div></div>
        <div></div><div></div></div>
</template>

<script>
    export default {
        name: 'Spinner'
    };
</script>

<style scoped>

</style>
