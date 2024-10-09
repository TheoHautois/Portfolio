<script setup lang = "ts">
import { defineComponent, onMounted, ref } from 'vue';
import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls.js";


const objPath = '/src/assets/models/tankYou/kv2.glb';
const canvasContainer = ref<HTMLDivElement | null>(null);

onMounted(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    updateSize();
    canvasContainer.value?.appendChild(renderer.domElement);


    // Ajout d'une source de lumiere
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 5, 5).normalize();
    scene.add(light);
    const ambientLight = new THREE.AmbientLight(0x404040); // Lumière ambiante
    scene.add(ambientLight);

    const loader = new GLTFLoader();
    loader.load(objPath, (gltf) => {
        scene.add(gltf.scene);
        camera.position.z = 5;

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
        if (canvasContainer == null) return;

        let width = canvasContainer.value?.clientWidth ? canvasContainer.value.clientWidth : 0;
        let height = canvasContainer.value?.clientHeight ? canvasContainer.value.clientHeight : 0;

        console.log('X: ' + canvasContainer.value?.clientWidth);
        console.log('Y: ' + canvasContainer.value?.clientHeight);
        renderer.setSize(width, height);

        camera.aspect = width / height;
        camera.updateProjectionMatrix();




    }
});
</script>

<template>
<div ref="canvasContainer" class="canvas-container"></div>
</template>

<style scoped>
.canvas-container{
    width: 100%;
    height: 100%;
}
</style>