<template>
    <div id="home-header">
        <div class="header-left">
            <div class="iconfont back-icon">&#xe624;</div>
        </div>
        <div class="header-input">
            <span class="iconfont">&#xe632;</span>
            输入城市景点/游玩主题
        </div>
        <div class="header-right">
            {{this.city}}
            <span class="iconfont arrow-icon">&#xe64a;</span>
        </div>
    </div>
</template>

<script>
	export default {
		name: "HomeHeader",
        props:{
			city:String,
        },
		data() {
			return {};
		},
		methods: {}
	}
</script>

<style scoped lang="stylus">
    @import "~@/assets/varibles.styl"

    #home-header
        line-height: .86rem
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
            width: 1.24rem
            float: right
            text-align center

            .arrow-icon
                font-size .24rem
</style>