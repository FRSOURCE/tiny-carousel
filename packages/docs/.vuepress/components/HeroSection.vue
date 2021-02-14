<template>
  <section class="hero footer">
    <p class="hero-section">
      <slot name="text" />
    </p>
    <NavLink
      class="action-button"
      :item="item"
    />
  </section>
</template>

<script>
import NavLink from '@vuepress/theme-default/components/NavLink.vue'

export default {
  name: 'HeroSection',
  components: { NavLink },
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