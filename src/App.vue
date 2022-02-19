<template>
<banner-section>
</banner-section>
<services-section> </services-section>
<whyus-section> </whyus-section>
<ouregoals-section> </ouregoals-section>
<ourportfolio-section> </ourportfolio-section>
<ourclient-section> </ourclient-section>

<footer-section>  </footer-section>

 
</template>



<script>
import BannerSection from './components/bannerSlider/BannerSection.vue';
import ServicesSection from './components/Services-Section/ServicesSection.vue';
import WhyusSection from './components/Whu-Us/WhyusSection.vue' ;
import OuregoalsSection from './components/our-goals/OurgoalsSection.vue';
import OurportfolioSection from './components/Our-portfolio/OurportfolioSection.vue';
import OurclientSection from './components/Our-Clients/OurclientSection.vue';
import FooterSection from './components/footer/FooterSection.vue';

export default {
  components: {
     
     BannerSection,
     ServicesSection,
     WhyusSection,
     OuregoalsSection,
     OurportfolioSection,
     OurclientSection,
    FooterSection,







   },
  



  
  data() {
    return {
      
    }
  },
  methods: {
    
  },
  
}
</script>



<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');

</style>