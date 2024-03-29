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
      <pre v-if="!!$slots.typescript" data-lang="typescript"><slot name="typescript" /></pre>
    </div>
  </section>
</template>

<script>
import { toRefs, computed, onMounted, defineComponent } from 'vue';

let scriptElement;
let scriptLoadPromise = undefined;
let uid = -1;
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

export default defineComponent({
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
    },
    scripts: {
      type: Array,
      default: () => [],
    },
  },
  setup(props) {
    const { defaultTab, tags, title, description, scripts } = toRefs(props);
    const className = computed(() => 'codepen-' + ++uid);
    const parsedTags = computed(() => ['tiny-carousel', '@frsource/tiny-carousel', ...tags.value]);

    onMounted(async () => {
      await (scriptLoadPromise || loadEmbedScript());
      window.__CPEmbed('.' + className.value);
    });

    return {
      preparsedDefaultTab: computed(() => defaultTab.value + ',result'),
      className,
      prefilDataStringified: computed(() => JSON.stringify({
        title: title.value,
        description: description.value,
        tags: parsedTags.value,
        html_classes: [],
        head: "<meta name='viewport' content='width=device-width, initial-scale=1'>",
        stylesheets: "https://unpkg.com/water.css@2.0.0/out/water.min.css",
        scripts: scripts.value,
      })),
    };
  },
});
</script>

<style scoped lang="scss">
pre[data-lang]::before {
  content: attr(data-lang);
  display: block;
  margin-top: -.9rem;
  margin-bottom: .5rem;
  font-size: .8em;
  opacity: .4;
  text-transform: uppercase;
}
</style>
