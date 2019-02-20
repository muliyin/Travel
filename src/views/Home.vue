<template>
    <div id="home">
        <home-header></home-header>
        <home-swiper></home-swiper>

    </div>
</template>

<script>
	import HomeHeader from "../components/Home/HomeHeader";
	import HomeSwiper from "@/components/Home/HomeSwiper";
	export default {
		name: 'home',
		components: {HomeSwiper, HomeHeader},
		data() {
			return {}
		},
		methods: {}
	}
</script>
<style scoped>

</style>