<template>
    <div>
        <p>New quote</p>
        <button @click="counter++">Increase</button>
        <p>{{counter}}</p>
    </div>
</template>
<script>
export default {
    data() {
        return {
            counter: 0 
        }
    },
    destroyed() {
        console.log('Destroyed')
    },
    activated() {
        console.log('Activated')
    },
    deactivated() {
        console.log('Deactivated')
    },
}
</script>
<style>
</style>