<template>
    <nav class="navbar navbar-expand-lg navbar-dark">

            <a class="sadeem" href="#"><span style="color: #3CB2DF;">Sadeem</span> Light</a>

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                 <span class="navbar-toggler-icon"></span>
               </button>

               <list-app> </list-app>





                    </nav>
</template>

<script>
import ListApp from './ListApp.vue' ;
export default {
  components: { ListApp,
   },
    

}
</script>

<style scoped>
nav{
  padding: 0.5% 5% !important;
}
a:hover {
  text-decoration: none;
}

.sadeem {
  
   color: white;
    font-family: 'Roboto', sans-serif;
    font-size: 25pt;
    font-weight: bold;
    margin: 50px;
}

</style>