<template>
    <div>
        <city-header></city-header>
        <city-search :cities="cities"></city-search>
        <city-list :cities="cities" :hot="hotCities" :letter="letter"></city-list>
        <alphabet :cities="cities" @letter="handlerLetter"></alphabet>
    </div>
</template>

<script>
	import CityHeader from "@/components/City/CityHeader";
	import CitySearch from "@/components/City/CitySearch";
	import CityList from "@/components/City/CityList";
	import Alphabet from "@/components/City/Alphabet";
	export default {
		name: "City",
		components: {Alphabet, CityList, CitySearch, CityHeader},

        mounted(){
            this.getCityInfo()
        },
        data(){
		    return {
		    	cities:{},
			    hotCities:[],
                letter:''
            }
        },
        methods:{
			getCityInfo(){
				this.$axios({
                    method:'get',
                    url:'/city.json'
                }).then(this.getCityInfoSuccess)
            },
            getCityInfoSuccess(res){
				this.cities = res.data.city.cities;
				this.hotCities = res.data.city.hotCities;
            },
            handlerLetter(letter){
				this.letter = letter
            }
        }
	}
</script>

<style scoped>

</style>