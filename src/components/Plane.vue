<template>
  <Container :x="plane.x" :y="plane.y">
    <Sprite :texture="planeImg" />
  </Container>
</template>

<script setup lang="ts">
import { setupPlane } from '../game/Plane';
import planeImg from '../assets/plane.svg';
import { reactive } from 'vue';

const plane = setupPlane(reactive({}), { x: 10, y: 10, speed: 5 })
window.addEventListener('keydown', (e) => {
  switch (e.key) {
    case 'ArrowUp':
      plane.moveUp()
      break

    case 'ArrowDown':
      plane.moveDown()
      break

    case 'ArrowLeft':
      plane.moveLeft()
      break

    case 'ArrowRight':
      plane.moveRight()
      break

    default:
      break
  }
})
</script>
