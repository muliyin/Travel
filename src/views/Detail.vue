<template>
    <div>
        <detail-banner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"></detail-banner>
        <detail-header></detail-header>
        <div class="content">
            <detail-list :list="list"></detail-list>
        </div>
    </div>
</template>

<script>
	import DetailBanner from "@/components/Detail/DetailBanner";
	import DetailHeader from "@/components/Detail/DetailHeader";
	import DetailList from "@/components/Detail/DetailList";

	export default {
		name: "Detail",
		components: {DetailList, DetailHeader, DetailBanner},

        mounted(){
			console.log('mounted')
			this.getDetailInfo()
        },

		data() {
			return {
				list: [],
                sightName: '',
				bannerImg:'',
				gallaryImgs:[],
			}
		},

        methods:{
	        getDetailInfo(){
                this.$axios({
                    method:'get',
                    url:'/detail.json',
                    data:{
                    	detailId: this.$route.params.id
                    }
                }).then(this.getDetailInfoSuccess)
	        },
            getDetailInfoSuccess(res){
	        	let result = res.data.detail
	        	if (result){
	        		this.sightName = result.sightName
                    this.list = result.categoryList
                    this.bannerImg = result.bannerImg
                    this.gallaryImgs = result.gallaryImgs
                }
            }
        }
	}
</script>

<style scoped lang="stylus">
    .content
        height 50rem
</style>