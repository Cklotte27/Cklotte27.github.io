<template>
	<div v-show="showCard" class="panel">
		<div class="panelContent">
			<span>{{title}}</span>
			<div class="tagWrapper">
				<span v-show="isCS" class="tag cs">CS</span>
				<span v-show="isM" class="tag m">M</span>
				<span v-show="isGE" class="tag ge">GE</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Panel',
		components: {

		},
		data: function() {
			return {
				
			}
		},
		props: {
			title: {
				type: String,
				required: true,
			},
			tag: {
				type: String,
				required: true,
				default: "A"
			},
			grade: {
				type: String,
				default: "A"
			},
			selectedFilter:{
				type:String,
				default: "A"
			}
		},
		computed:{
			isCS: function(){
				return this.tag.includes("CS")
			},
			isM: function(){
				return this.tag.includes("M")
			},
			isGE: function(){
				return this.tag.includes("GE")
			},
			showCard(){
				if(this.selectedFilter === "A"){
					return true;
				}else if(this.selectedFilter === "CS" && this.isCS){
					return true;	
				}else if(this.selectedFilter === "M" && this.isM){
					return true;	
				}else if(this.selectedFilter === "GE" && this.isGE){
					return true;	
				}else{
					return false;
				}
			}
		},
		created: function(){
			//console.log(this.title);
		}
	};
</script>

<style lang=scss>
	.panel{
		margin: auto;
		width: 13.5rem;
		height: 100px;
		background-color: #1a1a1a;
		border-radius: 0.5rem;
		padding: 0.4rem 0.8rem;
		-webkit-box-shadow: 1px 1px 0.5px 0.5px rgba(255, 255, 255, 0.1);
		box-shadow: 1px 1px 0.5px 0.5px rgba(255, 255, 255, 0.1);
		
		&:hover{
			background-color: #fff;
			
			.panelContent{
				span{
					color: #000;
				}
				
				.tagWrapper{
					.tag{
						border: 1px solid #000;
					}
				}
			}
		}
		
		.panelContent{
			display: flex;
   			justify-content: space-between;
			flex-direction: column;
			height: 79px;
			
			span{
				font-size: 1em;
				text-align: center;
				color: #fff;
				display: table-cell;
				vertical-align: middle;
				word-break: break-word;
			}
			
			.tagWrapper{
				display: flex;
				justify-content: flex-end;
				
				.tag{
					padding: 3px 2px 1px 2px;
					border-radius: 5px;
					display: flex;
					align-items: center;
					margin-left: 5px;
					&.cs{
						background-color: #00b4d8;
						color: #000;
						border: 1px solid #00b4d8;
					}
					&.m{
						background-color: #95d5b2;
						color: #000;
						border: 1px solid #95d5b2;
					}
					&.ge{
						background-color: #ffcfd2;
						color: #000;
						border: 1px solid #ffcfd2;
					}
				}
			}
			
		}
		
	}
	
</style>