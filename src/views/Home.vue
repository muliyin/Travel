<template>
    <div id="home">
        <home-header></home-header>
        <home-swiper></home-swiper>
        <home-icons></home-icons>
        <home-recommend></home-recommend>
        <home-weekend></home-weekend>
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
		data() {
			return {}
		},
		methods: {}
	}
</script>
<style scoped lang="stylus">
</style>