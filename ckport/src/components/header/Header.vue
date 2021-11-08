<template>
	<header>
		<nav class="container">
			<div class="logoWrapper">
				<router-link class="logo" :to="{name: 'Home'}">Cklotte</router-link>
			</div>
			<div class="menuWrapper" v-show="!mobile">
				<template v-for="(item, i) in headerItems">
					<router-link 
						:to="{path:item.path}" 
						class="tabTitle" 
						v-bind:key="i"
					>
						{{item.title}}
					</router-link>
				</template>
			</div>
			<img 		
				 src="../../assets/Icons/menu_icon.svg" 
				 alt="menuIcon"
				 class="menuIcon"
				 @click="toggleMobileNav"
				 v-show="mobile"
			/>
			<transition name="mobile-menu">
				<div class="mobileMenuWrapper" v-show="mobileNav">
					<template v-for="(item, i) in headerItems">
							<router-link 
								:to="{path:item.path}" 
								class="tabTitle" 
								v-bind:key="i"
							>
								{{item.title}}
							</router-link>
					</template>
				</div>
			</transition>
		</nav>
	</header>
</template>

<script>
//import menuIcon from "../../assets/Icons/menu_drop_button.svg";
	
export default {
  name: 'Header',
  components: {  
  },
  data: function() {
	  return {
		  mobile: null,
		  mobileNav: null,
		  windowWidth: null,
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
  },
  methods: {
	  checkScreenWidth(){
		  this.windownWidth = window.innerWidth;
		  if (this.windownWidth <= 750) {
			  this.mobile = true;
			  return;
		  }
		  this.mobile = false;
		  this.mobileNav = false;

		  return;
	  },
	  
	  toggleMobileNav() {
		  this.mobileNav = !this.mobileNav;
	  }
  },
  created(){
	  window.addEventListener('resize', this.checkScreenWidth);
	  this.checkScreenWidth();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
	@import "../../assets/scss/_variables.scss";
	
	header{
		padding: 0 14px;
		box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
		z-index: 99;
		background-color: rgba(255, 255, 255, 0);
		
		.tabTitle{
			font-weight: 500;
			padding: 0 8px;
			transition: 0.3s color ease;
			color: $color-text_light;
			
			&:hover {
				color: $color-text_gold;
			}
		}
		
		nav {
			display: flex;
			padding: 25px 0;
			
			.logoWrapper {
				display: flex;
				align-items: center;
				
				.logo {
					font-weight:600;
					font-size: 24px;
					color: #000;
					text-decoration: none;
				}
			}
			
			.menuWrapper {
				position: relative;
				display: flex;
				flex: 1;
				align-items: center;
				justify-content: flex-end;
				margin-left: 32px;
				
				.tabTitle{
					margin-right: 32px;
				}
				
				.tabTitle:last-child {
					margin-right: 0;
				}
			}
			
			.menuIcon {
				cursor: pointer;
				position: absolute;
				top: 22px;
				right: 25px;
				height: 25px;
				width: auto;
			}
			
			.mobileMenuWrapper {
				padding: 20px;
				width: 70%;
				max-width: 200px;
				display: flex;
				flex-direction: column;
				position: fixed;
				height: 100%;
				background-image: $gradient-main-NW;
				top: 0;
				left: 0;
				
				.tabTitle{
					padding: 15px 0;
					color: $color-text_light;
					text-decoration: none;
				}
			}
			
			.mobile-menu-enter-active,
			.mobile-menu-leave-active {
				transition: all 0.6s ease;
			}
			
			.mobile-menu-enter,
			.mobile-menu-leave-to{
				transform: translateX(-200px);
			}
			
			.mobile-menu-enter-to {
				transform: translateX(0);
			}
			
		}
	}
	
	
	
</style>
