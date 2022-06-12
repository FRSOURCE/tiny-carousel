<template>
  <footer class="footer">
    {{ text }} <AutoLink class="secondary" :item="item" />
  </footer>
</template>

<script>
import AutoLink from '@vuepress/theme-default/lib/client/components/AutoLink.vue';

export default {
  name: 'Footer',
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
