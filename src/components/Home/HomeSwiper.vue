<template>
    <div class="wrapper">
        <swiper :options="swiperOption">
            <!-- slides -->
            <swiper-slide>
                <img src="../../assets/imgs/swiper-1.jpg" class="swiper-img" alt="轮播图1">
            </swiper-slide>
            <swiper-slide>
                <img src="../../assets/imgs/swiper-2.jpg" class="swiper-img" alt="轮播图2">
            </swiper-slide>
            <swiper-slide>
                <img src="../../assets/imgs/swiper-3.jpg" class="swiper-img" alt="轮播图3">
            </swiper-slide>
            <swiper-slide>
                <img src="../../assets/imgs/swiper-4.jpg" class="swiper-img" alt="轮播图4">
            </swiper-slide>

            <!-- Optional controls -->
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>

</template>

<script>
	export default {
		name: "HomeSwiper",

		data() {
			return {
				swiperOption: {
					pagination: {
						el: '.swiper-pagination',
						type: 'bullets',
						clickable: true,
					},
                    autoplay: true,
                    loop: true
				}
			}
		}
	}
</script>

<style scoped lang="stylus">
    .wrapper
        width 100%
        height 0
        overflow hidden
        padding-bottom 32%
        background-color #eee

        .swiper-img
            width 100%


</style>