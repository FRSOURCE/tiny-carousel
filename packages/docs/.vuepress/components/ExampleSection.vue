<template>
  <section :style="{height}">
    <div
      :class="className"
      :data-prefill="prefilDataStringified"
      :style="{height, overflow: 'auto'}"
      :data-height="height"
      data-active-tab-color="rgb(241, 80, 160)"
      data-border="none"
      :data-default-tab="preparsedDefaultTab"
      data-editable="true"
      data-preview="true"
    >
      <pre v-if="!!$slots.html" data-lang="html"><slot name="html" /></pre>
      <pre v-if="!!$slots.pug" data-lang="pug"><slot name="pug" /></pre>
      <pre v-if="!!$slots.scss" data-lang="scss"><slot name="scss" /></pre>
      <pre v-if="!!$slots.js" data-lang="js"><slot name="js" /></pre>
    </div>
  </section>
</template>

<script>

let scriptElement;
let scriptLoadPromise = undefined;
const loadEmbedScript = () => {
  scriptElement = document.createElement('script');
  scriptLoadPromise = new Promise(resolve =>
    scriptElement.addEventListener('load', () => {
      resolve();
    })
  );
  scriptElement.src = 'https://static.codepen.io/assets/embed/ei.js';
  scriptElement.async = true;
  
  const head = document.head || document.getElementsByTagName('head')[0];
  head.insertBefore(scriptElement, head.firstChild);
  return scriptLoadPromise;
};

export default {
  name: 'ExampleSection',
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    defaultTab: {
      type: String,
      default: () => 'html',
    },
    tags: {
      type: Array,
      default: () => [],
    },
    height: {
      type: String,
      default: '400px',
    }
  },
  async mounted() {
    await (scriptLoadPromise || loadEmbedScript());
    window.__CPEmbed('.' + this.className);
  },
  computed: {
    preparsedDefaultTab() {
      return this.defaultTab + ',result';
    },
    className() {
      return 'codepen-' + this._uid;
    },
    parsedTags() {
      return ['tiny-carousel', '@frsource/tiny-carousel', ...this.tags]
    },
    prefilDataStringified() {
      return JSON.stringify({
        title: this.title,
        description: this.description,
        tags: this.parsedTags,
        html_classes: [],
        head: "<meta name='viewport' content='width=device-width, initial-scale=1'>",
        stylesheets: "https://unpkg.com/water.css@2.0.0/out/water.min.css",
        scripts: [
            
        ]
      });
    },
  },
};
</script>
