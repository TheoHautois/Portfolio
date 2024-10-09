<script setup lang="ts">
import { computed, ref, useSlots } from 'vue';

    const slots = useSlots();
    const images = computed(() => slots.default? slots.default() :[]);

    let imageIndex = ref(0);

    function nextImage()
    {
        imageIndex.value = (imageIndex.value + 1) % images.value.length;
    }

    function previousImage()
    {
        imageIndex.value = (imageIndex.value - 1 + images.value.length) % images.value.length;
    }

</script>

<template>
    <div class="carousel">
        <img src="../assets/buttons/leftArrow.svg" alt="Previous" class="arrow" @click="previousImage()">
        <div class="carousel-content">
            <template v-for="(image, index) in images" :key="index">
                <img v-if="image.props" :src="image.props.src" :class="{ active: index === imageIndex }" alt="Carousel Image" />
            </template>
        </div>
        <img src="../assets/buttons/rightArrow.svg" alt="Next" class="arrow" @click="nextImage()">
    </div>
</template>

<style scoped>

.carousel {
    display: flex;
    flex-wrap: nowrap;
    justify-self: center;
    justify-content:space-around;
}

.carousel-content{
    display: flex;
    overflow: hidden;
}

.carousel-content  img{
    display: none;
    max-width: 100%;
    height: auto;
    transition: opacity 0.5s ease;
}

.carousel-content  img.active{
    display: block;
    opacity: 1;
}

.arrow{
    align-self: center;
}

.arrow:hover{
    transform:scale(1.5);
}

</style>