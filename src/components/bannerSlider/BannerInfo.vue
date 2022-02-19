<template>
     <div class="row">
         <div class="col-lg-6 col-md-4 col-sm-2 info">
              <base-header> 
                We Create Applications <br> With Excellent Technology.
               </base-header>
               <base-pargraph>
                      It Is A Long Established Fact That A Reader Will Be Distracted By
                       The Readable Content Of A Page When Looking At Its Layout. 
                       The Point Of Using Lorem Ipsum Is That It Has A More-Or-Less Normal 
                       Distribution Of Letters, As Opposed To Using 'Content
              </base-pargraph>
                <base-button type="banners"> Download Now  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
       <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
      <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
     </svg> 
     </base-button>
     <a class="explore"> Explore More  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
</svg> </a>
           </div>
           <div class="col-lg-6 col-md-4 col-sm-2">

           <banner-image> </banner-image>
           </div>
         
               
              


           
       </div>
          


  
      
                

</template>

<script>
//import BaseNav from '../header/BaseNav' ;
import BannerImage from './BannerImage.vue'
export default {
   

    data() {
        return {
           
    }

} ,
components: {
  //  BaseNav,
    BannerImage,


    
}

}
</script>

<style scoped>
.explore {
    color: white;
    font-size: 24t;
    font-family: "Roboto" , sans-serif;
    padding: 2%;
}



.info{
    padding: 2% 6% ;
      
}

    


</style>