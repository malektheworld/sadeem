<template>
<section id="whyUs">
  <base-header type="services">
                Why Us
   </base-header>
  <base-pargraph type="services"> 
              It Is A Long Established Fact That A Reader Will Be Distracted By The Readable <br> Content Of A Page When Looking At Its Layout. The Point Of Using Lorem

   </base-pargraph>
   <div class="row">
       <div class="col-lg-6 col-md col-sm">
           <div class="whyusDiv" :style="{'background-image': 'url('+ whyusStyle +')'}">
          

           <img class="whyusImg" :src="whyusPhone" alt="">
            </div>

       </div>
       <div class="col-lg-6 col-md col-sm whyusInfo">
           <base-header type="whyUs">
            Built The App That
                    <br> Everyone Love. 
           
            </base-header>
            <base-pargraph type="whyUs"> 
It Is A Long Established Fact That A Reader Will Be Distracted By The Readable Content Of A Page When Looking At Its Layout. The Point Of Using Lorem Ipsum Is That It Has A More-Or-Less Normal Distribution Of 
                   
             </base-pargraph>
             <base-pargraph type="whyUs">
             It Is A Long Established Fact That A Reader Will Be Distracted By The Readable Content Of A Page When Looking At Its Layout. The Point Of
              </base-pargraph>
              <base-button type="whyUs"> Get More  <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
</svg> </base-button>
       </div>
   </div>
   </section>
</template>

<script>
import whyusPhone from '/src/assets/whyusPhone.png';
import whyusStyle from '/src/assets/style.png' ;

export default {
    data() {
        return {

         whyusPhone: whyusPhone,
            whyusStyle: whyusStyle

        }
    },

}
</script>

<style scoped>
BaseHeader

#whyUs {
    padding: 0;
    background-color: #3CB2DF !important;
    width: 100%;
    height: 100%;
}
.row {
    padding: 0;
}
.whyusImg {
    position: relative;
    left:  335px;
    bottom: 100px;
}
.whyusDiv {
    height: 709.14px !important;
    background-size: auto 100%;
    background-position:left ;
    background-repeat: no-repeat;
   
}

.whyusInfo {
    padding-top: 7%;
    padding-left: 7%;
}

</style>