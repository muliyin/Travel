<template>
    <div id="emit">
        <h3>非父子组件传值---总线/发布订阅/观察者模式</h3>
        <emit-child content="hello"></emit-child>
        <emit-child content="vue"></emit-child>
    </div>
</template>

<script>
	import EmitChild from "@/components/EmitChild";
	export default {
		name: "Emit",
		components: {EmitChild}
	}


</script>

<style scoped>

</style>