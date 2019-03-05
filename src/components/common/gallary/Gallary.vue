<template>
    <div class="container" @click="closeGallary">
        <div class="wrapper">
            <swiper :options="swiperOptions">
                <!-- slides -->
                <swiper-slide v-for="(item,index) in images" :key="index">
                    <img :src="item" class="gallary-img" alt="轮播图">
                </swiper-slide>

                <!-- Optional controls -->
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
	export default {
		name: "Gallary",
		props: {
			images: {
				type: Array,
				default() {
					return []
				}
			}
		},

		data() {
			return {
				swiperOptions: {
					pagination: {
						el: '.swiper-pagination',
						type: 'fraction'
					},
					observeParents:true,
                    observer:true
				},
			};
		},
        methods:{
	        closeGallary(){
	        	this.$emit('closeGallary')
            }
        }
	}
</script>

<style scoped lang="stylus">
    .container >>> .swiper-container
        overflow inherit

    .container
        display flex
        flex-direction column
        justify-content center
        position fixed
        z-index 99
        left 0
        right 0
        top 0
        bottom 0
        background black

        .wrapper
            padding-bottom 100%
            width 100%
            height 0

            .gallary-img
                width 100%

            .swiper-pagination
                color white
                bottom -1rem
</style>