<template>
    <div @click="count">{{number}}</div>
</template>

<script>
	export default {
		name: "counter",
        data(){
			return {
				number: 0
            }
        },
        methods:{
			count(){
				this.number++;
				this.$emit('add',this.number)
            }
        }
	}
</script>

<style scoped>

</style>