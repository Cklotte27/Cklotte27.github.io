<template>
	<div class="panels">
		<div class="panel">
			<span>Introduction to Computer Science</span>
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
		},
		created: function(){
			//console.log(this);
		}
	};
</script>

<style>
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