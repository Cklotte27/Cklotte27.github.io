<template>
	<div class="app">
		<Dashboard></Dashboard>
	</div>
</template>

<script>
	import Dashboard from '../components/education/Dashboard.vue';
	export default {
		name: 'Education',
		components: {
			Dashboard
		},
		created: function(){
			//console.log(this);
		}
	};
</script>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Aclonica&display=swap');
	
	html, body {
		margin: 0;
	}
	#app {
		font-family: Aclonica;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		background-color: rgba(0, 0, 0, 0);
		height: 100vh;
	}
</style>