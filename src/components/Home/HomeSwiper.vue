<template>
    <div class="wrapper">
        <swiper :options="swiperOption">
            <!-- slides -->
            <swiper-slide v-for="item of this.list" :key="item.id">
                <img :src="item.imgUrl" class="swiper-img" alt="轮播图">
            </swiper-slide>

            <!-- Optional controls -->
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>

</template>

<script>
	export default {
		name: "HomeSwiper",
        props:{
			list: Array
        },


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