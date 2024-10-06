import{d as m,i as j,j as h,r as w,o as a,c as t,a as e,F as o,k as _,n as y,u as x,l as q,h as v,m as k,b as d,w as c}from"./index-BqIyJ58d.js";/* empty css                                                                 */const C="/Portfolio/assets/boomBall-1-CKNfCgz5.png",P="/Portfolio/assets/boomBall-2-DFpPzfJN.png",B="/Portfolio/assets/boomBall-3-Cd85enUW.png",U="/Portfolio/assets/boomBall-4-Bk59ddmH.png",D="/Portfolio/assets/boom-ball-bg-Cs9SPdgv.png",S="/Portfolio/assets/tankYou-1-B3ZCGSou.png",E="/Portfolio/assets/tankYou-2-C63mjGfN.png",I="/Portfolio/assets/tankYou-3-DkS45_ex.png",T="/Portfolio/assets/tankYou-4-BVqlDOl_.png",Y="/Portfolio/assets/tank-you-bg-CroBY5BG.png",N="data:image/svg+xml,%3csvg%20width='100'%20height='100'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpolygon%20points='30,50%2050,30%2050,50%2050,70'%20fill='white'%20/%3e%3c/svg%3e",F="data:image/svg+xml,%3csvg%20width='100'%20height='100'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpolygon%20points='70,50%2050,30%2050,50%2050,70'%20fill='white'%20/%3e%3c/svg%3e",M={class:"carousel"},A={class:"carousel-content"},L=["src"],V=m({__name:"Carousel",setup(g){const n=j(),s=h(()=>n.default?n.default():[]);let l=w(0);function b(){l.value=(l.value+1)%s.value.length}function f(){l.value=(l.value-1+s.value.length)%s.value.length}return(W,i)=>(a(),t("div",M,[e("img",{src:N,alt:"Previous",class:"arrow",onClick:i[0]||(i[0]=r=>f())}),e("div",A,[(a(!0),t(o,null,_(s.value,(r,u)=>(a(),t(o,{key:u},[r.props?(a(),t("img",{key:0,src:r.props.src,class:y({active:u===x(l)}),alt:"Carousel Image"},null,10,L)):q("",!0)],64))),128))]),e("img",{src:F,alt:"Next",class:"arrow",onClick:i[1]||(i[1]=r=>b())})]))}}),p=v(V,[["__scopeId","data-v-a36de2b3"]]),$={class:"project bg-4"},z={class:"right"},G={class:"bg-black"},J={class:"project bg-5"},O={class:"right"},Z={class:"bg-black"},H=m({__name:"GamesView",setup(g){return(n,s)=>(a(),t(o,null,[s[8]||(s[8]=k('<h2 data-v-20d79fb1>Jeux vidéo :</h2><p class="margin" data-v-20d79fb1>Le jeu vidéo occupe une grande place chez moi. C&#39;était ma porte d&#39;entrée vers le monde de l&#39;informatique. J&#39;ai toujours été fasciné par cette possibilité de créer un monde et de pouvoir faire ce que l&#39;on veut avec, de pouvoir raconter ses propres histoires. Bien avant de m&#39;inscrire en informatique, je programmais donc des jeux, d&#39;abord sur Scratch, avec des blocs de code, puis sur le moteur Unreal Engine 4 qui me semblait le plus accessible car permettant de programmer en blueprint. Vous trouverez ici une présentation de certains de mes projets (car malheureusement, beaucoup ont disparu...)</p><div class="project bg-1" data-v-20d79fb1><h3 class="title" data-v-20d79fb1>Shoot the robot (2019)</h3><div class="left" data-v-20d79fb1><div class="desc" data-v-20d79fb1><p data-v-20d79fb1>Mon tout premier projet avec Unreal Engine 4 ! Il s&#39;agissait d&#39;un petit jeu de tir où l&#39;on doit courir dans une arène et éviter les robots. Très vite, j&#39;ai ajouté des éléments comme des particules ou de la lumière, simplement pour expérimenter avec le moteur. Au final, le jeu est plutôt simple : on a une barre de vie, des munitions, on peut se déplacer et tirer. Un FPS plutôt basique qui m&#39;a permis d&#39;apprendre à utiliser ce nouvel outil.</p></div><div class="learn" data-v-20d79fb1><p data-v-20d79fb1>Ce premier projet m&#39;a permis de me familiariser avec l&#39;engin de jeu Unreal Engine, de comprendre son fonctionnement, d&#39;apprendre comment ajouter des sons, faire un menu, changer de niveau, etc. Il m&#39;a aussi permis de découvrir les bases de la modélisation 3D avec Blender, car il fallait aussi que je fasse les décors, les robots et l&#39;arme.</p></div></div><div class="right" data-v-20d79fb1><div class="bg-black" data-v-20d79fb1><h4 data-v-20d79fb1>Technologies utilisées :</h4><ul data-v-20d79fb1><li data-v-20d79fb1>Unreal Engine 4</li><li data-v-20d79fb1>Blender (modèle 3D)</li><li data-v-20d79fb1>Paint 3D (textures)</li></ul></div></div></div>',3)),s[9]||(s[9]=e("div",{class:"project bg-2"},[e("h3",{class:"title"},"Space Invader (2020)"),e("div",{class:"left"},[e("div",{class:"desc"},[e("p",null,"Le but de ce projet était de faire un jeu en 2D, j'ai donc recréé un Space Invader sur Unreal Engine. Pourquoi ? Aucune idée ! Mais c'était vraiment intéressant. Ce projet m'a surtout permis de jouer avec les effets de lumière d'Unreal. C'est aussi grâce à ce projet que j'ai commencé à faire de la musique, car pour la première fois j'avais envie de quelque chose de plus poussé au niveau du son. Une autre particularité de ce jeu est le système de classement en ligne que j'ai pu réaliser grâce à un site web qui permet de les créer gratuitement.")]),e("div",{class:"learn"},[e("p",null,"Ce projet m'a permis d'apprendre comment fonctionne le système de sauvegarde d'Unreal Engine (pour le high score, et non 'hight' comme dans la vidéo, car j'étais vraiment nul en anglais...) et aussi à jouer avec la lumière dans Unreal. Ce n'est clairement pas le jeu le plus poussé de ma carrière, mais j'ai beaucoup aimé travailler dessus.")])]),e("div",{class:"right"},[e("div",{class:"bg-black"},[e("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/Jbb-oIZeAUs?si=PpZHEr23Is6SdYo0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:""})]),e("div",{class:"bg-black"},[e("h4",null,"Technologies utilisées :"),e("ul",null,[e("li",null,"Unreal Engine 4"),e("li",null,"Magix Music Maker (pour la musique)"),e("li",null,"Paint 3D (textures)")])])])],-1)),s[10]||(s[10]=e("div",{class:"project bg-3"},[e("h3",{class:"title"},"Five Night At Freddy's Multiplayer (2021)"),e("div",{class:"left"},[e("div",{class:"desc"},[e("p",null,`Premier projet en multijoueur, le but de ce jeu est similaire à celui du jeu de base "Five Nights At Freddy's", sauf que les ennemis étaient aussi contrôlés par un joueur. Au final, un jeu plutôt fun qui m'a permis d'apprendre les bases du jeu en ligne avec Unreal.`)]),e("div",{class:"learn"},[e("p",null,"Ce projet m'a permis de faire mes premiers pas dans le jeu en réseau et d'apprendre les concepts de base comme la réplication d'acteur, ou comment héberger et rejoindre une session.")])]),e("div",{class:"right"},[e("div",{class:"bg-black"},[e("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/z66pD0yoYWs?si=1vvh1MN6ZjLOuplJ",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:""})]),e("div",{class:"bg-black"},[e("h4",null,"Technologies utilisées :"),e("ul",null,[e("li",null,"Unreal Engine 4"),e("li",null,"Blender (modèle 3D)"),e("li",null,"Paint 3D (certaines textures)")])])])],-1)),e("div",$,[s[2]||(s[2]=e("h3",{class:"title"},"Boom Ball Online (2022)",-1)),s[3]||(s[3]=e("div",{class:"left"},[e("div",{class:"desc"},[e("p",null,`Deuxième projet en multijoueur réseau, Boom Ball est un jeu de "air hockey" se jouant exclusivement à la souris, où deux équipes de maximum 4 personnes peuvent s'affronter. Un mode spectateur est aussi disponible pour ceux qui veulent observer le match, avec la possibilité de se déplacer autour du terrain.`)]),e("div",{class:"learn"},[e("p",null,"Ce jeu m'a permis, pour la première fois, d'exploiter la physique du moteur Unreal (avec la balle), en plus de consolider mes connaissances dans le système de jeu en réseau d'Unreal, et de me donner une nouvelle excuse pour jouer avec des lumières et des néons !")])],-1)),e("div",z,[e("div",G,[d(p,null,{default:c(()=>s[0]||(s[0]=[e("img",{src:C,alt:""},null,-1),e("img",{src:P,alt:""},null,-1),e("img",{src:B,alt:""},null,-1),e("img",{src:U,alt:""},null,-1),e("img",{src:D,alt:""},null,-1)])),_:1})]),s[1]||(s[1]=e("div",{class:"bg-black"},[e("h4",null,"Technologies utilisées :"),e("ul",null,[e("li",null,"Unreal Engine 4"),e("li",null,"Blender (modèle 3D)"),e("li",null,"Paint 3D (certaines textures)")])],-1))])]),e("div",J,[s[6]||(s[6]=e("h3",{class:"title"},"Tank You (2022)",-1)),s[7]||(s[7]=e("div",{class:"left"},[e("div",{class:"desc"},[e("p",null,"Probablement le jeu le plus complexe que j'ai jamais créé ! Tank You est un jeu de combat de tanks en réseau où deux équipes s'affrontent dans différents modes de jeu (match à mort, capture de drapeau, etc.). Plusieurs modèles de tanks sont disponibles avec des caractéristiques différentes pour chaque véhicule. Mon but pour ce projet était de faire un résumé de tout ce que j'avais appris sur Unreal depuis 2018. On y retrouve donc des modèles 3D faits maison, une physique très poussée (avec simulation de suspension pour les chenilles des tanks), en plus de l'utilisation de Steam pour permettre aux joueurs de se rejoindre via la liste d'amis de Steam.")]),e("div",{class:"learn"},[e("p",null,"Ce projet m'a donc permis de mettre à l'épreuve tout ce que j'avais appris depuis mes débuts avec Unreal, en plus de développer mes compétences en modélisation 3D.")])],-1)),e("div",O,[e("div",Z,[d(p,null,{default:c(()=>s[4]||(s[4]=[e("img",{src:S,alt:""},null,-1),e("img",{src:E,alt:""},null,-1),e("img",{src:I,alt:""},null,-1),e("img",{src:T,alt:""},null,-1),e("img",{src:Y,alt:""},null,-1)])),_:1})]),s[5]||(s[5]=e("div",{class:"bg-black"},[e("h4",null,"Technologies utilisées :"),e("ul",null,[e("li",null,"Unreal Engine 4"),e("li",null,"Blender (modèle 3D)"),e("li",null,"Paint 3D (certaines textures)")])],-1))])]),s[11]||(s[11]=e("div",{class:"project bg-6"},[e("h3",{class:"title"},"Sphere (2023)"),e("div",{class:"left"},[e("div",{class:"desc"},[e("p",null,`Deuxième plus gros projet, Sphere est un jeu de plateforme 2D ou l'on controlle une sphere. Le but est de rammaser des points pour terminer un niveau. La particularité de ce jeu est que l'on peut créer ses propres maps, grace à un éditeur de niveau. Le joueur peut donc créer des niveau, avec des éléments qui peuvent communiquer entre eux. L'éditeur de niveau comporte aussi beaucoup d'elements de gameplay, comme des zones de gravité, des lasers, des murs ou des bumpers. Il est aussi possible de "programmer" des évènement dans le niveau, comme par exemple lorsque le joueur appuie sur espace, des murs s'active ou se désactive. Enfin, il est possible de se partager le niveau en se passant le fichier de sauvegarde.`)]),e("div",{class:"learn"},[e("p",null,"Ce jeu m'a permis pour la première fois de créer un éditeur de niveau, ce qui est un défi très intéréssant. C'est un projet au gameplay simple mais avec un développement très compliqué. Mais au final, je suis très fiers du résultat. ")])]),e("div",{class:"right"},[e("div",{class:"bg-black"},[e("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/luAdDGbJgIw?si=vrYyxG5AnaCTBl9F",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:""})]),e("div",{class:"bg-black"},[e("h4",null,"Technologies utilisées :"),e("ul",null,[e("li",null,"Unreal Engine 4"),e("li",null,"Paint 3D (textures)")])])])],-1))],64))}}),R=v(H,[["__scopeId","data-v-20d79fb1"]]);export{R as default};
