<template>
	<div class="app">
		<img 
			 src="../assets/Images/st_olaf_image_crop.jpg" 
			 class="college_image"
			 v-show="!$store.state.mobile"
		>
		<img 
			 src="../assets/Images/st_olaf_image_phone.jpg" 
			 class="college_image"
			 v-show="$store.state.mobile"
		>
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
		props:{
		},
		created: function(){
			
		}
	};
</script>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Aclonica&display=swap');
	
	html, body {
		margin: 0;
	}
	.college_image{
		width: 100vw;	
		height: 500px;
		position: absolute;
		z-index: 1;
	}
	
	@media (max-width: 950px){
		.college_image{
			height: 400px;
		}
	}
	
	@media (max-width: 750px){
		.college_image{
			height: 350px;
		}
	}
	
	@media (max-width: 600px){
		.college_image{
			height: 300px;
		}
	}
	
	@media (max-width: 500px){
		.college_image{
			height: 270px;
		}
	}
	
	@media (max-width: 400px){
		.college_image{
			height: 200px;
		}
	}
	
	
</style>