<template>
	<div class="dashboardWrapper">
		<span class="title">Coursework</span>
		<div class="filterBox">
			<span class="filterOption CS">Computer <wbr>Science</span>
			<span class="filterOption M">Mathematics</span>
			<span class="filterOption GE">General Education</span>
			<span class="filterOption A">All</span>
		</div>
		<div class="panelWrapper">
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
		padding: 10px 10px;
		
		.title{
			font-size: 2em;
			color: #fff;
			display: inline-block;
		}
		
		.filterBox{
			background-color: #000;
			display: flex;
			justify-content: flex-end;
			padding: 0 5px;
			
			.filterOption{
				border: 2px solid #fff;
				font-size: 1.2em;
				text-align: center;
				height: 2.9em;
				display: inline-flex;
				align-items: center;
				background-color: #000;
				min-width: 5em;
				justify-content: center;
				padding: 0.3em 0.3em;
				border-radius: 0.5em;
				margin: 0 10px;
			}
			.CS{
				max-width: 6.5em;
				color: #00b4d8;
			}
			.M{
				max-width: 8em;
				color: #95d5b2;
			}
			.GE{
				max-width: 6.5em;
				color: #ffcfd2;
			}
			.A{
				max-width: 6em;
				color: #fdf0d5;
			}
		}
		
		
		.top {
			width: 100vw;
			margin: 72px auto;
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