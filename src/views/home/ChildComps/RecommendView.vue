<template>
    <div class="recommend">
        <div class="recommend-item" v-for="item in recommends.slice(0,4)" :key="item.id">
            <a href="" @click.prevent="goDetails(item.id)">
                <img src="~assets/images/11.jpeg" alt="">
                <div>{{item.title}}</div>
            </a>
        </div>
    </div>
</template>

<script>
    import { useRouter } from 'vue-router';

    export default {
        name: 'Recommand',

        props: {
            recommends: {
                type: Array,
                default() {
                    return [];
                }
            }
        },
        setup() {
            const route = useRouter();

            const goDetails = (id) => {
                route.push({path: '/details', query: {id}})
            }

            return {
                goDetails
            }
        }
    }
</script>

<style scoped lang="scss">
.recommend {
    display: flex;
    width: 100%;
    text-align: center;
    padding: 15px 0 30px;
    border-bottom: 8px solid #EEE;
    font-size: 12px;
}

.recommend-item {
    flex: 1;
    img {
        width: 70px;
        height: 70px;
        margin-bottom: 10px;
    }
}
</style>