<script setup lang="ts">
import Carousel from '../components/Carousel.vue';

</script>

<template>
    <h2>Réalité virtuelle / augmentée :</h2>
    <p class = "margin">La réalité virtuelle et augmentée est une technologie qui m'a toujours intéréssé car je trouve que cela permet de proposer des expériences complètement nouvelles. Ma première expérience VR a été sur le jeu vidéo Beat Saber, un jeu de rythme ou l'on casse des cubes avec des sabres. J'ai tout de suite compris le potentiel de cette nouvelle technologie et j'ai donc voulu l'exploiter en faisant ce que je sais faire de mieux, c'est à dire des jeux sur Unreal. Par chance, Unreal Engine supporte plutôt bien la réalité virtuelle.</p>

    <div class="project bg-1">
        <h3 class = 'title'>Sky Defender (2021)</h3>
        <div class="left">
            <div class="desc">
                <p>Largement inspiré du jeu arcade "Missile Command", Sky Defender est un jeu ou l'on doit défendre une ville en tirant sur des missiles avec un canon. C'est un projet plutôt simple qui m'a permis de m'initier à la VR et à son fonctionnement.</p>
            </div>
            <div class="learn">
                <p>Ce premier projet en réalité virtuelle m'a permis d'apprendre les bases sur le développement de jeu en VR avec Unreal Engine : comment gérer les mains du joueur, attraper le canon, tirer et comment interagir avec l'interface.</p>
            </div>
        </div>

        <div class="right">
            <div class="bg-black">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/JLn2oPp-lVU?si=QLCQRJNvRmrVED5O" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>

            <div class="bg-black">
                <h4>Technologies utilisées :</h4>
                    <ul>
                    <li>Unreal Engine 4</li>
                    <li>Blender (modèle 3D)</li>
                    <li>Paint 3D (textures)</li>
                </ul>
            </div>
        </div>
    </div>

    <div class="project bg-1">
        <h3 class = 'title'>Système de navigation en réalité augmentée (En cours...)</h3>
        <div class="left">
            <div class="desc">
                <p>Projet réalisé en équipe de 4 dans le cadre du cours "Innovation et veille technologique". Ce projet a pour but de proposer une application mobile en réalité augmentée permettant aux élèves du cégep d'être guidés dans les couloirs. L'élève choisis son trajet et un chemin virtuelle apparait sur son écran, en superposition avec le réel, filmé par la caméra du téléphone.</p>
            </div>
        </div>

        <div class="right">
            <div class="bg-black">
                <h4>Technologies utilisées :</h4>
                    <ul>
                    <li>Unity</li>
                    <li>Vuforia engine (Scan 3D du cégep)</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>

h2, h3{
    text-align: center;
}

h3{
    border-bottom: solid 1px white;
}

.bg-1{
    background-image: url('../assets/background-img.png');
}

.bg-2{
    background-image: url('../assets/game-bg/space-invader-screen.png');
}

.bg-3{
    background-image: url('../assets/game-bg/fnafm-screen.png');
}

.bg-4{
    background-image: url('../assets/game-bg/boom-ball-bg.png');
}

.bg-5{
    background-image: url('../assets/game-bg/tank-you-bg.png');
}

.bg-6{
    background-image: url('../assets/game-bg/sphere-bg.png');

}

.project{
    position: relative;

    margin:20px;
    border-radius: 8px;
    padding-left:10%;
    padding-right:10%;
 

    background-size: cover;


    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: auto auto;
    grid-template-areas: 'title title' 'left right';
}

.project::before{
    background-color: rgba(0, 0, 0, 0.699);
    background-blend-mode: color;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: inherit; /* Hérite de l'image de fond */
    background-size: cover;
    background-position: center;
    filter: blur(5px); /* Ajuste le niveau de flou ici */
    z-index: 1; /* Met le flou derrière le contenu */
}

.left{
    grid-area: left;
    z-index: 2;
}

.title{
    grid-area: title;
    z-index: 2;
}

.right{
    grid-area: right;
    z-index: 2;
}

.desc, .learn, .bg-black{
    background-color:rgba(0, 0, 0, 0.808);
    border: solid 1px rgb(0, 0, 0);
    border-radius: 8px;
    margin:10px;
    padding:10px;
}

.margin{
    margin-left: 10%;
    margin-right: 10%;
}

</style>