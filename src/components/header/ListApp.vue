<template>

<div class="collapse navbar-collapse" id="navbarSupportedContent">
<ul class="list">
   <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#main">Home</a>
   </li>
        <li class="nav-item">
               <a class="nav-link" href="#services">Services US</a>
         </li>
         <li class="nav-item">
               <a class="nav-link" href="#whyUs">Why Us</a>
         </li>
         <li class="nav-item">
              <a class="nav-link" href="#ourGoals">Our Goals</a>
        </li>
        <li class="nav-item">
           <a class="nav-link" href="#ourPortfolio">Our Portofolio </a>
       </li>
      <li class="nav-item">
          <a class="nav-link" href="#ourClient">Our client</a>
      </li>
      <li> <base-button type="navs"> Contact Us </base-button> </li>
      </ul>
</div>

</template>

<script>
import BaseButton from '../BaseButton.vue'
export default {
  components: { BaseButton },

}
</script>

<style scoped>

ul li {
     font-family: 'Poppins', sans-serif;
    font-size: 15pt; 
    display: inline-block;
    list-style: none;
    
}
a {
      color: white;
}
li .active {
    text-decoration: underline blue;
    text-decoration-thickness: 3px;
}
.list {
     position: relative;
     left: 100px;
}

</style>