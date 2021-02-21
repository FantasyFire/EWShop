<template>
    <div class="home">
        <nav-bar>
            <template v-slot:default>图书商城</template>
        </nav-bar>

        <div class="banners">
            <img src="~assets/images/1.jpeg" alt="">
        </div>

        <recommend-view :recommends="recommends"></recommend-view>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { getHomeAllData } from 'network/home';
import NavBar from 'components/common/navbar/NavBar';

import RecommendView from './ChildComps/RecommendView';

export default {
    name: 'Home',

    setup() {
        const recommends = ref([]);

        onMounted(() => {
            getHomeAllData().then(res => {
                console.log("getHomeAllData:", res);
                recommends.value = res.goods.data;
            }).catch(err => {

            })
        })

        return { 
            recommends
        }
    },

    components: {
        NavBar,
        RecommendView
    }
}
</script>

<style scoped>
    .banners img {
        width: 100%;
        height: auto;
        margin-top: var(--nav-bar-height);
    }
</style>