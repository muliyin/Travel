<template>
    <!--渐隐渐现的动画效果-->
    <transition>
        <slot></slot>
    </transition>
</template>

<script>
	export default {
		name: "Fade"
	}
</script>

<style scoped lang="stylus">
    .v-enter, .v-leave-to
        opacity 0

    .v-enter-active, .v-leave-active
        transition opacity .5s

</style>