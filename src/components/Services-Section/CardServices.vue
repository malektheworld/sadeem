<template>
  <div class="row">
      <div v-for="card in cards"  :key="card.title" class="col-lg-4 col-md col-sm ">
          <div class="card-deck">
     <div  class="card shadow-sm p-3 mb-5 bg-white">
    <img  :src="card.img" class="card-img-top" alt="...">
    <div class="card-body">
      <header class="card-title">{{ card.title }} </header>
      <p class="card-text"> {{card.descriotion}} </p>
    </div>
   
  </div>
 
  
</div>
      </div>
  </div>
</template>

<script>
import phoneImg from '/src/assets/smartphone1.png'
import dashImg from '/src/assets/Dashboard.png'
import layoutImg from '/src/assets/layout.png'
export default {
    data() {
        return {
            cards: [
                {
                img: phoneImg,
                title: 'Unique App Ui' ,
                descriotion: 't Is A Long Established Fact That A Reader Will Be Distracted By The Readable Content Of A Page  '
                },
                 {
                img: dashImg ,
                title: 'Exclient Dashboard' ,
                descriotion: 't Is A Long Established Fact That A Reader Will Be Distracted By The Readable Content Of A Page '
                }, {
                img: layoutImg,
                title: 'By Construction' ,
                descriotion: 't Is A Long Established Fact That A Reader Will Be Distracted By The Readable Content Of A Page '
                },

               
            ],

        }
    },

}
</script>

<style scoped>
.card{
    width: 428px !important;
    
    font-family: 'Roboto', sans-serif;
     /*   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);*/
        border-radius: 25px;



    
}
.card-img-top {
    display: block;
  margin-left: auto;
  margin-right: auto;
    width: 200px;
    height: 235px;
    text-align: center;
}
.card-text {
    font-size: 24pt;
}
.card-title{
    font-size: 28pt;
        font-weight: 500;

}


</style>