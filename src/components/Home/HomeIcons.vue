<template>
    <div class="allicons">
        <swiper>
            <swiper-slide v-for="(page,index) of pages" :key="index">
                <div class="icons" v-for="item of page" :key="item.id">
                    <div class="icon-img">
                        <svg class="icon icon-item" aria-hidden="true">
                            <use :xlink:href="item.name"></use>
                        </svg>
                        <p>{{item.describe}}</p>
                    </div>
                </div>
            </swiper-slide>
        </swiper>
    </div>

</template>

<script>
	export default {
		name: "HomeIcons",
        props:{
		    iconList: Array
        },

        computed: {
		    pages(){
		    	const pages = [];
                this.iconList.forEach((item,index) => {
                	const page = Math.floor(index / 8);
                	if (!pages[page]){
                		pages[page] = []
                    }
                	pages[page].push(item);
                })
                return pages
            }
        },

        data() {
	        return {

            };
        }
	}
</script>

<style scoped lang="stylus">
    @import "~@/assets/varibles.styl"
    @import "~@/assets/mixins.styl"

    .icon {
        width: 1em;
        height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }

    .allicons >>> .swiper-container
        height 0
        padding-bottom 50%

    .icons
        float left
        width 25%
        padding-bottom 25%
        overflow hidden
        position relative

        .icon-img
            position absolute
            top 0
            left 0
            right 0
            bottom .44rem
            display flex
            justify-content center
            align-items center
            box-sizing border-box
            padding .3rem
            flex-wrap wrap

            .icon-item
                font-size 1rem
                display block

            p
                color $darkTextColor
                font-size .3rem
                ellipsis()




</style>