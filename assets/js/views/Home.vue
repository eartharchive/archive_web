<template>
  <div class="home-page">
    <h1>Welcome to <b>Archive.Earth</b></h1>
    <!--
    <div class="folder">
      <img src="/assets/archive-earth-coloured-logo.svg" alt="archive-earth-coloured-logo">
    </div>
    -->

    <div class="globe">
      <img src="/assets/globe.png" alt="globe">
    </div>
    

    <div class="folder-wrapper">
      <div class="inner">
        <img class="back" src="/assets/rectangle@2x.png" alt="folder-back">
        <img class="front" src="/assets/rectangle-front.png" alt="folder-front">
      </div>
    </div>
  </div>
</template>

<script>

import TweenLite from 'gsap'
export default {
  mounted(){
    this.setGlobeDrop()
    this.animateGlobe()

    window.addEventListener('resize', this.setGlobeDrop);

  },

  beforeDestroy(){
    window.removeEventListener('resize', this.setGlobeDrop)
  },
  data(){
    return {
      globeDrop: 480
    }
  },
  methods: {
    setGlobeDrop(){
      if(window.innerWidth >= 768){
        this.globeDrop = 480
      }
      else{
        this.globeDrop = 320
      }
    },

    animateGlobe(){

      TweenLite.to('.globe', .5, {
        y: this.globeDrop, //490
        rotation: 180,
      })
    },
  },

  watch: {
    globeDrop: function () {
      this.animateGlobe()
    }
  }
}
</script>

<style>
.home-page{
  width: 100%;
  height: 100%;
}

.home-page h1{
  font-size: 53px;
  font-weight: 200;
  color: black;
  position: absolute;
  top: 150px;
  left: 0;
  right: 0;
}

.home-page h1 b{
  font-size: 65px;
  font-weight: 600;
}

.home-page .folder{
  margin-top: 30px;
}

.home-page .folder-wrapper{
  margin-top: 30px;
  position: absolute;
  left: 0;
  right: 0;
  top: 470px;
}

.home-page .folder-wrapper .inner{
  position: relative;
  width: 300px;
  height: 190px;
  margin: auto;
}

.home-page .folder-wrapper .inner .back{
  width: 80%;
  position: absolute;
  left: 0;
}
.home-page .folder-wrapper .inner .front{
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 9;
}

.home-page .globe{
  width: 200px;
  position: absolute;
  top: 0;
  left: -50px;
  right: 0;
  margin: auto;
  z-index: 5;
}

@media screen and (max-width: 1279px){
  .home-page h1 b{
    display: block;
  }
  
  .home-page h1{
    top: 287px;
    line-height: 50px;
  }
}

@media screen and (max-width:768px){

  .home-page h1{
    top: 200px;
  }

  .home-page .folder-wrapper{
    margin-top: 30px;
    top: 300px;
  }

  .home-page .folder-wrapper .inner{
    position: relative;
    width: 200px;
    height: 130px;
    margin: auto;
  }

  
  .home-page .globe{
    width: 120px;
    left: -35px;
    right: 0;
    margin: auto;
    z-index: 5;
  }

  .home-page h1 b{
    font-size: 45px;
    display: block;
  }

  .home-page h1{
    font-size: 37px;
  }

  .home-page .folder img{
    width: 245px;
  }

}

</style>
