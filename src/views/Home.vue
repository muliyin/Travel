<template>
    <div class="home">
        <!--<input type="text" v-model="inputValue">
        <button v-on:click="addList">提交</button>
        <ul>
            <todo-content v-for="(item,index) of list"
                          :content="item"
                          :index="index"
                          @deleteItem="deleteList">
            </todo-content>
        </ul>-->
        <!--<div v-text="name + 'hello' + name"></div>
        <div v-html="name"></div>
        <div>{{name}}</div>-->

        <div>
            <input v-model="firstName">
            <input v-model="lastName">
            <input v-model="fullName">
        </div>
        <div @click="changeColor"
             :class="{actived: isActived}"
        >
            <p>全名1：{{fullName}}</p>
            <p>全名2：{{fullName2}}</p>
            <p>年龄：{{age}}</p>
        </div>
        <div :style="[styleObj]"
             @click="changeColor"
        >

            <!--
            v-show（频繁改变） 设置display: none隐藏
            v-if 创建、移除dom
            -->
            <h3 v-if="show">hello world</h3>
            <h3 v-else>no hello world</h3>
            <button @click="changeShow">显示隐藏</button>
        </div>

        <div>
            <div v-if="show">
                用户名：
                <input key="usrname">
            </div>
            <div v-else>
                邮箱：
                <input key="email">
            </div>
        </div>

        <div>
            数组循环：
            <div v-for="(foodItem,index) of food"
                 :key="foodItem.id">
                {{foodItem.name}} --- {{index}}
            </div>
            对象循环：
            <div v-for="(drinkItem,key,index) of drink">
                {{drinkItem}} --- {{key}} --- {{index}}
            </div>
            <button @click="changeObj">修改对象</button>
            <button @click="changeArr" >修改数组</button>
        </div>

        <table>
            <tbody is="TodoContent">

            </tbody>
        </table>

        <div @click="doRefs" ref="hello">hello world</div>

        <counter @add="handleAdd" ref="one" ></counter>
        <counter @add="handleAdd" ref="two"></counter>
        <div>总和：{{total}}</div>

        <child :content="'sdsdsdsd'" @click.native="nativeClick"></child>
    </div>
</template>

<script>
	import TodoContent from "../components/TodoContent";
	import Counter from "@/components/counter";
	import Child from "@/components/Child";


	export default {
		name: 'home',
		components: {Child, Counter, TodoContent},
		/*beforeCreate() {
			console.log('beforeCreate')
		},
		created() {
			console.log('created')
		},
		beforeMount() {
			console.log(this.$el)
			console.log('beforeMount')
		},
		mounted() {
			console.log(this.$el)
			console.log('mounted')
		},
		beforeUpdate() {
			console.log('beforeUpdate')
		},
		updated() {
			console.log('updated')
		},*/

		/*计算属性
        * 内置缓存,只要依赖的变量（firstName/lastName）不变，fullName就用缓存的值
        * */
		computed: {
			fullName: {
				get() {
					return `${this.firstName} ${this.lastName}`;
				},
				set(value) {
					let array = value.split(' ')
					this.firstName = array[0]
					this.lastName = array[1]
				}
			}
		},

		/*监听器
        *内置缓存，若firstName值不改变，使用firstName的缓存值
        * */
		watch: {
			firstName() {
				this.fullName2 = `${this.firstName} ${this.lastName}`
			},
			lastName() {
				this.fullName2 = `${this.firstName} ${this.lastName}`
			}
		},

		data() {
			return {
				list: [],
				inputValue: '',
				name: 'kylin',
				firstName: 'kylin',
				lastName: 'zhang',
				age: 28,
				fullName2: '',
				isActived: false,
				styleObj: {
					color: 'red'
				},
				show: false,
				food: [{id: 1, name: 'water'},
					{id: 2, name: 'chocolate'},
					{id: 3, name: 'milk'}],
				drink: {
					name: 'milk',
					time: '1 year',
					color: 'white'
				},
                total: 0
			}
		},
		methods: {
			addList() {
				this.list.push(this.inputValue);
			},
			deleteList(index) {
				this.list.splice(index, 1);
			},
			changeColor() {
				this.isActived = !this.isActived;
				this.styleObj.color = this.styleObj.color === 'red' ? 'black' : 'red'
			},
			changeShow() {
				this.show = !this.show
			},
			changeObj() {
				this.$set(this.drink, 'favorite', '巧克力口味')
			},
			changeArr() {
				this.$set(this.food, 1, {id: 2, name: '巧克力'})
			},
			doRefs() {
				console.log(this.$refs.hello);
			},
			handleAdd(item){
				this.total = this.$refs.one.number + this.$refs.two.number
            },
			nativeClick(){
				alert(111)
            }
		}
	}
</script>
<style scoped>
    .actived {
        color: dodgerblue;
    }
</style>