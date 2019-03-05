<template>
    <div>
        <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
            <div class="iconfont header-abs-back">&#xe624;</div>
        </router-link>
        <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
            <router-link to="/">
                <div class="iconfont detail-back">&#xe624;</div>
            </router-link>
            景点详情

        </div>
    </div>
</template>

<script>
	export default {
		name: "DetailHeader",

        /*使用keep-alive,每次进入页面执行activated*/
		activated() {
			window.addEventListener('scroll', this.handScroll)
		},

        /*页面被替换的时候执行*/
        deactivated(){
			window.removeEventListener('scroll',this.handScroll)
        },

		data() {
			return {
				showAbs: true,
				opacityStyle: {
					opacity: 0
				}
			};
		},
		methods: {
			handScroll() {
				const top = document.documentElement.scrollTop || document.body.scrollTop
				if (top > 60) {
					let opacity = top / 140
					opacity = opacity > 1 ? 1 : opacity
					this.opacityStyle = {
						opacity
					}
					this.showAbs = false
				} else {
					this.showAbs = true
				}

			}
		}
	}
</script>

<style scoped lang="stylus">
    @import "~@/assets/varibles.styl"

    .header-abs
        position absolute
        left .2rem
        top .2rem
        width .8rem
        height .8rem
        border-radius .4rem
        background rgba(0, 0, 0, .8)

        .header-abs-back
            font-size .4rem
            text-align center
            line-height .8rem
            color white

    .header-fixed
        height $headerHeight
        line-height $headerHeight
        text-align center
        color #ffffff
        background $bgColor
        font-size .32rem
        position fixed
        top 0
        left 0
        right 0

        .detail-back
            top 0
            left 0
            position absolute
            width .64rem
            text-align center
            font-size .4rem
            color white

</style>