<template>
    <div>
        <div class=carousel ref="carousel">
			<button 
					class="carousel_button carousel_prev"  
					ref="button_prev" 
					@click="moveSlidePrev"
			>prev</button>
			<div class="carousel_track-container">
				<ul class="carousel_track" ref="carousel_track">
					<li class="carousel_slide current_slide">
						<img class="carousel_image" src="../../assets/Images/39.jpg">
					</li>	
					<li class="carousel_slide">
						<img class="carousel_image" src="../../assets/Images/sn.jpg">
					</li>	
					<li class="carousel_slide">
						<img class="carousel_image" src="../../assets/Images/gs.jpg">
					</li>	
				</ul>	
			</div>
			<button 
					class="carousel_button carousel_next" 
					ref="button_next"
					@click="moveSlideNext"
			>next</button>
			<div class="carousel_nav" ref="nav">
				<button @click="navigateDot($event)" class="carousel_indicator current_slide"></button>
				<button @click="navigateDot($event)" class="carousel_indicator"></button>
				<button @click="navigateDot($event)" class="carousel_indicator"></button>
			</div>
		</div>
    </div>
</template>

<script>
    export default {
        name: 'Carousel',
		components: {

		},
		data: function() {
			return {
				
			}
		},
		props: {
			
		},
		computed:{
			
		},
		methods: {
			setUpCarousel(){
				//console.log(this.$refs.carousel_track.children);
				//console.log(this.$refs.button_prev);
				//console.log(this.$refs.button_next);
				//console.log(this.$refs.nav.children);
				//console.log(this.slideWidth);
				this.setSlidePosition();
				//console.log(this.nextSlide);
				
			},
			getSlideWidth: function(){
				return this.$refs.carousel_track.children[0].getBoundingClientRect().width;
			},
			currentSlide: function(){
				const slides = [...this.$refs.carousel_track.children];
				var currentSlide = slides.find(slide => [...slide.classList].includes('current_slide'));
				console.log(currentSlide);
				return currentSlide
			},
			targetSlide: function(){
				var nextSlide = this.currentSlide.nextElementSibling;
				return nextSlide
			},
			setSlidePosition(){
				var slides = [...this.$refs.carousel_track.children];
				slides.forEach((slide, index) => {
					slide.style.left = this.getSlideWidth() * index + 'px';
				});
			},
			moveSlideNext(){
				//console.log(this.$refs.carousel_track.style);
				var nextSlide = this.currentSlide().nextElementSibling;
				if(!nextSlide){
					return;
				}else{
					this.moveToSlide(nextSlide);
				}
			},
			moveSlidePrev(){
				//console.log(this.$refs.carousel_track.style);
				var prevSlide = this.currentSlide().previousElementSibling;
				if(!prevSlide){
					return;
				}else{
					this.moveToSlide(prevSlide);
				}
			},
			moveToSlide(targetSlide){
				var track = this.$refs.carousel_track
				var currentSlide = this.currentSlide();
				console.log("track");
				console.log(track.style);
				console.log("currentSlide");
				console.log(currentSlide);
				console.log("targetSlide")
				console.log(targetSlide)
				track.style.transform = "translateX(-" + this.slideDistance(targetSlide) + ")";
				targetSlide.classList.add("current_slide")
				currentSlide.classList.remove("current_slide")
			},
			slideDistance(slide){
				return slide.style.left;	
			},
			navigateDot(e){
				var slides = [...this.$refs.carousel_track.children];
				var dots = [...this.$refs.nav.children];
				var targetIndex = dots.findIndex(dot => dot === e.target);
				console.log(targetIndex);
				console.log(dots);
				var targetSlide = slides[targetIndex];
				
				this.moveToSlide(targetSlide);
			}
		},
		created: function(){
			
		},
		mounted: function(){
			this.setUpCarousel()
		}
    }
</script>

<style lang="scss">
	.carousel{
		position: relative;
		height: 600px;
		width: 80%;
		margin: 0 auto;
		
		.carousel_image{
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
		
		.carousel_track-container{
			background: lightgreen;
			height: 100%;
			position: relative;
			overflow: hidden;
			
			.carousel_track{
				padding: 0;
				margin: 0;
				list-style: none;
				position: relative;
				height: 100%;
				transition: transform 250ms ease-in;
				
				.carousel_slide{
					position: absolute;
					top: 0;
					bottom: 0;
					width: 100%;
				}
			}
		}
		
		.carousel_button{
			position: absolute;
			top: 50%;
			transform: translate(-50%);
			background: tansparent;
			border: 0;
			cursor: pointer;
		}
		
		.carousel_prev{
			left: -2.5rem;
		}
		
		.carousel_next{
			right: -4.5rem;
		}
		
		.carousel_nav{
			display: flex;
			justify-content: center;
			padding: 10px 0;
			background: pink;
			
			.carousel_indicator{
				border: 0;
				border-radius: 50%;
				width: 1rem;
				height: 1rem;
				background: rgba(120,120,120,.6);
				margin: 0 12px;
				cursor: pointer;
			}
			
			.current_slide{
				background: rgba(120,120,120,.9);
			}
		}
		
		
	}
</style>