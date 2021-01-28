<template>
  <footer class="footer">
    {{ text }} <NavLink :item="item" />
  </footer>
</template>

<script>
import NavLink from '@vuepress/theme-default/components/NavLink.vue'

export default {
  name: 'Footer',
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
