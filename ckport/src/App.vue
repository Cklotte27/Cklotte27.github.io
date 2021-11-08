<template>
	<div class="app">
		<Header></Header>
		<router-view></router-view>	
	</div>
</template>

<script>
	import Header from './components/header/Header.vue';
	export default {
		name: 'App',
		components: {
			Header
		},
		created: function(){
			//console.log(this);
		}
	};
</script>

<style lang="scss">
	@import url('https://fonts.googleapis.com/css2?family=Aclonica&display=swap');
	@import "./assets/scss/_variables.scss";
	
	html, body {
		margin: 0;
	}
	
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: Aclonica;
	}
	
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		background-image: $gradient-main-NE;
	}
	
	.container {
		max-width: 1440px;
		margin: 0 auto;
	}
	
</style>