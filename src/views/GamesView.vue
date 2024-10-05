<script setup lang="ts">
import Gallery from '../components/Gallery.vue';

    // Gallies

    let boomBallImages:Array<string> = [
        "/Portfolio/src/assets/galleries/boomBall/boomBall-4.png",
        "/Portfolio/src/assets/galleries/boomBall/boomBall-2.png",
        "/Portfolio/src/assets/galleries/boomBall/boomBall-3.png",
        "/Portfolio/src/assets/galleries/boomBall/boomBall-1.png",
        "/Portfolio/src/assets/game-bg/boom-ball-bg.png"
    ]

    let tankYouImages:Array<string> = [
        "/Portfolio/src/assets/galleries/tankYou/tankYou-1.png",
        "/Portfolio/src/assets/galleries/tankYou/tankYou-2.png",
        "/Portfolio/src/assets/galleries/tankYou/tankYou-3.png",
        "/Portfolio/src/assets/game-bg/tank-you-bg.png"
    ]

</script>

<template>
    <h2>Jeux vidéo :</h2>
    <p>Le jeu vidéo occupe une grande place chez moi. C'était ma porte d'entrée vers le monde de l'informatique. J'ai toujours été faciné par cette possibilité de créer un monde et de pouvoir faire ce que l'on veux avec, de pouvoir raconter ses propres histoires. Bien avant de m'inscrire en informatique, je programmais donc des jeux, d'abord sur Scratch, avec des bloques de code, puis sur le moteur Unreal Engine 4 qui me semblais le plus accessible car permettant de programmer en blueprint. Vous trouverez ici une présentation de certains de mes projets (car malheureusement beaucoup ont disparu...)</p>

    <div class="project bg-1">
        <h3 class = 'title'>Shoot the robot (2019)</h3>
        <div class="left">
            <div class="desc">
                <p>Mon tout premier projet avec Unreal Engine 4 ! Il s'agissait d'un petit jeu de tir où l'on doit courir dans une arène et éviter les robots. Très vite, j'ai ajouté des éléments comme des particules ou de la lumière, simplement pour expérimenter avec le moteur. Au final, le jeu est plutôt simple, on a une barre de vie, des munitions, on peut se déplacer et tirer. Un FPS plutôt basique qui m'a permis d'apprendre à utiliser ce nouvel outil.</p>
            </div>
            <div class="learn">
                <p>Ce premier projet m'a permis de me familiariser avec l'engin de jeu Unreal Engine, de comprendre son fonctionnement, d'apprendre comment ajouter des sons, faire un menu, changer de niveau, etc. Il m'a aussi permis de découvrir les base de la modélisation 3D avec Blender car il fallait aussi que je fasse les décors, les robots et l'arme.</p>
            </div>
        </div>

        <div class="right">
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

    <div class="project bg-2">
        <h3 class = 'title'>Space Invader (2020)</h3>
        <div class="left">
            <div class="desc">
                <p>Le but de ce projet était de faire un jeu en 2D, j'ai donc recréé un space invader sur Unreal Engine. Pourquoi ? Aucune idée ! Mais c'était vraiment intéréssant. Ce projet m'a surout permis de jouer avec les effets de lumière d'Unreal. C'est aussi grâce à ce projet que j'ai commencé à faire de la musique car, pour la premiçre fois j'avais envie de quelque chose de plus poussé au niveau du son. Une autre particularité de ce jeu est le système de classement en ligne que j'ai pu réalisé grace à un site web qui permet de les créer gratuitement.</p>
            </div>
            <div class="learn">
                <p>Ce projet m'a permis d'apprendre comment fonctionne le système de sauvegarde d'Unreal Engine (pour le high score, et non 'hight' comme dans la vidéo, car j'étais vraiment nul en anglais...) et aussi à jouer avec la lumière dans Unreal. Ce n'est clairement pas le jeu le plus poussé de ma carrière mais j'ai beaucoup aimé travailler dessus.</p>
            </div>
        </div>

        <div class="right">
            <div class = "bg-black">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Jbb-oIZeAUs?si=PpZHEr23Is6SdYo0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div class="bg-black">
                <h4>Technologies utilisées :</h4>
                    <ul>
                    <li>Unreal Engine 4</li>
                    <li>Magix Music Maker (pour la musique)</li>
                    <li>Paint 3D (textures)</li>
                </ul>
            </div>
        </div>
    </div>

    <div class="project bg-3">
        <h3 class = 'title'>Five Night At Freddy's Multiplayer (2021)</h3>
        <div class="left">
            <div class="desc">
                <p>Premier projet en multijoueur, le but de ce jeu est similaire à celui du jeu de base "Five Night At Freddy's", Sauf que les enemies était aussi controllés par un joueur. Au final, un jeu plutôt fun qui ma permis d'apprendre les bases du jeu en ligne avec unreal.</p>
            </div>
            <div class="learn">
                <p>Ce projet m'a permis de faire mes premiers pas dans le jeu en réseau et d'apprendre les conceptes de base comme la réplication d'acteur, ou comment héberger et rejoindre une session.</p>
            </div>
        </div>

        <div class="right">
            <div class="bg-black">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/z66pD0yoYWs?si=1vvh1MN6ZjLOuplJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>

            <div class="bg-black">
                <h4>Technologies utilisées :</h4>
                    <ul>
                    <li>Unreal Engine 4</li>
                    <li>Blender (modèle 3D)</li>
                    <li>Paint 3D (certaines textures)</li>
                </ul>
            </div>
        </div>
    </div>

    <div class="project bg-4">
        <h3 class = 'title'>Boom Ball Online (2022)</h3>
        <div class="left">
            <div class="desc">
                <p>Second projet en multijoueur réseau, boom ball est un jeu de "air hockey" se jouant exclusivement à la souris, ou deux équipes de maximum 4 personnes pouvaient s'affronter. Un mode spectateur est aussi disponible pour ceux qui veulent observer le match, avec la possibilité de se déplacer autour du terrain. </p>
            </div>
            <div class="learn">
                <p>Ce jeu ma permis pour la première fois d'exploiter la physique du moteur Unreal (avec la balle), en plus de consolider mes conaissances dans le système de jeu en réseau d'Unreal, en plus de me donner une nouvelle excuse pour jouer avec des lumières et des néons !</p>
            </div>
        </div>

        <div class="right">
            <div class="bg-black">
                <Gallery :images="boomBallImages"/>
            </div>

            <div class="bg-black">
                <h4>Technologies utilisées :</h4>
                    <ul>
                    <li>Unreal Engine 4</li>
                    <li>Blender (modèle 3D)</li>
                    <li>Paint 3D (certaines textures)</li>
                </ul>
            </div>
        </div>
    </div>

    <div class="project bg-5">
        <h3 class = 'title'>Tank You (2022)</h3>
        <div class="left">
            <div class="desc">
                <p>Probablement le jeu le plus complexe que je n'ai jamais créé! Tank You est un jeu de combat de tank en réseau ou deux équipes s'affronte dans différent modes de jeu (match à mort, capture de drapeau, etc.). Plusieurs modèle de tank sont disponnible avec des caractéristique différentes pour chaque véhicule. Mon but pour ce projet était de faire un résumé de tout ce que j'avais appris sur Unreal depuis 2018, On y retrouve donc des modèle 3D fait maison, une physique très poussé (avec simulation de suspention pour les chenille des tanks) plus l'utilisation de Steam pour permettre aux joueurs de se rejoindre via la liste d'ami de Steam.</p>
            </div>
            <div class="learn">
                <p>Ce projet ma donc permis de mettre à l'épreuve tout ce que j'avais appris depuis mes début avec Unreal, en plus de développer mes compétences en modélisation 3D.</p>
            </div>
        </div>

        <div class="right">
            <div class="bg-black">
                <Gallery :images="tankYouImages"/>
            </div>

            <div class="bg-black">
                <h4>Technologies utilisées :</h4>
                    <ul>
                    <li>Unreal Engine 4</li>
                    <li>Blender (modèle 3D)</li>
                    <li>Paint 3D (certaines textures)</li>
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
    background-image: url('../assets/game-bg/shoot-the-robot-screen.png');
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

.project{
    margin:20px;
    border-radius: 8px;

    background-blend-mode: color;
    background-color: rgba(0, 0, 0, 0.30);
    background-size: cover;

    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: auto auto;
    grid-template-areas: 'title title' 'left right';
}

.left{
    grid-area: left;
}

.title{
    grid-area: title;
}

.right{
    grid-area: right;
}

.desc, .learn, .bg-black{
    background-color:rgba(0, 0, 0, 0.808);
    border: solid 1px rgb(0, 0, 0);
    border-radius: 8px;
    margin:10px;
    padding:10px;
}
</style>