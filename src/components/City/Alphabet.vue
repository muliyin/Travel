<template>
    <ul class="list">
        <li class="item"
            v-for="item of letters"
            :ref="item"
            @click="letterClick"
            @touchstart="touchStart"
            @touchmove="touchMove"
            @touchend="touchEnd"
            :key="item">{{item}}
        </li>
    </ul>
</template>

<script>
	export default {
		name: "Alphabet",
		props: {
			cities: Object
		},

        update(){
	        /*A距离顶部的距离*/
	        this.startY = this.$refs.A[0].offsetTop
        },

		computed: {
			letters() {
				const letters = []
				for (let item in this.cities) {
					letters.push(item)
				}
				return letters
			},
		},
		data() {
			return {
				touchStatus: false,
                startY: 0,
                timer: null
			}
		},
		methods: {
			letterClick(e) {
				this.$emit('letter', e.target.innerText);
			},
			touchStart() {
				this.touchStatus = true
			},
			touchMove(e) {
				if (this.touchStatus === true) {

					/*通过截流，减少touch触发的频率*/
					if (this.timer){
						clearTimeout(this.timer)
                    }
					this.timer = setTimeout(() => {
						/*当前字母距离顶部的距离*/
						let touchY = e.touches[0].clientY - 79
						const index = Math.floor((touchY - this.startY) / 20)
						if (index >= 0 && index < this.letters.length){
							this.$emit('letter',this.letters[index])
						}
                    },16)




				}
			},
			touchEnd() {
				this.touchStatus = false
			}
		}
	}
</script>

<style scoped lang="stylus">
    @import "~@/assets/varibles.styl"

    .list
        display flex
        flex-direction column
        justify-content center
        position absolute
        top 1.58rem
        right 0
        bottom 0

        .item
            line-height .4rem
            color $bgColor
            text-align center


</style>