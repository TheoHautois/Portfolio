<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>

</template>
<style>


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
    max-height: 200px;
    max-width: 200px;
    min-width: 200px;
    min-height: 200px;
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
}

.categorie{
  border-bottom: solid 1px white;
  margin-left:10%;
  margin-right:10%;
}


</style>
