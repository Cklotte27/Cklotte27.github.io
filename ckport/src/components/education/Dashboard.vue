<template>
	<div class="dashboardWrapper">
		<div class="dashboard">
			<h1>Education</h1>
			<div class="infoPanel">
				<div class="panelWrapper">
					<div class="firstLine">
						<h2>St. Olaf College</h2>
						<span>📍 Northfield, MN</span>
					</div>
					<div class="major">
						<span>BS in Computer Science</span>
						<span class="gpa"> GPA: 3.80</span>
					</div>
					<div class="major">
						<span>BS in Mathematics </span>
						<span class="gpa"> GPA: 3.90</span>
					</div>
					<div class="lastLine">
						<span class="date">Graduated: May 2023</span>
						<span class="overall">Overall GPA: 3.70</span>
					</div>
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
		max-width: 1440px;
		width: 100vw;
		margin: 0 auto;
		z-index: 1;
		
		.dashboard {
			width: 800px;
			margin: 370px auto;
    		padding: 20px;
			background: rgba(234, 224, 239, 0.23);
			border-radius: 16px;
			box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
			backdrop-filter: blur(10.4px);
			-webkit-backdrop-filter: blur(10.4px);
			
			
			h1 {
				font-size: 24px;
				color: $color-text_light;
				text-align: center;
			}
		}
		
		@media (max-width: 950px) {
			.dashboard {
				margin: 275px auto;
			}
		}
		
		@media (max-width: 860px) {
			.dashboard {
				width: 80%;
				margin: 270px auto;
			}
		}
		
		@media (max-width: 750px) {
			.dashboard {
				margin: 230px auto;
			}
		}
		
		@media (max-width: 600px) {
			.dashboard {
				margin: 180px auto;
			}
		}
		
		@media (max-width: 500px) {
			.dashboard {
				margin: 140px auto;
			}
		}
		
		@media (max-width: 400px) {
			.dashboard {
				margin: 130px auto;
			}
		}
		
		.infoPanel {
			border-radius: 8px;
			margin-top: 20px;
			color: $color-text_light;
			
			.panelWrapper{
				display: flex;
				flex-direction: column;
				text-align: left;
				padding: 10px 50px;
				font-size: 16px;
				
				.firstLine {
					display: flex;
					justify-content: space-between;
					h2 {
						font-size: 20px;
					}
					span {
						vertical-align: middle;
						margin: 0;
					}
				}
				
				.major{
					display: flex;
					justify-content: space-between;
					margin-top: 16px;
				}
				
				.lastLine{
					display: flex;
					justify-content: space-between;
					.date, .overall{
						margin-top: 22px;
					}
				}
				
				
			}
		
		}
		
		.panels{
			display: none;
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