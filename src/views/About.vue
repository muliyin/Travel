<template>
    <div class="about">
        <h1>This is an about page</h1>
        <paragraph></paragraph>
        <baidu-map class="map" :center="{lng: 116.404, lat: 39.915}" :zoom="15">
            <bm-marker :position="{lng: 116.404, lat: 39.915}" :dragging="true" animation="BMAP_ANIMATION_BOUNCE">
                <!--<bm-label content="我爱北京天安门" :labelStyle="{color: 'red', fontSize : '24px'}" :offset="{width: -35, height: 30}"/>-->
            </bm-marker>
        </baidu-map>
        <ul class="lists">
            <li v-for="(list,index) in lists">
                {{list}}:{{ index }}
            </li>
        </ul>
        <button @click="addList">点击增加</button>
        <button @click="changeList">过滤</button>
        <button @click="changeFirst">修改第一个</button>
        <button @click="removeList">删除</button>
        <button v-on:click="count += 1">add 1</button>
        <div>
            <span>firstName:</span>
            <input type="text" v-model="firstname">
            <span>lastName:</span>
            <input type="text" v-model="lastname">
            <h4>{{count}}</h4>
            <input type="checkbox" v-bind:true-value="'a'" :false-value="'b'" v-model="toggle">
            <h5>复选框：{{toggle}}</h5>
            <input type="number" placeholder="number" v-model.number="number">
        </div>
        <div>
            fullName: {{fullName}}
            数字：{{typeof number}}
        </div>
    </div>
</template>
<script>
	import Paragraph from "@/components/paragraph";
	export default {
		components: {Paragraph},
		computed:{
		    fullName() {
                return this.firstname+this.lastname
		    }
        },
		data() {
			return {
				lists: [111,222,333,444,555],
                firstname:'',
                lastname:'',
                count:0,
                toggle:'a',
                number: null,
            }
		},
		methods: {
			addList(){
				this.lists.push(Math.round(Math.random()*10))
            },
            changeList(){
				this.lists = this.lists.filter((item) => item > 5)
            },
            changeFirst(){
				this.$set(this.lists,0,999);
            },
            removeList(){
				this.$delete(this.lists,this.lists.length-1)
            }

        }
	}
</script>
<style scoped>
    .lists {
        width: 50%;
        text-align: left;
        margin-left: 30%;
    }

    .map {
        width: 400px;
        height: 300px;
    }
</style>