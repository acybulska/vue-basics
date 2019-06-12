<template>
    <div>
        <p>{{quote}}</p>
    </div>
</template>

<script>
export default {
    props: ['quote']
}
</script>

<style scoped>
div {
    border: solid 1px #ccc;
    box-shadow: 1px 1px 2px black;
    margin: 30px auto;
    padding: 30px;
    text-align: center;
}
</style>