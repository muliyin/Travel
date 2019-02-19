<template>
    <baidu-map class="map" :center="center" :zoom="zoom" @ready="handler"></baidu-map>
    　　<!-- baidu-map指的既是BaiduMap组件 -->

</template>

<script>
	import BaiduMap from 'vue-baidu-map/components/map/Map.vue'

	export default {
		name: "map",
		components: {
			BaiduMap  //指定组件模板
		},
		data() {
			return {
				center: {lng: 0, lat: 0},
				zoom: 13,
			}
		},
		methods: {
			handler({BMap, map}) {
				console.log(BMap, map)
				this.center.lng = 116.404
				this.center.lat = 39.915
				this.zoom = 15
			}
		}
	}
</script>

<style scoped>
    .map {
        　　width: 100%;
        　　height: 500px;
    }
</style>