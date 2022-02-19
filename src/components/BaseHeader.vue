<template>
  <h1 class="banner" :class="classes">
      <slot> </slot>
  </h1>

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
.banner{
font-family: 'Roboto', sans-serif;
    font-size: 40pt;
    color: white ;
}
.header--services {
  color: black;
  font-family: 'Popins' , sans-serif;
  text-align: center;
}
.header--whyUs {
    font-family: 'Popins' , sans-serif;
font-size: 42;
  color: black;


}
.header--client{
  font-family: 'Roboto', sans-serif;
  font-size: 40pt;
  font-weight: 400;
  color: black;
  padding: 1%;


}

</style>