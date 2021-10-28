<template>
	<div class="dashboardWrapper">
		<div class="dashboard">
			<span>Educations</span>
			<div class="infoPanel">
				<div class="panelWrapper">
					<span class="collegeName">St. Olaf College</span>
					<span>📍 Northfield, MN</span>
					<div class="major">
						<span>Computer Science Major</span>
						<span> GPA: 3.80</span>
					</div>
					<div class="major">
						<span>Mathematics Major</span>
						<span> GPA: 3.90</span>
					</div>
					<span>May 2023</span>
					<span>Overall GPA: 3.70</span>
				</div>
				
			</div>
			<div class="panels">
				<Panel :key="i"></Panel>
				<Panel :key="i"></Panel>
				<Panel :key="i"></Panel>
				<Panel :key="i"></Panel>
			</div>
		</div>
	</div>
</template>

<script>
	import Panel from './Panel.vue';
	export default {
		name: 'Dashboard',
		components: {
			Panel
		},
		data: function() {
			return {
				classes: [
					{
						title: "Introduction to Computer Science",
					},
					{
						title: "Algorithms and Data Structure",
					},
					{
						title: "Hardware Design",
					},
					{
						title: "Software Design",
					}
				]
			}
		},
		props: {
		},
		created: function(){
			//console.log(this);
		}
	};
</script>

<style>
	.dashboardWrapper {
		max-width: 97.5%;
		min-width: 740px;
		padding: 20px 12px;
	}
	
	.dashboardWrapper .dashboard {
		background-color: white;
		border-radius: 8px;
		padding: 20px;
	}
	
	.panelWrapper{
		display: flex;
    	flex-direction: column;
		text-align: left;
		padding: 10px;
	}
	
	.panelWrapper span, .major{
		margin-top: 8px;
	}
	
	.infoPanel {
		width: 340px;
		background-color: #f0f3c0;
		border-radius: 15px;
		margin-top: 20px;
	}
	
	.collegeName{
		font-size: 20px;
	}
	
	
	.panels{
		display: flex;
	}
	.panel{
		margin-top: 20px;
		margin-right: 20px;
		width: 80px;
		height: 75px;
		background-color: #494E6B;
		padding: 8px;
		border-radius: 10px;
		display: table;
	}
	
	.panel span{
		font-size: 12px;
		color: #fff;
		display: table-cell;
    	vertical-align: middle;
	}
	
</style>