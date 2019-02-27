<template>
    <ul class="list">
        <li class="item" v-for="(item,key) of cities" :key="key">{{key}}</li>
    </ul>
</template>

<script>
	export default {
		name: "Alphabet",
        props:{
			cities: Object
        }
	}
</script>

<style scoped lang="stylus">
    @import "~@/assets/varibles.styl"

    .list
        display flex
        flex-direction column
        justify-content center
        position absolute
        top 1.58rem
        right 0
        bottom 0

        .item
            line-height .4rem
            color $bgColor
            text-align center


</style>