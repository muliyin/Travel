<template>
    <div id="home-header">
        <div class="header-left">
            <div class="iconfont back-icon">&#xe624;</div>
        </div>
        <div class="header-input">
            <span class="iconfont">&#xe632;</span>
            输入城市景点/游玩主题
        </div>
        <router-link to="/city">
            <div class="header-right">
                {{doubleC}}
                <span class="iconfont arrow-icon">&#xe64a;</span>
            </div>
        </router-link>

    </div>
</template>

<script>


	import {mapGetters, mapState} from "vuex";

	export default {
		name: "HomeHeader",
		computed:{
			...mapState(['city']),
            ...mapGetters({
                doubleC: 'doubleCity'
            })
        }
	}
</script>

<style scoped lang="stylus">
    @import "~@/assets/varibles.styl"

    #home-header
        line-height: $headerHeight
        display: flex
        background: $bgColor
        color #fff

        .header-left
            width: .64rem
            float: left

            .back-icon
                text-align center
                font-size .4rem

        .header-input
            flex: 1
            margin-top .12rem
            line-height .64rem
            height .64rem
            margin-left .2rem
            background #ffffff
            border-radius .1rem
            color #ccc

        .header-right
            color white
            min-width: 1.04rem
            padding 0 .1rem
            float: right
            text-align center

            .arrow-icon
                font-size .24rem
</style>