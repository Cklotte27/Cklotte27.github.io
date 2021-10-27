<template>
	<div class="headerWrapper">
		<div class="header">
			<div class="logoWrapper">
				<span class="logo"> Cklotte </span>	
			</div>
			<div class="menuWrapper">
				<template v-for="(item, i) in headerItems">
					<router-link :to="{path:item.path}" class="tabTitle" v-bind:key="i">{{item.title}}</router-link>
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
				id: 0,
			  	title: "Home",
				path: "/"
		  	},
		  	{
				id: 1,
			  	title: "Education",
				path: "/education"
		  	},
		  	{
			  	id: 2,
			  	title: "Work Experience",
				path: "/work_experience"
		  	},
		  	{
			  	id: 3,
			  	title: "Personal Life",
				path: "/personal_life"
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
		justify-content: space-between;
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
		width: 125px;
		background-color: #494E6B;
		border-radius: 18px;
		margin-left: 10px;
		padding-left: 10px;
    	padding-right: 10px;	
	}
	
	.header .menuWrapper{
		margin-left: 25px;
		margin-right: 25px;
	}
	
	.header .menuWrapper .tabTitle{
		color: white;
		line-height: 45px;
		margin-left: 40px;
		white-space: nowrap;
		font-size: 20px;
		cursor: pointer;
	}
</style>
