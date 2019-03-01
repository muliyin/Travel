<template>
    <div>
        <div class="search">
            <input type="text" placeholder="输入城市名或拼音" class="search-input" v-model="keyword">
        </div>
        <div class="search-content" ref="searchWrapper" v-show="keyword">
            <ul>
                <li v-for="item of list" class="search-item border-bottom" @click="chooseCity(item.name)">{{item.name}}</li>
                <li class="search-item border-bottom" v-show="hasNoData">没有找到匹配数据</li>
            </ul>
        </div>
    </div>

</template>

<script>
    import BScroll from 'better-scroll'

	export default {
		name: "CitySearch",
		props: {
			cities: Object
		},
        computed:{
		    hasNoData(){
		    	return !this.list.length
            }
        },
		watch: {
			keyword() {
				if (this.timer) {
					clearTimeout(this.timer)
				}
				if (!this.keyword){
					this.list = []
                    return
                }
				this.timer = setTimeout(() => {
					const result = []
					for (let i in this.cities) {
						this.cities[i].forEach((item) => {
                            if (item.spell.indexOf(this.keyword) > -1 || item.name.indexOf(this.keyword) > -1){
                            	result.push(item)
                            }
						})
					}
					this.list = result
				}, 100)
			}
		},
        mounted(){
		    this.scroll = new BScroll(this.$refs.searchWrapper)
        },
		data() {
			return {
				keyword: '',
				list: [],
				timer: null
			}
		},
		methods:{
			chooseCity(city){
				this.$store.commit('changeCity',city);
				this.$router.push('/')
			}
		}
	}
</script>

<style scoped lang="stylus">
    @import "~@/assets/varibles.styl"

    .search
        height .72rem
        padding 0 .1rem
        background $bgColor

        .search-input
            box-sizing border-box
            line-height .62rem
            text-align center
            border-radius .06rem
            color #666
            padding 0 .1rem
            width 100%
            height .62rem

    .search-content
        top 1.58rem
        overflow hidden
        background #eee
        z-index 1
        left 0
        right 0
        bottom 0
        position absolute

        .search-item
            padding-left .2rem
            color #666
            line-height .62rem
            text-align left
            background #fff


</style>