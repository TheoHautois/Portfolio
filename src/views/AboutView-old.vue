<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>

<div class="grid">


  <RouterLink to="/about" class="about icon">
    about
  </RouterLink>

  <RouterLink to="/games" class="games icon">
    games
  </RouterLink>

  <div class="music icon">
    music
  </div>

  <div class="mod3d icon">
    mod3d
  </div>

</div>

<RouterLink to="/about">
    <div class="icon">
      test
    </div>
  </RouterLink>

</template>

<style>
.icon{
  border-radius: 5px;
  background-color: #555555;
  
  height: 300px;
  width: 300px;

}

.grid{
  display: grid;

  grid-template-areas: 'about games'
  'music 3d';
  grid-template-columns: '50% 50%';
  grid-template-rows: '50% 50%';
  column-gap: 50px;
  row-gap: 50px;

}

.about{
  grid-area: 'about';
  justify-self: right;
}

.games{
  grid-area: 'games';
  justify-self: left;
}

.music{
  grid-area: 'music';
  justify-self: right;
}

.mod3d{
  grid-area: '3d';
  justify-self: left;
}
</style>
