<template>
    <div id="SlotCC">
        <slot-child>
            <p slot="header">头部</p>
            <a slot-scope="props">{{props.item}}</a>
            <p slot="footer">底部</p>
        </slot-child>

        <transition name="hello"
                    enter-active-class="animated swing"
                    leave-active-class="animated swing"
                    appear
                    appear-active-class="animated flash">
            <div v-show="isShow">hello vue</div>
        </transition>
        <button @click="changeAnimate">动画</button>
        <div @click.prevent.self="clickAlert(1)" style="width: 200px;height: 100px">
            <button @click="clickAlert(2)">点击</button>
        </div>

    </div>
</template>

<script>
	import SlotChild from "@/components/SlotChild";

	export default {
		name: "SlotCC",
		components: {SlotChild},
		data() {
			return {
				isShow: true
			};
		},
		methods: {
			changeAnimate() {
				this.isShow = !this.isShow
			},
			clickAlert(index) {
				alert(index)
			}
		}
	}
</script>

<style scoped>
    /*vue中css动画原理*/
    /* .hello-enter {
         opacity: 0
     }

     .hello-enter-active {
         transition: opacity 1s;
     }

     .hello-leave-to {
         opacity: 0;
     }

     .hello-leave-active {
         transition: opacity 2s;
     }*/
</style>