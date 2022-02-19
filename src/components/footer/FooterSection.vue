<template>
  <section id="footer">
    
<footer class="page-footer">

  
  <div class="container-fluid text-center text-md-left">

   
    <div class="row">

     
      <div class="col-lg-3 col-md col-sm">

        <h5 class="sadeem"><span style="color: #3CB2DF;">Sadeem</span> Systems</h5>
        <img :src="icons" class=" mt-5 " alt="">
     

      </div>
     

      

        
      <div class="col-3 footerList col-md col-sm" >

        
        <h5 class="text m-4">Links</h5>

        <ul class="list-unstyled pt-4 m-4">
          <li>
            <a href="#!">Home</a>
          </li>
          <li>
            <a href="#!">Pricing</a>
          </li>
          <li>
            <a href="#!">Download</a>
          </li>
          <li>
            <a href="#!">About</a>
          </li>
          <li>
            <a href="#!">Service</a>
          </li>
        </ul>

      </div>
    

     
      <div class="col-3 col-md col-sm">

        <h5 class="text m-4">Support</h5>

        <ul class="list-unstyled pt-4 m-4">
          <li>
            <a href="#!">FAQ</a>
          </li>
          <li>
            <a href="#!">How it</a>
          </li>
          <li>
            <a href="#!">Features</a>
          </li>
          <li>
            <a href="#!">Contact</a>
          </li>
          <li>
            <a href="#!">Repoting</a>
          </li>
        </ul>

      </div>
      <div class="col-3 col-md col-sm">

        <h5 class="text m-4">Contact Us</h5>

        <ul class="list-unstyled pt-4 m-4">
          <li>
            +880 12345678

          </li>
          <li>
            youremail@gmail.com

          </li>
          <li>
            Rangpur City

          </li>
          
        </ul>

     
      </div>
    
    

    </div>
   

  </div>
 

 
  <div class="footer-copyright">
      
      Copyright & Design By @Sadeem Systems

    
  </div>
  

</footer>


  </section>
</template>

<script>
import SocialIcons from '/src/assets/Group 32.png' ;
export default {
    data() {
        return {
            icons: SocialIcons,

        }
    },

}
</script>

<style scoped>
#footer {
    background-color: #EBEBF8;
          width: 100% !important;
              font-family: 'Popins' , sans-serif;


}
footer{
    padding: 5%;
}
.footer-copyright{
    margin-top: 50px;
    color:  #677294;
}
.sadeem {
   color: #707070;
    font-family: 'Roboto', sans-serif;
    font-size: 30pt;
    font-weight: 400;
    
}
li {
    color: #8A8A8A;

}
li a {
    color: #8A8A8A;
}
ul {
    font-size: 20pt;
}


</style>