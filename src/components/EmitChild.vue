<template>
    <div @click="handleClick">{{selfContent}}</div>
</template>

<script>
	export default {
		name: "EmitChild",
        props: {
			content:{
				type: String,
            }
        },
        mounted(){
		    this.bus.$on('change',(msg) => {
		    	this.selfContent = msg
            })
        },
        data(){
		    return {
		    	selfContent: this.content
            }
        },
        methods:{
			handleClick(){
				this.bus.$emit('change',this.selfContent)
            }
        }
	}
</script>

<style scoped>

</style>