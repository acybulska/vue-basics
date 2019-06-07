<template>
    <div class="container">
        <div class="row">
           <Header/>
        </div>
        <hr>
        <div class="row">
            <ServerList/>
            <ServerDetails/>
        </div>
        <hr>
        <div class="row">
                <Footer/>
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
        'Server': Server,
        'Footer': Footer,
        'ServerDetails': ServerDetails,
        'Header': Header,
        'ServerList': ServerList
    }
}
</script>

<style>

</style>
