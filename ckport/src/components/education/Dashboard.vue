<template>
	<div class="dashboardWrapper">
		<span class="title">Coursework</span>
		<div class="filterBox">
			<span class="filterOption CS">Computer <wbr>Science</span>
			<span class="filterOption M">Mathematics</span>
			<span class="filterOption GE">General Education</span>
			<span @click="toggleFilterSelection($event)" class="filterOption A selected">All</span>
		</div>
		<div class="panelWrapper">
			<div class="panels">
				<Panel
					:title="item.title"
					:tag="item.tag"
					v-for="(item, index) in classes"
					:key="index"
				>
				</Panel>
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
						title: "Computer Science for science/math",
						tag: "CS, M"
					},
					{
						title: " Ethical Issues in Software Design",
						tag: "CS"
					},
					{
						title: "Hardware Design",
						tag: "CS"
					},
					{
						title: "Software Design",
						tag: "CS"
					},
					{
						title: "Programming Languages",
						tag: "CS"
					},
					{
						title: "Algorithms and Data Structures",
						tag: "CS"
					},
					{
						title: "Calculus I",
						tag: "M"
					},
					{
						title: "Calculus II",
						tag: "M"
					},
					{
						title: "Linear Algebra",
						tag: "M"
					},
					{
						title: "Multivariable Calculus",
						tag: "M"
					},
					{
						title: "Real Analysis",
						tag: "M"
					},
					{
						title: "Modern Computational Math",
						tag: "M, CS"
					},
					{
						title: "Differential Equations",
						tag: "M"
					},
					{
						title: "Complex Analysis",
						tag: "M"
					},
					{
						title: "Statistics for Science",
						tag: "CS"
					},
					{
						title: " Introduction to Data Science",
						tag: "CS, M"
					},
					{
						title: "Integrated Chem/Bio I + Lab",
						tag: "GE"
					},
					{
						title: "Integrated Chem/Bio II + Lab",
						tag: "GE"
					},
					{
						title: "First-Year Writing",
						tag: "GE"
					},
					{
						title: "Bible/Culture/Commun",
						tag: "GE"
					},
					{
						title: "Philosophical Theology",
						tag: "GE"
					},
					{
						title: "Intro to Theater",
						tag: "GE"
					},
					{
						title: "Beginning Swimming",
						tag: "GE"
					},
					{
						title: "Principles of Psychology",
						tag: "GE"
					},
					{
						title: "African Literature",
						tag: "GE"
					},
					{
						title: "Management",
						tag: "GE"
					},
				]
			}
		},
		props: {
		},
		methods:{
			toggleFilterSelection: function(event){
				console.log(event.target.classList);
				if(event.target.classList.contains("selected")){
					console.log("yes")
					var index = event.target.classList.indexOf("selected");
					event.target.classList.splice(index,1);
					console.log(event.target.classList);
				}else{
					console.log("no")
				}
			}
		},
		created: function(){
			//console.log(this.classes.map(x=>x.title));
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
				cursor: pointer;
			}
			.CS{
				max-width: 6.5em;
				color: #00b4d8;
				&.selected{
					border: 2px solid #fff;
					color: #000;
					background-color: #00b4d8;
				}
			}
			.M{
				max-width: 8em;
				color: #95d5b2;
				&.selected{
					border: 2px solid #fff;
					color: #000;
					background-color: #95d5b2;
				}
			}
			.GE{
				max-width: 6.5em;
				color: #ffcfd2;
				&.selected{
					border: 2px solid #fff;
					color: #000;
					background-color: #ffcfd2;
				}
			}
			.A{
				max-width: 6em;
				color: #fdf0d5;
				&.selected{
					border: 2px solid #fff;
					color: #000;
					background-color: #fdf0d5;
				}
			}
		}
		
		.panelWrapper{
			padding: 0 20px;
			margin: 20px 0;
			
			.panels{
				display: flex;
				flex-wrap: wrap;	
				justify-content: flex-start;
			}
		}
		
		
	}
	
	
	
	
</style>