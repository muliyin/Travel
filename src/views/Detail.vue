<template>
    <div>
        <detail-banner></detail-banner>
        <detail-header></detail-header>
        <div class="content"></div>
    </div>
</template>

<script>
	import DetailBanner from "@/components/Detail/DetailBanner";
	import DetailHeader from "@/components/Detail/DetailHeader";
	export default {
		name: "Detail",
		components: {DetailHeader, DetailBanner}
	}
</script>

<style scoped lang="stylus">
.content
    height 50rem
</style>