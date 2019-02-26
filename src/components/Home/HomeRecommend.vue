<template>
    <div>
        <div class="recommend-title">热销推荐</div>
        <ul>
            <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
                <img class="item-img" :src="item.url" alt="">
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-describe">{{item.describe}}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
	export default {
		name: "HomeRecommend",
        props:{
		    recommendList: Array
        },

		data() {
			return {

            }
		},
	}
</script>

<style scoped lang="stylus">
    @import "~@/assets/mixins.styl"

    .recommend-title
        margin-top .2rem
        line-height .8rem
        background #eee
        text-indent .2rem

    .item
        overflow hidden
        display flex
        height 1.9rem

        .item-img
            width 1.7rem
            height 1.7rem
            padding .1rem

        .item-info
            flex 1
            text-align left
            padding .1rem
            min-width 0

            .item-title
                line-height .54rem
                font-size .32rem
                ellipsis()

            .item-describe
                line-height .4rem
                color #bbb
                ellipsis()

            .item-button
                background #ff9300
                padding 0 .2rem
                border-radius .06rem
                margin-top .16rem
                color: #fff
                line-height .44rem

</style>