<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>

<h2 class="categorie">A propos de moi</h2>
<div class="grid">
  <RouterLink to="/games" class="games icon">
    Mon parcours
  </RouterLink>
</div>
<h2 class = "categorie">Mes projets :</h2>
<div class="grid">
  <RouterLink to="/about" class="icon">
    <h3 class = "categorie-title">Mon parcours</h3>
    <img src="../assets/carre-placeholder.jpg" alt="" class="center ">
  </RouterLink>

  <RouterLink to="/games" class="icon">
    jeux vidéo
    <img src="../assets/icones/ico-gamepad.png" alt="" class = "center">
    </RouterLink>

  <RouterLink to="/games" class="icon">
    <h3 class = "categorie-title">Réalité virtuelle</h3>
    <img src="../assets/icones/ico-vr.svg" alt="" class = "center">
  </RouterLink>

  <RouterLink to="/games" class="icon">
    <h3 class = "categorie-title">Musique</h3>
    <img src="../assets/icones/ico-music.svg" alt="" class = "center">
  </RouterLink>

  <RouterLink to="/games" class="icon">
    <h3>Modélisation 3D</h3>
    <img src="../assets/icones/ico-cube.svg" alt="" class = "center">
  </RouterLink>

  

</div>
</template>

<style>
.icon{
  border-radius: 5px;
  background-color: #000000;
  
  /*
  height: 300px;
  max-width: 300px;
  */

  flex-grow: 1;
  flex-shrink: 1;


  width: 50vw;
  max-width: 300px;

  margin: 50px;

  aspect-ratio: 1;

}



.center{
  display: block;
  width: 100%;
}

.grid{
  display:flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: nowrap ;

  color:white;
  text-decoration: none;
}


.categorie{
  border-bottom: solid white 1px;
  padding-bottom: 10px;
  padding-left: 5%;
  margin-left: 10%;
  margin-right:10%;

}

.categorie-title{
  text-align: center;
  color: white;
}

</style>
