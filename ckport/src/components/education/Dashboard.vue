<template>
	<div class="dashboardWrapper">
		<div class="dashboard">
			<h1>Educations</h1>
			<div class="infoPanel">
				<div class="panelWrapper">
					<div class="firstLine">
						<h2>St. Olaf College</h2>
						<span>📍 Northfield, MN</span>
					</div>
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
				<Panel key="1"></Panel>
				<Panel key="2"></Panel>
				<Panel key="3"></Panel>
				<Panel key="4"></Panel>
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

<style lang=scss>
	@import "../../assets/scss/_variables.scss";
	
	.dashboardWrapper {
		width: 100vw;
		padding: 20px 12px;
		
		.dashboard {
			border: 4px solid $color-text_light;
			border-radius: 8px;
			padding: 20px;
			
			h1 {
				font-size: 26px;
				color: $color-text_light;
			}
		}
		
		.infoPanel {
			background-color: $color-generic_white;
			border-radius: 8px;
			margin-top: 20px;
			
			.panelWrapper{
				display: flex;
				flex-direction: column;
				text-align: left;
				padding: 10px;
				
				.firstLine {
					display: flex;
					justify-content: left;
					h2 {
						font-size: 24px;
					}
					span {
						vertical-align: middle;
						margin: 0;
					}
				}
				
			}
			
			.panelWrapper span, .major{
				margin-top: 8px;
			}
		}
		
		.panels{
			display: flex;
			flex-wrap: wrap;	
			justify-content: space-between;
			
			.panel{
				.panel span{
					font-size: 12px;
					color: #fff;
					display: table-cell;
					vertical-align: middle;
				}
			}
		}
		
	}
	
	
	
	
</style>