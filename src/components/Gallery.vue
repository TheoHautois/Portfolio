<script setup lang="ts">
import { ref, type Ref } from 'vue';


    const props = defineProps({
        images: {type : Array<string>, required : true}
    });


    let currentIndex:number = 0;
    let currentImage:Ref<string> = ref(props.images[currentIndex]);


    function previousImage()
    {
        currentIndex --;
        if (currentIndex < 0)
            currentIndex = props.images.length - 1;

        currentImage.value = props.images[currentIndex];
    }

    function nextImage()
    {
        currentIndex ++;
        if (currentIndex > props.images.length - 1)
            currentIndex = 0;

        currentImage.value = props.images[currentIndex];
        console.log(currentImage.value);
    }

</script>

<template>
    <h4>Images :</h4>
    <div class="container">
        <img src="../assets/buttons/leftArrow.svg" alt="" @click = "previousImage" class = "arrow">
        <img :src="currentImage" alt="image" class="image">
        <img src="../assets/buttons/rightArrow.svg" alt="" @click = "nextImage" class = "arrow">
    </div>

    <span>{{ currentIndex + 1 }} / {{ props.images.length }}</span>

</template>

<style scoped>

    .container{
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-self: center;
        justify-content:space-around;
    }

    .image{
        width: 70%;
    }

    input{
        min-width: 10%;
    }

    span{
        display: block;
        text-align: center;
    }

    .arrow{
        align-self: center;
    }

    .arrow:hover{
        transform:scale(1.5);
    }
</style>