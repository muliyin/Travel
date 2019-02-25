<template>
    <div>
        <div class="recommend-title">周末去哪儿</div>
        <ul>
            <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.url" alt="">
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

		data() {
			return {
				recommendList: [
					{
						id: 1,
						url: require('../../assets/imgs/11.jpeg'),
						title: '大连圣亚海洋世界',
						describe: '浪漫大连首站，浪漫的海洋主题乐园'
					}, {
						id: 2,
						url: require('../../assets/imgs/12.jpeg'),
						title: '大连圣亚海洋世界',
						describe: '浪漫大连首站，浪漫的海洋主题乐园'
					}, {
						id: 3,
						url: require('../../assets/imgs/19.jpeg'),
						title: '大连圣亚海洋世界',
						describe: '浪漫大连首站，浪漫的海洋主题乐园'
					}, {
						id: 4,
						url: require('../../assets/imgs/13.jpeg'),
						title: '大连圣亚海洋世界',
						describe: '浪漫大连首站，浪漫的海洋主题乐园'
					}, {
						id: 5,
						url: require('../../assets/imgs/14.jpeg'),
						title: '大连圣亚海洋世界',
						describe: '浪漫大连首站，浪漫的海洋主题乐园'
					}, {
						id: 6,
						url: require('../../assets/imgs/15.jpeg'),
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

    .item-img-wrapper
        height 0
        overflow hidden
        padding-bottom 33.9%

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