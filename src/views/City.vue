<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
    </div>
</template>

<script>
	import CityHeader from "@/components/City/CityHeader";
	import CitySearch from "@/components/City/CitySearch";
	export default {
		name: "City",
		components: {CitySearch, CityHeader}
	}
</script>

<style scoped>

</style>