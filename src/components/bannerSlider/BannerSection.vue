<template>
  <section id="banner"  :style="{'background-image': 'url('+ mainImg +')'}">

      <div class="womenImg" :style="{'background-image': 'url('+ womenImg +')'}"> 

         <div class="styleImg" :style="{'background-image': 'url('+ styleImg +')'}">

             <base-nav> </base-nav>
             
             <banner-info> </banner-info>


          </div>

      </div>
       
    
    

  </section>
</template>

<script>
import womenImg from '/src/assets/woman.png';
import mainImg from '/src/assets/mainImage.png' ;
import styleImg from '/src/assets/styleImage.png';
import BannerInfo from './BannerInfo.vue';
import BaseNav from '../header/BaseNav.vue';

export default {
  components: { BannerInfo, BaseNav },
   
    data() {
        return {
            mainImg : mainImg ,
            womenImg: womenImg,
            styleImg: styleImg,



        }
    },


}
</script>

<style scoped>
#banner{
    
    width: 100% !important;
    height: 1001.98px;
    background-size: auto 100%;
   background-position: center;
    background-repeat: no-repeat;
}
.womenImg {
     height: 937px;
    background-size: auto 100%;
    background-position: center;
    background-repeat: no-repeat;
}
.styleImg {
     
    height: 937px;
    background-size: auto 100%;
    background-position: center;
    background-repeat: no-repeat;
}




</style>