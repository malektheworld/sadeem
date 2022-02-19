<template>
  <p class="header--banner" :class="classes">
      <slot> </slot>
  </p>
</template>

<script>
export default {
   props: ['type'],
  computed: {
    classes() {
      return {
        'header--banner': this.type === 'banners',
        'header--services': this.type === 'services',
        'header--whyUs' : this.type === 'whyUs' ,
        'header--client': this.type === 'client' ,

      };
    },
  },


}
</script>

<style scoped>

.header--banner {
    font-family: 'Roboto', sans-serif;
    font-size: 15pt;
    color: white ;
}

.header--services {
   font-family: 'Roboto', sans-serif;
    font-size: 18pt;
    color: black;
    text-align: center;

}
.header--client{
  font-family: 'Roboto', sans-serif;
  
 
  color: #707070;
  padding: 1%;


}
.header--whyUs {
   font-family: 'Roboto', sans-serif;
font-size: 15pt;
  color: #707070;


}

</style>