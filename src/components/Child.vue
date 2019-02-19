<template>
    <div>{{content}}</div>
</template>

<script>
	export default {
		name: "Child",
        props:{
			/*content: [Number,String]*/ //参数校验：数字或字符串
            content:{
	            type: [Number,String],
                require: false,
                default: '默认值',
                validator(value) {
                	return value.length > 5
                }
            }

        },
        methods: {

        }
	}
</script>

<style scoped>

</style>