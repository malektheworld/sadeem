<template>
  <section id="ourClient">
      <div class="row">
          <div class="col-lg-10 col-md-6 col-sm-4 ">
              <base-header type="client"> Our Clients Feedback </base-header>
            <base-pargraph type="client">
            It Is A Long Established Fact That A Reader Will Be Distracted By The Readable Content <br> Of A Page When Looking At Its Layout. The Point Of Using Lorem Ipsum Is That It Has 
             </base-pargraph>
          </div>
          <div class="col-2">
              <button class="btn">Read More <svg xmlns="http://www.w3.org/2000/svg" style="color:black" width="30" height="30" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
</svg></button>

          </div>
      </div>
      <div class="row no-gutters " style="border: 2px">
          <div class="col-4 col-md-4 col-sm-2">
              <img :src="photo" alt="">

          </div>
          <div class="col clientCard">
              <div class="col-4 col-md-4 col-sm-2 clientInfo" >
                  <img :src="stars" alt="" style="padding-bottom: 1%">
                  
                  <p>"Sed Ut Perspiciatis Unde Omnis Iste Natus Error Sit
                        Voluptatem Accusantium Doloremque Laudantium,
                            Totam Rem Aperiam, Eaque Ipsa Quae Ab Illo
                                Modi Tem."
                 </p>
                 <h6>Riad Isalm</h6>
                 <p>Product Manager <span></span></p>
              </div>



          </div>
      </div>
     
  
      
  </section>
</template>

<script>
import stars from '/src/assets/Group 1550.png'
import photo from '/src/assets/photography-of-a-guy-wearing-green-shirt-1222271.png' ;
import BaseHeader from '../BaseHeader.vue'
export default {
  components: { BaseHeader },
  data() {
      return {
          photo: photo,
          stars: stars
      }
  },

}
</script>

<style scoped>
#ourClient {
    padding: 5%;
}
.clientCard {
    background-color: #EFEFFE;
}
.clientInfo {
    margin: 10% 15%;
}
.btn {
    background-color: #F3F3F3;
    color: #707070;
    margin-top: 80px;
    border-radius: 10px;
    width: 220px;
    height: 65px;
    font-size: 18px;
}

</style>