<template>
    <div class="nav-bar">
        <div class="left" @click="goback"><slot name="left">
            <img src="~assets/images/left-arrow.png" alt="">
        </slot></div>
        <div class="center"><slot>图书兄弟</slot></div>
        <div class="right"><slot name="right"></slot></div>
    </div>
</template>

<script>
    import { useRouter } from 'vue-router';

    export default {
        name: 'NavBar',

        setup() {
            const router = useRouter();

            const goback = () => router.go(-1);

            return {
                goback
            }
        }
    }
</script>

<style scoped>
.nav-bar {
    background-color: var(--color-tint);
    color: #ffffff;
    position: fixed;
    display: flex;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
    height: var(--nav-bar-height);
    line-height: 45px;
    text-align: center;
    box-shadow: 0 2px 0px rgba(100, 100, 100, 0.1);
}

.left, .right {
    width: 60px;
}

.left img {
    width: 45px;
    padding: 10px;
}

.center {
    flex: 1;
}
</style>