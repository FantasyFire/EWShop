<template>
    <div>
        <nav-bar>
            <template v-slot:default>详细</template>
        </nav-bar>
    </div>
</template>

<script>
    import NavBar from 'components/common/navbar/NavBar';
    import { useRouter } from 'vue-router';
    import { ref } from 'vue';
    export default {
        name: 'Detail',

        components: {
            NavBar
        },

        setup() {
            const route = useRouter();
            let id = ref(0);
            id.value = route.id;
            return {
                id
            }
        }
    }
</script>

<style scoped>
</style>