<template>
  <section class="hero footer">
    <p class="hero-section">
      <slot />
    </p>
    <AutoLink
      class="action-button"
      :item="item"
    />
  </section>
</template>

<script>
import AutoLink from '@vuepress/theme-default/lib/client/components/AutoLink.vue';

export default {
  name: 'HeroSection',
  components: { AutoLink },
  props: ['text', 'link'],
  computed: {
    item() {
      return {
        link: this.link.href,
        text: this.link.text,
      };
    }
  }
};
</script>

<style scoped>
.hero {
  padding-left: 0;
  display: flex;
  align-items: center;
  text-align: left;
}

.action-button {
  margin-left: 2.5rem;
}
</style>