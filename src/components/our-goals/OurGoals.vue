<template>
  <div class="row goal">
      <div class="col-3  col-md col-sm ">
          <div class="row no-gutters shadow-sm p-3 mb-5 bg-white active">
              <div class="col-lg-4 col-md col-sm">
                  <img :src="checkIcon" alt="icon">

              </div>
              <div class="col-lg  col-md col-sm ">
                  <span>100+</span>
                  <br>
                  <p> Projects Complete</p>
                  

              </div>
          </div>
      </div>
      <div class="col-3  col-md col-sm ">  
          <div class="row">
              <div class="col-lg-4 col-md col-sm">
                  <img :src="activeIcon" alt="icon">

              </div>
              <div class="col-lg  col-md col-sm ">
                  <span>100+</span>
                  <p>Active Projects</p>

              </div>
          </div></div>
      <div class="col-3  col-md col-sm ">  <div class="row">
              <div class="col-lg-4 col-md col-sm">
                  <img :src="supervisedIcon" alt="icon">

              </div>
              <div class="col-lg  col-md col-sm ">
                  <span>90+</span>
                  <p>Client Satisfied</p>

              </div>
          </div></div>
      <div class="col-3  col-md col-sm"> <div class="row">
              <div class="col-lg-4 col-md col-sm">
                  <img :src="supervisedIcon" alt="icon">

              </div>
              <div class="col-lg  col-md col-sm">
                  <span>56+</span>
                  <p>Country Available</p>

              </div>
          </div></div>

  </div>
</template>

<script>
import checkIcon from '/src/assets/check_circle.jpg' ;
import activeIcon from '/src/assets/assignment_turned_in-24px.png' ;
import supervisedIcon from '/src/assets/supervised_user_circle-24px (2).png'
export default {
    data() {
        return {
            checkIcon:  checkIcon ,
            activeIcon: activeIcon ,
            supervisedIcon: supervisedIcon,


        }
    },

}
</script>

<style scoped>
.goal {
    padding: 2%;
}
span{
    color: #3CB2DF;
    font-size: 25pt;
    font-family: 'Popins' , sans-serif;

}
p {
    font-size: 15pt;
    font-family: 'Popins' , sans-serif;
}
.active {

border-bottom-right-radius: 80px 80px;    
}
</style>