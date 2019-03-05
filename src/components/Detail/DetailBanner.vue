<template>
    <div>
        <div class="banner" @click="clickBanner">
            <img src="../../assets/imgs/14.jpeg" alt="banner图" class="banner-img">

            <div class="banner-info">
                <div class="banner-title">大连圣海洋世界(AAAA景区)</div>
                <div class="banner-number">
                    <span class="iconfont banner-icon">&#xe67b;</span>
                    39
                </div>
            </div>
        </div>
        <gallary :images="this.images" v-show="showGallary" @closeGallary="closeGall"></gallary>
    </div>

</template>

<script>
	import Gallary from "@/components/common/gallary/Gallary";

	export default {
		name: "DetailBanner",
		components: {Gallary},
		data() {
			return {
				showGallary: false,
				images: ['https://up.enterdesk.com/edpic_360_360/31/f4/1e/31f41ed6176194090c267044933531f0.jpg',
					'https://up.enterdesk.com/edpic_360_360/d6/42/58/d642580757e6b1f8af9a4ed199ad63cc.jpg',
					'https://up.enterdesk.com/edpic_360_360/e9/f5/47/e9f54730243b1e537dc43cc3093623d8.jpg']
			}
		},
        methods:{
	        clickBanner(){
	        	this.showGallary = true
            },
	        closeGall(){
	        	this.showGallary = false
            }
        }
	}
</script>

<style scoped lang="stylus">
    .banner
        position relative
        height 0
        padding-bottom 55%
        overflow hidden

        .banner-img
            width 100%

        .banner-info
            position absolute
            display flex
            right 0
            bottom 0
            line-height .6rem
            left 0
            background-image linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
            color white

            .banner-title
                font-size .32rem
                padding 0 .2rem
                text-align left
                flex 1

            .banner-number
                margin-top .14rem
                border-radius .2rem
                background rgba(0, 0, 0, .8)
                padding 0 .4rem
                font-size .24rem
                height .32rem
                line-height .32rem
</style>