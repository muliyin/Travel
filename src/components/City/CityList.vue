<template>
    <div class="list" ref="wrapper">
        <div ref="content">
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">{{currentCity}}</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div class="button-wrapper" v-for="city of hot" :key="city.id" @click="chooseCity(city.name)">
                        <div class="button">{{city.name}}</div>
                    </div>
                </div>
            </div>
            <div class="area" v-for="(item,key) of cities" :key="key" :ref="key">
                <div class="title border-topbottom">{{key}}</div>
                <div class="item-list">
                    <div class="item border-bottom"
                         @click="chooseCity(innerItem.name)"
                         v-for="innerItem of item"
                         :key="innerItem.id">{{innerItem.name}}</div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
	import Bscroll from 'better-scroll'
	import {mapMutations, mapState} from "vuex";

	export default {
		name: "CityList",
        props:{
			cities: Object,
            hot: Array,
            letter: String,
        },

        mounted() {
			this.scroll = new Bscroll(this.$refs.wrapper)
        },

        watch:{
			letter (){
                if (this.letter){
                	this.scroll.scrollToElement(this.$refs[this.letter][0])
                }
            }
        },

        computed:{
			...mapState({
                currentCity: 'city'
            }),
        },

        methods:{
			...mapMutations(['changeCity']),
	        chooseCity(city){
	        	this.changeCity(city)
		        this.$router.push('/')
            }
        }
	}
</script>

<style scoped lang="stylus">
    @import "~@/assets/varibles.styl"

    .border-topbottom
        &:before
            border-color #ccc

        &:after
            border-color #ccc

    .border-bottom
        &:before
            border-color #ccc

        &:after
            border-color #ccc

    .list
        position absolute
        overflow hidden
        top 1.58rem
        left 0
        bottom 0
        right 0

        .title
            background #eee
            color #666
            padding-left .2rem
            font-size .26rem
            text-align left
            line-height .54rem

        .button-list
            overflow hidden
            padding .1rem .6rem .1rem .1rem

            .button-wrapper
                float left
                width 33.33%

                .button
                    margin .1rem
                    padding .1rem 0
                    border-radius .06rem
                    border .02rem solid #ccc
                    text-align center

        .item-list

            .item
                text-align left
                line-height .76rem
                padding-left .2rem


</style>