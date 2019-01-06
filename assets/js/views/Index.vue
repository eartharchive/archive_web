<template>
    <div class="main container">
        <nav-bar class="is-hidden-mobile"/>
				<mobile-navbar class="mobile-navbar is-block-mobile" />
				<div class="contents">

					<router-view />

				</div>
				<div class="polygon"></div>
        
    </div>
    
</template>

<script>

import NavBar from '../components/NavBar'
import MobileNavbar from '../components/MobileNavBar'

export default {
	components: {
			NavBar,
			MobileNavbar
	},
	data(){
		return {
		}
	}
}
</script>

<style>
.main {
	margin: auto;
	position: relative;
}

.contents {
	background-color: #F5F5F5;
	margin: 0 12.3%;
	min-height: 740px;
	position: relative;
	overflow: hidden;
	padding: 0 6% 50px 6%
}
.polygon{
	-webkit-clip-path: polygon(0 0, 50% 100%, 100% 0);
	clip-path: polygon(0 0, 50% 100%, 100% 0);
	height: 300px;
	background-color: #F5F5F5;
	margin: 0 12.3%;
}

.header{
	font-size: 53px;
	text-align: left;
	margin-top: 30px;
	margin-bottom: 30px;
	text-align: center;
	line-height: 70px;
}

.header b{
	font-weight: 600;
	display: block;
}

.mobile-navbar{
	display: none;
}

@media screen and (max-width:768px) {
	.contents{
		margin: 0 8%;
		min-height: 500px;
	}

	.header{
		margin-top: 100px;
		font-size: 37px;
		line-height: 40px;
	}

	.polygon{
		margin: 0 8%;
		height: 200px;;
	}
}



</style>
