<script setup lang = "ts">
import { defineComponent, onMounted, ref , defineExpose} from 'vue';
import * as THREE from 'three';
import {GLTFLoader, type GLTF} from 'three/examples/jsm/loaders/GLTFLoader.js';
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls.js";

const canvasContainer = ref<HTMLDivElement | null>(null);

// création de la scene 3D
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

// Ajout d'une source de lumiere
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5, 5, 5);
scene.add(light);

// lumière ambiante
const ambientLight = new THREE.AmbientLight(0x404040);
scene.add(ambientLight);

// pour charger les models 3D
const modelLoader = new GLTFLoader();
let currentModel: GLTF | null = null;
let currentModelPath:string = "";

let isLoading = ref(false);

onMounted(() => {
    //réactualisation la taille du component
    updateSize();

    // On ajoute le renderer au canvasContainer
    canvasContainer.value?.appendChild(renderer.domElement);

    // position de la camera
    camera.position.z = 5;



    // controles de la camera :
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    function animate()
        {
            requestAnimationFrame(animate);
            controls.update();
            renderer.render(scene, camera);
        };
        animate();
});

// en cas de resize de la fenêtre
window.addEventListener('resize', () => {
    updateSize();
})

function updateSize()
{
    console.log('resize !');
    if (canvasContainer == null) return;

    let width = canvasContainer.value?.clientWidth ? canvasContainer.value.clientWidth : 0;
    let height = canvasContainer.value?.clientHeight ? canvasContainer.value.clientHeight : 0;

    renderer.setSize(width, height);

    camera.aspect = width / height;
    camera.updateProjectionMatrix();
}

function loadModel(path:string){
    if (currentModelPath == path) return; // car ça sert à rien de charger un modèle déjà affiché...
    isLoading.value = true;
    modelLoader.load(path, (gltf) => {
        console.log('loading model at :' + path);

        // on enleve le modèle d'avant, et on le remplace par le nouveau.
        if (currentModel != null)
            scene.remove(currentModel.scene);

        scene.add(gltf.scene);
        currentModel = gltf;
        currentModelPath = path;
        isLoading.value = false;
    });
}

defineExpose({
    loadModel,
});

//<div class="loading-screen">Chargement du modèle 3D...</div>
</script>

<template>

<div class = container>
    <div ref="canvasContainer" class="canvas-container"></div>
    <div v-if="isLoading" class="loading-screen">Chargement du modèle 3D...</div>
</div>

</template>

<style scoped>

.container {
    position: relative;
}

.canvas-container{
    border:solid 2px red;
    width: 100%;
    height: 100%;
}

.loading-screen{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.6);
}


</style>