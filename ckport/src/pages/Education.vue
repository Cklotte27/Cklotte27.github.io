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
		height: 400px;
		position: absolute;
		object-fit: cover;
		z-index: 1;
	}
	
	
	
	
</style>