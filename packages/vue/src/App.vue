<template>
  <main id="app">
    <header>
      <h1>Tiny carousel - your favourite carousel&nbsp;library&nbsp;👑</h1>
      <h3>Now in <a href="https://vuejs.org" title="Read more about Vue.js!">Vue.js</a>&nbsp;🎉</h3>
    </header>

    <TinyCarousel
      class="carousel"
      tag="ul"
      :plugins="carouselPlugins"
      @after:init="isInitialized = true"
      ref="tinyCarousel"
    >
      <li v-for="index in number" :key="index">
        <img
          class="carousel__item-img"
          :src="`https://picsum.photos/seed/${index}/800/600`"
        >
      </li>
    </TinyCarousel>

    <p class="carousel-status">Carousel is {{ isInitialized ? 'initialized' : 'not initialized' }}</p>
    
    <nav class="row">
      <button type="button" @click="clickPrev">prev</button>
      <button type="button" @click="clickNext">next</button>
      <button type="button" @click="++number">Add slide</button>
      <button type="button" @click="--number">Remove slide</button>
    </nav>
  </main>
  
</template>

<script lang="ts">
import Vue from 'vue';
import { pluginAutoplay } from '@frsource/tiny-carousel-plugin-autoplay';
import { pluginCustomEvents } from '@frsource/tiny-carousel-plugin-custom-events';
import { pluginMouseDrag } from '@frsource/tiny-carousel-plugin-mouse-drag';
import TinyCarousel, { definePlugin, PluginsProp, TinyCarouselComponent } from './TinyCarousel';

export default Vue.extend({
  name: 'App',
  components: {
    TinyCarousel
  },
  data() {
    const carouselPlugins: PluginsProp = [
      definePlugin(pluginAutoplay, {
        autoplayTimeout: 7000,
      }),
      definePlugin(pluginMouseDrag),
      definePlugin(pluginCustomEvents),
    ];

    return {
      carouselPlugins,
      number: 6,
      isInitialized: false,
    };
  },
  computed: {
    carousel() {
      return (this.$refs.tinyCarousel as TinyCarouselComponent | undefined)?.carousel;
    }
  },
  methods: {
    clickPrev() {
      this.carousel?.prev();
    },
    clickNext() {
      this.carousel?.next();
    }
  }
});
</script>

<style>
@import "~@frsource/tiny-carousel-core/dist/index.css";
@import "~@frsource/tiny-carousel-plugin-mouse-drag/dist/index.css";

html, body, #app {
  display: flex;
  min-height: 0;
}

html {
  height: 100%;
}

#app {
  flex-flow: column;
  text-align: center;
}

h3 {
  position: absolute;
  bottom: calc(100% - 2.5em);
}

.carousel {
  list-style: none;
  margin: 0;
  padding: 0;
}

.carousel-status {
  position: relative;
  margin-top: -2.2em;
  padding: .4em;
  background: rgba(0, 0, 0, .6);
}

.carousel__item-img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.row {
  display: flex;
}
</style>
