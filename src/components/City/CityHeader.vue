<template>
    <div class="header">
        城市选择
        <router-link to="/">
            <div class="iconfont city-back">&#xe624;</div>
        </router-link>

    </div>
</template>

<script>
	export default {
		name: "CityHeader"
	}
</script>

<style scoped lang="stylus">
    @import "~@/assets/varibles.styl"

    .header
        height $headerHeight
        overflow hidden
        line-height $headerHeight
        text-align center
        color #ffffff
        background $bgColor
        font-size .32rem
        position relative

        .city-back
            top 0
            left 0
            position absolute
            width .64rem
            text-align center
            font-size .4rem
            color white
</style>