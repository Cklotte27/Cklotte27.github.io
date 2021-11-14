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
						:class="{active: checkActive(item)}"
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
								:class="{active: checkActive(item)}"
								v-bind:key="i"
								@click.native="toggleMobileNav"
							>
								{{item.title}}
							</router-link>
					</template>
				</div>
			</transition>
			<div class="backdrop" v-show="mobileNav"></div>
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
	  },
	  checkActive(headerItem){
		  return this.$route.path === headerItem.path ? true : false;
	  },
	  checkMobileMenu(el){
		  if(this.mobileNav === true){
			  if(el.target === window.$('.mobileMenuWrapper')[0] || el.target === window.$('.menuIcon')[0]){
				  return;
			  }else{
				this.toggleMobileNav();
			  }
		  }else{
			  return;
		  }
		  
	  }
  },
  created(){
	  window.addEventListener('resize', this.checkScreenWidth);
	  document.addEventListener('click', this.checkMobileMenu);
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
		background-color: $color-text_gray;
		position: -webkit-sticky; /* 사파리 브라우저 지원 */
    	position: sticky;
		top: 0px;
		
		.tabTitle{
			font-weight: 500;
			padding: 6px 10px;
			transition: 0.3s color ease;
			color: $color-text_light;
			text-decoration: none;
			
			&:hover {
				color: $color-text_gold;
			}
		}
		
		nav {
			display: flex;
			justify-content: space-between;
			padding: 25px 0;
			
			.logoWrapper {
				display: flex;
				align-items: center;
				
				.logo {
					font-weight:600;
					font-size: 24px;
					color: $color-text_light;
					text-decoration: none;
				}
			}
			
			.menuWrapper {
				position: relative;
				display: flex;
				flex: 1;
				justify-content: flex-end;
				margin-left: 32px;
				margin-right: 20px;
				
				.tabTitle{
					margin-right: 32px;
				}
				
				.tabTitle:last-child {
					margin-right: 0;
				}
				
				.active, .tabTitle:hover{
					backdrop-filter: blur(36px) saturate(200%);
					-webkit-backdrop-filter: blur(21px) saturate(169%);
					background-color: rgba(255, 255, 255, 0.28);
					border-radius: 4px;
				}
			}
			
			.menuIcon {
				cursor: pointer;
				margin-right: 25px;
				height: 25px;
				width: auto;
				filter: invert(97%) sepia(35%) saturate(5301%) hue-rotate(177deg) brightness(107%) contrast(104%);
				z-index: 103;
			}
			
			.backdrop {
				position: absolute;
				width: 100vw;
				height: 100vh;
				top: 0px;
				right: 0px;
				background-color: rgba(0, 0, 0, 0.5);
				z-index: 102;
			}
			
			.mobileMenuWrapper {
				padding: 20px;
				width: 70%;
				max-width: 50vw;
				display: flex;
				flex-direction: column;
				position: fixed;
				height: 100%;
				background-image: $gradient-nav-side;
				top: 0;
				left: 0;
				border: 1px solid rgb(223, 241, 255);
				z-index: 103;
				
				.tabTitle{
					padding: 10px 8px;
					color: $color-text_light;
					text-decoration: none;
					margin-bottom: 20px;
					width: max-content;
				}
				
				.active{
					backdrop-filter: blur(36px) saturate(200%);
					-webkit-backdrop-filter: blur(21px) saturate(169%);
					background-color: rgba(255, 255, 255, 0.28);
					border-radius: 8px;
				}
				
			}
			
			.mobile-menu-enter-active,
			.mobile-menu-leave-active {
				transition: all 0.6s ease;
			}
			
			.mobile-menu-enter,
			.mobile-menu-leave-to{
				transform: translateX(-50vw);
			}
			
			.mobile-menu-enter-to {
				transform: translateX(0);
			}
			
		}
	}
	
	
	
</style>
