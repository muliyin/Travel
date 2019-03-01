<template>
    <div>
        <div class="recommend-title">周末去哪儿</div>
        <ul>
            <li class="item border-bottom" v-for="item of weekendList" :key="item.id">
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.url" alt="周末游图片">
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-describe">{{item.describe}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
	export default {
		name: "HomeWeekend",
        props: {
		    weekendList: Array
        },
	}
</script>

<style scoped lang="stylus">
    @import "~@/assets/mixins.styl"

    .recommend-title
        line-height .8rem
        background #eee
        text-indent .2rem

    .item-img-wrapper
        height 0
        overflow hidden
        padding-bottom 37.09%

        .item-img
            width 100%

    .item-info
        padding .1rem
        text-align left

        .item-title
            line-height .54rem
            font-size .32rem
            ellipsis()

        .item-describe
            line-height .4rem
            color #bbb
            ellipsis()

</style>