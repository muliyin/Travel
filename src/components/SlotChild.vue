<template>
    <div>
        <slot name="header">header</slot>
        <slot v-for="item of list" :item="item"></slot>
        <slot name="footer">footer</slot>
    </div>
</template>

<script>
	export default {
		name: "SlotChild",
		data() {
			return {
                list:[1,2,3,4]
			};
		},
		methods: {

		}
	}
</script>

<style scoped>

</style>