<template>
    <div id="home">
        <home-header></home-header>
        <home-swiper :list="swiperList"></home-swiper>
        <home-icons :iconList="iconList"></home-icons>
        <home-recommend :recommendList="recommendList"></home-recommend>
        <home-weekend :weekendList="weekendList"></home-weekend>
    </div>
</template>

<script>
	import HomeHeader from "../components/Home/HomeHeader";
	import HomeSwiper from "@/components/Home/HomeSwiper";
	import HomeIcons from "@/components/Home/HomeIcons";
	import HomeRecommend from "@/components/Home/HomeRecommend";
	import HomeWeekend from "@/components/Home/HomeWeekend";
	export default {
		name: 'home',
		components: {HomeWeekend, HomeRecommend, HomeIcons, HomeSwiper, HomeHeader},

        mounted(){
            this.getHomeInfo()
        },
		data() {
			return {
                swiperList:[],
                iconList:[],
                recommendList:[],
                weekendList: []
            }
		},
		methods: {
			getHomeInfo(){
				this.$axios({
                    method: 'get',
                    url:'/index.json',
                }).then(this.getHomeInfoSuccess)
            },
			getHomeInfoSuccess(res){
				res = res.data;
				if (res.info) {
                    this.swiperList = res.info.swiperList
                    this.iconList = res.info.iconList
                    this.recommendList = res.info.recommendList
                    this.weekendList = res.info.weekendList
				}
            }
        }
	}
</script>
<style scoped lang="stylus">
</style>