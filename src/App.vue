<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <h1 class = "center">Théo Hautois</h1>
    <h2 class = "center">Développeur / programmeur</h2>
    <div class="h-line"></div>
  </header>
    <div class="button-container">
        <RouterLink to="/games" class="button-square">
            <img src="./assets/icones/ico-gamepad.svg" alt="Icon 2" class="icon">
            <span class = "btn-title">Jeux vidéo</span>
        </RouterLink>

        <RouterLink to="/vr" class="button-square">
            <img src="./assets/icones/ico-vr.svg" alt="Icon 1" class="icon">
            <span class = "btn-title">Réalité virtuelle / augmentée</span>
        </RouterLink>

        <RouterLink to="/music" class="button-square">
            <img src="./assets/icones/ico-music.svg" alt="Icon 2" class="icon">
            <span class = "btn-title">Musique</span>
        </RouterLink>

        <RouterLink to="/3d" class="button-square">
            <img src="./assets/icones/ico-cube.svg" alt="Icon 2" class="icon">
            <span class = "btn-title">Modélisation 3D</span>
        </RouterLink>

        <RouterLink to="/other" class="button-square">
            <img src="./assets/icones/ico-dots.svg" alt="Icon 2" class="icon">
            <span class = "btn-title">Autre</span>
        </RouterLink>
    </div>

<div class="h-line"></div>

  <RouterView />
</template>

<style scoped>

.center{
  text-align: center;
}

.h-line{
  border-bottom: solid 1px white;
  margin-left:50px;
  margin-right: 50px;
  margin-top: 10px;
  margin-bottom: 10px;
}



.button-container {
    display: flex;
    flex-wrap: wrap; /* Permet aux boutons de passer à la ligne */
    justify-content: space-evenly; /* Centre les boutons */
    gap: 16px; /* Espacement entre les boutons */
}

.button-square {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 15vw;
    height: 15vw;
    max-height: 150px;
    max-width: 150px;
    min-width: 150px;
    min-height: 150px;
    background-color: #050202; /* Couleur de fond */
    border: 1px solid #ccc; /* Bordure */
    border-radius: 8px; /* Coins arrondis */
    text-decoration: none; /* Supprime le soulignement */
    color: inherit; /* Hérite de la couleur du texte */
    transition: background-color 0.3s;
}

.button-square:hover {
    background-color: #303030; /* Couleur au survol */
}

.icon {
    margin:20px;
    width: 60%; /* Ajuste la taille de l'icône */
    height: 60%;
    margin-bottom: auto; /* Espacement entre l'icône et le texte */
}

.btn-title {
  margin-top: auto;
  text-align: center;
}

.categorie{
  border-bottom: solid 1px white;
  margin-left:10%;
  margin-right:10%;
}








</style>
