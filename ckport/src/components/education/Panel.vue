<template>
	<div class="panel">
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
			}
		},
		created: function(){
			//console.log(this.title);
		}
	};
</script>

<style lang=scss>
	.panel{
		margin: 0 38px;
		margin-top: 20px;
		width: 200px;
		height: 100px;
		background-color: #2a3245;
		padding: 8px 15px;
		border-radius: 10px;
		display: table;
		
		.panelContent{
			display: flex;
   			justify-content: space-between;
			margin-top: 5px;
			flex-direction: column;
			height: 79px;
			
			span{
				font-size: 1em;
				text-align: center;
				color: #d6ddee;
				display: table-cell;
				vertical-align: middle;
				word-break: break-word;
			}
			
			.tagWrapper{
				display: flex;
				justify-content: flex-end;
				
				.tag{
					border: 1px solid #fff;
					padding: 2px 2px;
					border-radius: 5px;
					margin-left: 5px;
					line-height: 13px;
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