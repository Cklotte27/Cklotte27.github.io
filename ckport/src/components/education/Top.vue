<template>
	<div class="topWrapper">
		<div class="top">
			<h1>Education</h1>
			<div class="infoPanel">
				<div class="panelWrapper">
					<div class="firstLine">
						<h2>St. Olaf College</h2>
						<span>📍 Northfield, MN, USA</span>
					</div>
					<div class="major">
						<span class="left">Majors: </span>
						<span class="right"> Computer Science and Mathematics</span>
					</div>
					<div class="lastLine">
						<span class="date">Bachelor of Arts, anticipated in May 2021</span>
						<span class="overall">Overall GPA: 3.74</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Top',
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

<style lang=scss>
	@import "../../assets/scss/_variables.scss";
	
	.topWrapper {
		max-width: 1440px;
		width: 100vw;
		margin: 0 auto;
		
		.top {
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
		

		
		.infoPanel {
			border-radius: 8px;
			margin-top: 20px;
			color: $color-generic-dark;
			font-weight:bold;
			
			.panelWrapper{
				display: flex;
				flex-direction: column;
				text-align: left;
				padding: 10px 50px;
				font-size: 16px;
				
				.firstLine {
					display: flex;
					justify-content: center;
					
					h2 {
						margin-right: 1rem;
						font-size: 20px;
						line-height: 1.4em;
					}
					span{
						font-size: 1.1em;
						vertical-align: middle;
						margin: 0;
					}
				}
				
				.major{
					text-align: center;
					margin-top: 16px;
					
					.left{
						font-size: 1.2em;
						color: #000;
						font-weight: bold
					}
					.right{
						margin-left: 1rem;
						font-size: 1.1em;
					}
				}
				
				.lastLine{
					margin-top: 22px;
					text-align: center;
					display: contents;
					.date, .overall{
						margin-top: 22px;
					}
				}
				
				
			}
		
		}
		
	}
	
	
	
	
</style>