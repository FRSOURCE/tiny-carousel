<template>
  <section>
    <a :href="href" :title="title" class="link">
      <picture>
        <source type="image/webp" :srcset="webp">
        <source type="image/png" :srcset="png">
        <img :src="jpg" :alt="alt">
      </picture>
      <small><NavLink :item="linkItem" /></small>
    </a>
  </section>
</template>

<script>
import NavLink from '@vuepress/theme-default/components/NavLink.vue';

export default {
  name: 'CanIUseSection',
  components: { NavLink },
  props: {
    feature: {
      type: String,
      required: true,
    },
  },
  computed: {
    href() { return 'https://caniuse.com/#feat=' + this.feature; },
    title() { return 'Click here to read more about support for the ' + this.feature + ' on CanIUse.com'; },
    jpg() { return 'https://caniuse.bitsofco.de/image/'+this.feature+'.jpg'; },
    png() { return 'https://caniuse.bitsofco.de/image/'+this.feature+'.png'; },
    webp() { return 'https://caniuse.bitsofco.de/image/'+this.feature+'.webp'; },
    alt() { return 'Data on support for the ' + this.feature +' feature across the major browsers from caniuse.com'; },
    linkItem() { return { text: this.title, link: this.href }; },
  },
};
</script>

<style scoped>
.link {
  display: block;
  text-align: right;
}
</style>
