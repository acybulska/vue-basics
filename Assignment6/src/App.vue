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
import Server from './Server.vue';
import Footer from './Footer.vue';
import ServerDetails from './ServerDetails.vue';
import Header from './Header.vue';
import ServerList from './ServerList.vue';

export default {
    components: {
        'server': Server,
        'app-footer': Footer,
        'server-details': ServerDetails,
        'app-header': Header,
        'server-list': ServerList
    }
}
</script>

<style>

</style>
