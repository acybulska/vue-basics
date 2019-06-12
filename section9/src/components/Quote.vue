<template>
    <div>
        <div>
            <slot name="title"></slot>
            <span style="color: #ccc"><slot name="subtitle">The Subtitle</slot></span>
        </div>
        <hr>
        <div>
            <slot name="content"></slot>
        </div>
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

h1 {
    color: red;
}
</style>