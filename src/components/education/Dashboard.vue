<template>
	<div class="dashboardWrapper">
		<span class="title">Coursework</span>
		<div class="filterBox" ref="filter">
			<span 
				  @click="changeFilter($event)" 
				  class="filterOption CS" 
				  data-id="CS" 
			>Computer <wbr>Science</span>
			<span 
				  @click="changeFilter($event)" 
				  class="filterOption M" 
				  data-id="M" 
			>Mathematics</span>
			<span 
				  @click="changeFilter($event)" 
				  class="filterOption GE" 
				  data-id="GE" 
			>General Education</span>
			<span 
				  @click="changeFilter($event)" 
				  class="filterOption A selected" 
				  data-id="A"
			>All</span>
		</div>
		<div class="panelWrapper">
			<div class="panels">
				<Panel
					:title="item.title"
					:tag="item.tag"
					v-for="(item, index) in classes"
					:key="index"
					:selectedFilter="selectedFilter"
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
				],
				selectedFilter: "A"
			}
		},
		props: {
		},
		methods:{
			checkSelected(e){
				return e.classList.contains("selected")? true : false; 				
			},
			selectFilter(e){
				e.classList.add("selected");
			},
			unselectFilter(e){
				e.classList.remove("selected");
			},
			toggleFilterSelection: function(e){
				if(this.checkSelected(e)){
					this.unselectFilter(e);
				}else{
					this.selectFilter(e);
				}
			},
			changeFilter: function(event){
				var filters = [...this.$refs["filter"].children];
				if(event.target.dataset.id === this.selectedFilter){
					return
				}else {
					filters.forEach((filter) => {
						if(this.checkSelected(filter)){
							this.toggleFilterSelection(filter)
						}
					});
						
					this.toggleFilterSelection(event.target)
					this.selectedFilter = event.target.dataset.id;	
				}
				
			}
		},
		created: function(){
			//console.log(this.$refs["filter"]);
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
		text-align: center;
		
		.title{
			font-size: 2em;
			color: #fff;
			display: inline-block;
			margin-top: 2rem;
		}
		
		.filterBox{
			background-color: #000;
			display: flex;
			justify-content: flex-end;
			padding: 0 5px;
			margin-top: 2rem;
			
			.filterOption{
				border: 2px solid #fff;
				font-size: clamp(.5rem, 2.5vmin, 1.1rem);
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
				
				&:hover{
					background-color: #fff;
				}
			}
			.CS{
				color: #00b4d8;
				&.selected{
					border: 2px solid #fff;
					color: #000;
					background-color: #00b4d8;
				}
			}
			.M{
				color: #95d5b2;
				&.selected{
					border: 2px solid #fff;
					color: #000;
					background-color: #95d5b2;
				}
			}
			.GE{
				color: #ffcfd2;
				&.selected{
					border: 2px solid #fff;
					color: #000;
					background-color: #ffcfd2;
				}
			}
			.A{
				color: #fdf0d5;
				&.selected{
					border: 2px solid #fff;
					color: #000;
					background-color: #fdf0d5;
				}
			}
		}
		
		.panelWrapper{
			margin: 4rem 0;
			
			.panels{
				display: -ms-grid;
				display: grid;
				-ms-grid-columns: (minmax(13.5rem, 1fr))[auto-fit];
				grid-template-columns: repeat(auto-fit, minmax(13.5rem, 1fr));
				gap: 1.5rem;
			}
		}
		
		
	}
	
	
	
	
</style>