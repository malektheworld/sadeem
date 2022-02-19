<template>
<section id="services">
  <base-header type="services">
              We provide various kind of <br> service for you

   </base-header>
  <base-pargraph type="services"> 
              It Is A Long Established Fact That A Reader Will Be Distracted By The Readable <br> Content Of A Page When Looking At Its Layout. The Point Of Using Lorem

   </base-pargraph>
   <card-services> </card-services>
   </section>
</template>

<script>
import BaseHeader from '../BaseHeader.vue' ;
import CardServices from './CardServices.vue' ;

export default {

  components: { 
  BaseHeader,
  CardServices,


   },

}
</script>

<style scoped>
section {
    padding: 5%;
}

</style>