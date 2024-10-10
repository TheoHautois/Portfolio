<script setup lang="ts">
import { ref } from 'vue';
import ModelViewer from '../components/ModelViewer.vue';
import { bool } from 'three/webgpu';

const modelViewer = ref();

// comme les liens change entre develop et build, j'en avais marre de me casser la tete alors j'ai trouver cette solution.
// c'est pas de la poésie MAIS CA FONCTIONNE !
console.log('MODE : ' + import.meta.env.MODE);
let devMode:boolean = import.meta.env.MODE == 'development';
let basePath:string;

if (devMode)
    basePath = '/src';
else
    basePath = '/Portfolio';

console.log('basePath : ' + basePath);
    
// liste de tous les modèle 3D disponnible.
const models = {
    'kv2' :     basePath + '/assets/models/tankYou/kv2.glb',
    'panzer2' : basePath + '/assets/models/tankYou/panzer2.glb',
    'maus' :    basePath + '/assets/models/tankYou/maus.glb'
};

function loadTester(path:string)
{
    modelViewer.value.loadModel(path);
}
</script>

<template>
    <h2>Modélisation 3D :</h2>
    <p class = "margin">En cours de développement...</p>

    <ModelViewer ref = "modelViewer" class = "test" />

    <h3>Tank You :</h3>
    <button @click="loadTester(models['panzer2'])">PANZER</button>
    <button @click="loadTester(models['kv2'])">KV2</button>
    <button @click="loadTester(models['maus'])">MAUS</button>
</template>

<style scoped>
    h2{
        text-align: center;
    }

    .test{
        height: 600px;
        width: 70%;
    }

    button{
        padding:5px;
        margin:5px;
        border-radius: 5px;
        min-width: 100px;
        background-color: black;
        color: white;
    }
</style>