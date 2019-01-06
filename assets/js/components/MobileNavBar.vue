<template>
<div>
	<div class="menu-overlay"></div>
	<nav class="mobile-nav">
    <div class="logo">
      <router-link to="/">
        <img src="/assets/archive-earth-logo.svg" alt="archive-earth-logo">
      </router-link>
    </div>
		
		<div class="menu-toggle-btn" @click="toggleMenu">
			<b-icon
					icon="menu"
					size="is-large"
					id="burger-menu-btn"
					>
			</b-icon>
			<b-icon
					icon="close"
					size="is-large"
					id="close-menu-btn"
					>
			</b-icon>
		</div>

    <ul class="menu" v-if="menu">
      <li>
        <router-link to="/about" @click.native="toggleMenu">About</router-link>
      </li>
      <li>
        <router-link to="/news" @click.native="toggleMenu">News</router-link>
      </li>
      <li>
        <router-link to="/follow" @click.native="toggleMenu">Follow</router-link>
      </li>
    </ul>
  </nav>
</div>
  
</template>

<script>
import TweenLite from 'gsap'
export default {

	data(){
		return {
			menu: false,
			btnScale: 0,
			btnRotation: 0,
			overlayScale: 0
		}
	},

	methods: {
		toggleMenu(){
			this.menu = !this.menu

			TweenLite.to('#close-menu-btn', .2, {
				scale: Math.abs(this.btnScale - 1),
				rotation: Math.abs(this.btnRotation - 180),
				display: 'inline-flex'
			})

			TweenLite.to('#burger-menu-btn', .2, {
				scale: this.btnScale,
			})

			this.btnScale = Math.abs(this.btnScale - 1)
			this.btnRotation = Math.abs(this.btnRotation - 180)

			this.overlayScale = Math.abs(this.overlayScale - 100 ) ;
			TweenLite.to('.menu-overlay', .4, {
				scale: this.overlayScale,
			})
		}
	}
};
</script>

<style>
.menu-overlay{
	position: absolute;
	width: 100px;
	height: 100px;
	z-index: 10;
	background-color: #ffffff;
	opacity: .95;
	border-radius: 50%;
	top: -100px;
	left: 0;
	right: 0;
	margin: auto;
	border-color: #333;
	border-width: 2px;
}
.mobile-nav{
	position: absolute;
	z-index: 10;
	width: 100%;
}

.mobile-nav .logo{
	float: left;
	width: 120px;
	height: 120px;
	display: flex;
	align-items: center;
	margin-left: 10px;
}

.mobile-nav .menu-toggle-btn{
	float: right;
	color: #999999;
}

.mobile-nav .menu-toggle-btn .icon{
	position: absolute;
	top: 30px;
	right: 20px;
}

.mobile-nav .menu-toggle-btn .icon:nth-child(2){
	display: none;
}

.mobile-nav .menu{
	clear: both;
}

.mobile-nav .menu li a{
    color: rgba(26, 51, 21, 1.0);
		font-size: 30px;
		font-weight: 700;
}

.mobile-nav .menu li {
    margin-bottom: 20px;
}

</style>
