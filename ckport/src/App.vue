<template>
	<div class="app">
		<Header></Header>
		<router-view :mobile="mobile" ></router-view>	
	</div>
</template>

<script>
	import Header from './components/header/Header.vue';
	export default {
		name: 'App',
		components: {
			Header
		},
		data: function() {
			  return {
				  mobile: null,
				  windowWidth: null,
			  }
		  },
		 props: {
		 },
		 methods: {
			checkScreenWidth(){
				 this.windownWidth = window.innerWidth;
				 if (this.windownWidth <= 750) {
					 this.mobile = true;
					 return;
				 }
				 this.mobile = false;

				 return;
			},

		},
		created: function(){
			//console.log(this);
			window.addEventListener('resize', this.checkScreenWidth);
	  		this.checkScreenWidth();
		}
	};
</script>

<style lang="scss">
	@import url('https://fonts.googleapis.com/css2?family=Aclonica&display=swap');
	@import "./assets/scss/_variables.scss";
	
	html, body {
		margin: 0;
		padding: 0;
		overflow: hidden;
		background-color: $color-generic_dark;
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
		background-color: $color-generic_dark;
		width: 100vw;
		
	}
	
	.container {
		max-width: 1440px;
		width: 100vw;
		margin: 0 auto;
	}
	
</style>