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
		data: function() {
			  return {
				  mobile: this.$store.state.mobile,
				  windowWidth: null,
			  }
		  },
		 props: {
		 },
		 methods: {
			checkWindowWithVuex(){
				this.$store.dispatch('checkMobileDevice')
			}

		},
		created: function(){
			window.addEventListener('resize', this.checkWindowWithVuex);
			this.checkWindowWithVuex();
		}
	};
</script>

<style lang="scss">
	@import url('https://fonts.googleapis.com/css2?family=Aclonica&display=swap');
	@import "./assets/scss/_variables.scss";
	
	html, body {
		margin: 0;
		padding: 0;
		overflow-x: hidden;
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