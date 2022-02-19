<template>
 
    <img  class="imgleft" :src="chooseImg" alt="phone Image">
    
   
    <img class="welcome"  :src="welcomImg" alt="phone Image">
    
    
    <img  class="imgRight"   :src="startImg" alt="phone Image">
    
   

    

  

</template>

<script>
import chooseImg from  '/src/assets/iPhoneXChoose.png' ; 
import welcomImg from  '/src/assets/iPhoneXWelcom.png' ;
import startImg from '/src/assets/iPhoneX.png' ;

export default {
    
    data() {
        return {
          
            chooseImg:  chooseImg,
            welcomImg:     welcomImg,
            startImg:    startImg
               



            
        }
    },

}
</script>

<style scoped>

.welcome {
  width: 400px;
  height: 643px;
  position: relative;
  right:  120px;


}
.imgleft {
    width: 300px !important;
}
.imgRight {

        width: 300px !important;
        position: relative;
        left: 460px;
        bottom: 560px;

}
@media (max-width: 1000px) {
    .imgRight ,  .imgleft , .welcome  {
        display: none;
    }

    }

</style>