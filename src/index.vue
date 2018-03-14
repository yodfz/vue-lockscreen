<template>
    <div class="lockScreen" @touchmove.self.prevent>
        <slot></slot>
    </div>
</template>
<script>
    export default {
        components: {},
        props: [],
        data () {
            return {}
        },
        computed: {},
        methods: {},
        created () {
        },
        mounted () {
            document.body.style.overflow = 'hidden'
        },
        updated () {},
        activated () {
            document.body.style.overflow = 'hidden'
        },
        deactivated () {
            document.body.style.overflow = ''
        },
        destroyed () {
            document.body.style.overflow = ''
        }
    }
</script>
<style scoped lang="less" rel="stylesheet/less">
    .lockScreen {
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0, 0, 0, .5);
        z-index:100000;
    }
</style>
