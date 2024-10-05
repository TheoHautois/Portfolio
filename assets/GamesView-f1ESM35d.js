import{d as c,r as f,o as p,c as m,a as e,u as r,t as o,F as v,i as g,j as h,b as u}from"./index-D7qzKz5Z.js";const j="data:image/svg+xml,%3csvg%20width='100'%20height='100'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpolygon%20points='30,50%2050,30%2050,50%2050,70'%20fill='white'%20/%3e%3c/svg%3e",w="data:image/svg+xml,%3csvg%20width='100'%20height='100'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpolygon%20points='70,50%2050,30%2050,50%2050,70'%20fill='white'%20/%3e%3c/svg%3e",y={class:"container"},q=["src"],x=c({__name:"Gallery",props:{images:{type:Array,required:!0}},setup(t){const l=t;let a=0,i=f(l.images[a]);function s(){a--,a<0&&(a=l.images.length-1),i.value=l.images[a]}function b(){a++,a>l.images.length-1&&(a=0),i.value=l.images[a],console.log(i.value)}return(Y,n)=>(p(),m(v,null,[n[0]||(n[0]=e("h4",null,"Images :",-1)),e("div",y,[e("img",{src:j,alt:"",onClick:s,class:"arrow"}),e("img",{src:r(i),alt:"image",class:"image"},null,8,q),e("img",{src:w,alt:"",onClick:b,class:"arrow"})]),e("span",null,o(r(a)+1)+" / "+o(l.images.length),1)],64))}}),d=g(x,[["__scopeId","data-v-73948878"]]),k={class:"project bg-4"},B={class:"right"},P={class:"bg-black"},U={class:"project bg-5"},_={class:"right"},D={class:"bg-black"},I=c({__name:"GamesView",setup(t){let l=["/Portfolio/src/assets/galleries/boomBall/boomBall-4.png","/Portfolio/src/assets/galleries/boomBall/boomBall-2.png","/Portfolio/src/assets/galleries/boomBall/boomBall-3.png","/Portfolio/src/assets/galleries/boomBall/boomBall-1.png","/Portfolio/src/assets/game-bg/boom-ball-bg.png"],a=["/Portfolio/src/assets/galleries/tankYou/tankYou-1.png","/Portfolio/src/assets/galleries/tankYou/tankYou-2.png","/Portfolio/src/assets/galleries/tankYou/tankYou-3.png","/Portfolio/src/assets/game-bg/tank-you-bg.png"];return(i,s)=>(p(),m(v,null,[s[6]||(s[6]=h('<h2 data-v-08e65ee0>Jeux vidéo :</h2><p data-v-08e65ee0>Le jeu vidéo occupe une grande place chez moi. C&#39;était ma porte d&#39;entrée vers le monde de l&#39;informatique. J&#39;ai toujours été faciné par cette possibilité de créer un monde et de pouvoir faire ce que l&#39;on veux avec, de pouvoir raconter ses propres histoires. Bien avant de m&#39;inscrire en informatique, je programmais donc des jeux, d&#39;abord sur Scratch, avec des bloques de code, puis sur le moteur Unreal Engine 4 qui me semblais le plus accessible car permettant de programmer en blueprint. Vous trouverez ici une présentation de certains de mes projets (car malheureusement beaucoup ont disparu...)</p><div class="project bg-1" data-v-08e65ee0><h3 class="title" data-v-08e65ee0>Shoot the robot (2019)</h3><div class="left" data-v-08e65ee0><div class="desc" data-v-08e65ee0><p data-v-08e65ee0>Mon tout premier projet avec Unreal Engine 4 ! Il s&#39;agissait d&#39;un petit jeu de tir où l&#39;on doit courir dans une arène et éviter les robots. Très vite, j&#39;ai ajouté des éléments comme des particules ou de la lumière, simplement pour expérimenter avec le moteur. Au final, le jeu est plutôt simple, on a une barre de vie, des munitions, on peut se déplacer et tirer. Un FPS plutôt basique qui m&#39;a permis d&#39;apprendre à utiliser ce nouvel outil.</p></div><div class="learn" data-v-08e65ee0><p data-v-08e65ee0>Ce premier projet m&#39;a permis de me familiariser avec l&#39;engin de jeu Unreal Engine, de comprendre son fonctionnement, d&#39;apprendre comment ajouter des sons, faire un menu, changer de niveau, etc. Il m&#39;a aussi permis de découvrir les base de la modélisation 3D avec Blender car il fallait aussi que je fasse les décors, les robots et l&#39;arme.</p></div></div><div class="right" data-v-08e65ee0><div class="bg-black" data-v-08e65ee0><h4 data-v-08e65ee0>Technologies utilisées :</h4><ul data-v-08e65ee0><li data-v-08e65ee0>Unreal Engine 4</li><li data-v-08e65ee0>Blender (modèle 3D)</li><li data-v-08e65ee0>Paint 3D (textures)</li></ul></div></div></div>',3)),s[7]||(s[7]=e("div",{class:"project bg-2"},[e("h3",{class:"title"},"Space Invader (2020)"),e("div",{class:"left"},[e("div",{class:"desc"},[e("p",null,"Le but de ce projet était de faire un jeu en 2D, j'ai donc recréé un space invader sur Unreal Engine. Pourquoi ? Aucune idée ! Mais c'était vraiment intéréssant. Ce projet m'a surout permis de jouer avec les effets de lumière d'Unreal. C'est aussi grâce à ce projet que j'ai commencé à faire de la musique car, pour la premiçre fois j'avais envie de quelque chose de plus poussé au niveau du son. Une autre particularité de ce jeu est le système de classement en ligne que j'ai pu réalisé grace à un site web qui permet de les créer gratuitement.")]),e("div",{class:"learn"},[e("p",null,"Ce projet m'a permis d'apprendre comment fonctionne le système de sauvegarde d'Unreal Engine (pour le high score, et non 'hight' comme dans la vidéo, car j'étais vraiment nul en anglais...) et aussi à jouer avec la lumière dans Unreal. Ce n'est clairement pas le jeu le plus poussé de ma carrière mais j'ai beaucoup aimé travailler dessus.")])]),e("div",{class:"right"},[e("div",{class:"bg-black"},[e("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/Jbb-oIZeAUs?si=PpZHEr23Is6SdYo0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:""})]),e("div",{class:"bg-black"},[e("h4",null,"Technologies utilisées :"),e("ul",null,[e("li",null,"Unreal Engine 4"),e("li",null,"Magix Music Maker (pour la musique)"),e("li",null,"Paint 3D (textures)")])])])],-1)),s[8]||(s[8]=e("div",{class:"project bg-3"},[e("h3",{class:"title"},"Five Night At Freddy's Multiplayer (2021)"),e("div",{class:"left"},[e("div",{class:"desc"},[e("p",null,`Premier projet en multijoueur, le but de ce jeu est similaire à celui du jeu de base "Five Night At Freddy's", Sauf que les enemies était aussi controllés par un joueur. Au final, un jeu plutôt fun qui ma permis d'apprendre les bases du jeu en ligne avec unreal.`)]),e("div",{class:"learn"},[e("p",null,"Ce projet m'a permis de faire mes premiers pas dans le jeu en réseau et d'apprendre les conceptes de base comme la réplication d'acteur, ou comment héberger et rejoindre une session.")])]),e("div",{class:"right"},[e("div",{class:"bg-black"},[e("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/z66pD0yoYWs?si=1vvh1MN6ZjLOuplJ",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:""})]),e("div",{class:"bg-black"},[e("h4",null,"Technologies utilisées :"),e("ul",null,[e("li",null,"Unreal Engine 4"),e("li",null,"Blender (modèle 3D)"),e("li",null,"Paint 3D (certaines textures)")])])])],-1)),e("div",k,[s[1]||(s[1]=e("h3",{class:"title"},"Boom Ball Online (2022)",-1)),s[2]||(s[2]=e("div",{class:"left"},[e("div",{class:"desc"},[e("p",null,`Second projet en multijoueur réseau, boom ball est un jeu de "air hockey" se jouant exclusivement à la souris, ou deux équipes de maximum 4 personnes pouvaient s'affronter. Un mode spectateur est aussi disponible pour ceux qui veulent observer le match, avec la possibilité de se déplacer autour du terrain. `)]),e("div",{class:"learn"},[e("p",null,"Ce jeu ma permis pour la première fois d'exploiter la physique du moteur Unreal (avec la balle), en plus de consolider mes conaissances dans le système de jeu en réseau d'Unreal, en plus de me donner une nouvelle excuse pour jouer avec des lumières et des néons !")])],-1)),e("div",B,[e("div",P,[u(d,{images:r(l)},null,8,["images"])]),s[0]||(s[0]=e("div",{class:"bg-black"},[e("h4",null,"Technologies utilisées :"),e("ul",null,[e("li",null,"Unreal Engine 4"),e("li",null,"Blender (modèle 3D)"),e("li",null,"Paint 3D (certaines textures)")])],-1))])]),e("div",U,[s[4]||(s[4]=e("h3",{class:"title"},"Tank You (2022)",-1)),s[5]||(s[5]=e("div",{class:"left"},[e("div",{class:"desc"},[e("p",null,"Probablement le jeu le plus complexe que je n'ai jamais créé! Tank You est un jeu de combat de tank en réseau ou deux équipes s'affronte dans différent modes de jeu (match à mort, capture de drapeau, etc.). Plusieurs modèle de tank sont disponnible avec des caractéristique différentes pour chaque véhicule. Mon but pour ce projet était de faire un résumé de tout ce que j'avais appris sur Unreal depuis 2018, On y retrouve donc des modèle 3D fait maison, une physique très poussé (avec simulation de suspention pour les chenille des tanks) plus l'utilisation de Steam pour permettre aux joueurs de se rejoindre via la liste d'ami de Steam.")]),e("div",{class:"learn"},[e("p",null,"Ce projet ma donc permis de mettre à l'épreuve tout ce que j'avais appris depuis mes début avec Unreal, en plus de développer mes compétences en modélisation 3D.")])],-1)),e("div",_,[e("div",D,[u(d,{images:r(a)},null,8,["images"])]),s[3]||(s[3]=e("div",{class:"bg-black"},[e("h4",null,"Technologies utilisées :"),e("ul",null,[e("li",null,"Unreal Engine 4"),e("li",null,"Blender (modèle 3D)"),e("li",null,"Paint 3D (certaines textures)")])],-1))])])],64))}}),E=g(I,[["__scopeId","data-v-08e65ee0"]]);export{E as default};
