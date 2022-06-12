<template>
  <section>
    <a :href="href" :title="title" class="link">
      <picture>
        <source type="image/webp" :srcset="webp">
        <source type="image/png" :srcset="png">
        <img :src="jpg" :alt="alt">
      </picture>
      <small><AutoLink :item="linkItem" /></small>
    </a>
  </section>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import AutoLink from '@vuepress/theme-default/lib/client/components/AutoLink.vue';

  const props = defineProps({
    feature: {
      type: String,
      required: true,
    },
  });
  const href = computed(()=> 'https://caniuse.com/#feat=' + props.feature);
  const title = computed(()=> 'Click here to read more about support for the ' + props.feature + ' on CanIUse.com');
  const jpg = computed(()=> 'https://caniuse.bitsofco.de/image/'+props.feature+'.jpg');
  const png = computed(()=> 'https://caniuse.bitsofco.de/image/'+props.feature+'.png');
  const webp = computed(()=> 'https://caniuse.bitsofco.de/image/'+props.feature+'.webp');
  const alt = computed(()=> 'Data on support for the ' + props.feature +' feature across the major browsers from caniuse.com');
  const linkItem = computed(()=> ({ text: title.value, link: href.value }));
</script>

<style scoped>
.link {
  display: block;
  text-align: right;
}
</style>
