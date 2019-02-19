<template>
    <li @click="deleteContent">TODO内容{{content}}</li>
</template>

<script>
	export default {
		name: "TodoContent",
        props: ['content','index'],
        methods: {
			deleteContent(){
				this.$emit('deleteItem',this.index)
            }
        }
	}
</script>

<style scoped>

</style>