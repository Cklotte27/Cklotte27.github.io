<template>
	<div id="app">
		<Header></Header>
		<span style="color: white;">Work Experience</span>
	</div>
</template>

<script>
	import Header from '../components/header/Header.vue';
	export default {
		name: 'WorkExperience',
		components: {
			Header,
		},
		created: function(){
			//console.log(this);
		}
	};
</script>

<style>
	html, body {
		margin: 0;
	}
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		background-color: #192231;
		height: 100vh;
	}
</style>