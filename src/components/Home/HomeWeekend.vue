<template>
    <div>
        <div class="recommend-title">周末去哪儿</div>
        <ul>
            <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
                <div>
                    <img class="item-img" :src="item.url" alt="">
                </div>
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
		name: "HomeWeekend",

		data() {
			return {
				recommendList: [
					{
						id: 1,
						url: require('../../assets/imgs/icon1.png'),
						title: '大连圣亚海洋世界',
						describe: '浪漫大连首站，浪漫的海洋主题乐园'
					}, {
						id: 2,
						url: require('../../assets/imgs/icon2.png'),
						title: '大连圣亚海洋世界',
						describe: '浪漫大连首站，浪漫的海洋主题乐园'
					}, {
						id: 3,
						url: require('../../assets/imgs/icon3.png'),
						title: '大连圣亚海洋世界',
						describe: '浪漫大连首站，浪漫的海洋主题乐园'
					}, {
						id: 4,
						url: require('../../assets/imgs/icon4.png'),
						title: '大连圣亚海洋世界',
						describe: '浪漫大连首站，浪漫的海洋主题乐园'
					}, {
						id: 5,
						url: require('../../assets/imgs/icon5.png'),
						title: '大连圣亚海洋世界',
						describe: '浪漫大连首站，浪漫的海洋主题乐园'
					}, {
						id: 6,
						url: require('../../assets/imgs/icon1.png'),
						title: '大连圣亚海洋世界',
						describe: '浪漫大连首站，浪漫的海洋主题乐园'
					},
				]
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