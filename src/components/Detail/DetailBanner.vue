<template>
    <div>
        <div class="banner" @click="clickBanner">
            <img :src="bannerImg" alt="banner图" class="banner-img">

            <div class="banner-info">
                <div class="banner-title">{{sightName}}</div>
                <div class="banner-number">
                    <span class="iconfont banner-icon">&#xe67b;</span>
                    {{gallaryImgs.length}}
                </div>
            </div>
        </div>
        <fade>
            <gallary :images="gallaryImgs" v-show="showGallary" @closeGallary="closeGall"></gallary>
        </fade>
    </div>

</template>

<script>
	import Gallary from "@/components/common/gallary/Gallary";
	import Fade from "@/components/common/fade/Fade";

	export default {
		name: "DetailBanner",
		components: {Fade, Gallary},

		props: {
			sightName: String,
			bannerImg: String,
			gallaryImgs: Array
		},
		data() {
			return {
				showGallary: false,
			}
		},
		methods: {
			clickBanner() {
				this.showGallary = true
			},
			closeGall() {
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