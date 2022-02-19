<template>
  <button class="btn" :class="classes">
      <slot> </slot> </button>
</template>

<script>
export default {
    props: ['type'],
  computed: {
    classes() {
      return {
        'header--banner': this.type === 'banners',
        'header--whyUs' : this.type === 'whyUs' ,
        'header--client': this.type === 'client' ,
        'header--navs' : this.type ==='navs' ,


      };
    },
  },


}
</script>

<style scoped>
.header--banner{
    width: 220px;
    height: 80px;
    background-color: #FFFFFF;
    color: black;
    font-family: "Roboto" , sans-serif;
    font-size: 15pt;
    font-weight: 400;
    border-radius: 25px;
    

}
.header--navs {
    width: 170px;
    height: 50px;
    background-color: #FFFFFF;
    color: black;
    font-family: "Popins" , sans-serif;
    font-size: 15pt;
    border-radius: 50px;
    margin-left: 10px;
  

}
.header--whyUs{
  width: 240px;
    height: 70px;
    background-color: #FFFFFF ;
    color: #707070;
    font-family: "Popins" , sans-serif;
    font-size: 15pt;
    border-radius: 25px;
    border: 2px solid #0D13D7;

}

</style>