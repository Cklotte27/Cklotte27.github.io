<template>
	<div id="Home">
		<span style="color: white;">Home</span>
	</div>
</template>

<script>
	export default {
		name: 'Home',
		components: {
		},
		created: function(){
			console.log(this);
			console.log("Homes")
		}
	};
</script>

<style lang="scss">
	@import url('https://fonts.googleapis.com/css2?family=Aclonica&display=swap');
	@import "../assets/scss/_variables.scss";
	html, body {
		margin: 0;
	}
	#Home {
		font-family: Aclonica;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		height: 100vh;
	}
</style>