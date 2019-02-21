<template>
    <div id="home">
        <home-header></home-header>
        <home-swiper></home-swiper>
        <home-icons></home-icons>
    </div>
</template>

<script>
	import HomeHeader from "../components/Home/HomeHeader";
	import HomeSwiper from "@/components/Home/HomeSwiper";
	import HomeIcons from "@/components/Home/HomeIcons";
	export default {
		name: 'home',
		components: {HomeIcons, HomeSwiper, HomeHeader},
		data() {
			return {}
		},
		methods: {}
	}
</script>
<style scoped>

</style>