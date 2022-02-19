<template>

  <section id="ourPortfolio" >
      <base-header type="services">  Our Portfolio </base-header>
     
     <base-pargraph type="services"> It Is A Long Established Fact That A Reader Will Be Distracted By The Readable <br> Content Of A Page When Looking At Its Layout. The Point Of Using Lorem  </base-pargraph>

     <div class="row">
         
         <div  class="col-lg-3  col-md col-sm ">
        
         <img :src="chooseImg" alt="phone image">
   </div>
     <div  class="col-lg-3  col-md col-sm ">
        
         <img :src="chooseImg" alt="phone image">
   </div>
     <div  class="col-lg-3  col-md col-sm ">
        
         <img :src="startImg" alt="phone image">
   </div>
     <div  class="col-lg-3  col-md col-sm ">
        
         <img :src="startImg" alt="phone image">
   </div>
                  <div class="portfolioStyle" :style="{'background-image': 'url('+ styleImg +')'}"></div>


     </div>

  </section>
</template>

<script>
import chooseImg from  '/src/assets/iPhoneXChoose.png' ; 
import welcomImg from  '/src/assets/welcomportfolio.png' ;
import startImg from '/src/assets/iPhoneX.png' ;
import styleImg from '/src/assets/portfolioStyle.png' ;


export default {
  
    data() {
        return {
            chooseImg: chooseImg ,
            welcomImg: welcomImg,
            startImg: startImg ,
            styleImg : styleImg
            

            
        }
    },

}
</script>

<style scoped>

#ourPortfolio{ 
    width: 100% !important;
  

    padding: 5%;
   
    
}
.row {
 position: relative;
    z-index: 1;
    width: inherit;
}
.portfolioStyle {
     width: 209px;
    height: 609px;
    background-size: auto 100%;
 background-repeat: no-repeat;
 background-position: center;
 position: absolute;
 left: 95%;
 bottom: 13px;
 z-index: -1 ;

 

}

</style>