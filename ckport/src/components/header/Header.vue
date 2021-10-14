<template>
	<div class="headerWrapper">
		<div class="header">
			<div class="logoWrapper">
				<span class="logo"> Cklotte </span>	
			</div>
			<div class="menuWrapper">
				<template v-for="item in headerItems">
					<span v-bind:key="item.id">{{item.title}}</span>
				</template>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'Header',
  data: function() {
	  return {
		  headerItems: [
		  	{
				id: 1,
			  	title: "Education"
		  	},
		  	{
			  	id: 2,
			  	title: "Work Experience"
		  	},
		  	{
			  	id: 3,
			  	title: "Personal Life"
		  	}
	  	]
	  }
  },
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	@import url('https://fonts.googleapis.com/css2?family=Aclonica&display=swap');

	.header{
		padding-top: 20px;
		display: flex;
	}
	.headerWrapper .header .logoWrapper .logo{
		color: white;
		font-family: Aclonica;
		position: relative; 
		top: 24%;
		font-size: 24px;
	}
	
	.headerWrapper .header .logoWrapper{
		height: 42px;
		width: 115px;
		background-color: #494E6B;
		border-radius: 18px;
		margin-left: 10px;
	}
</style>
