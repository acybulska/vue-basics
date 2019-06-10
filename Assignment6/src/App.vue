<template>
    <div class="container">
        <div class="row">
           <app-header/>
        </div>
        <hr>
        <div class="row">
            <server-list/>
            <server-details/>
        </div>
        <hr>
        <div class="row">
                <app-footer/>
            </div>
        </div>
    </div>
</template>

<script>
import Footer from './Components/Footer.vue';
import ServerDetails from './Components/ServerDetails.vue';
import Header from './Components/Header.vue';
import ServerList from './Components/ServerList.vue';

export default {
    components: {
        'app-footer': Footer,
        'server-details': ServerDetails,
        'app-header': Header,
        'server-list': ServerList
    }
}
</script>

<style>

</style>
