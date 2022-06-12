import { defineClientConfig } from '@vuepress/client';
import { watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const scrollToElementAfterTimeout = (selector, timeout) => {
    setTimeout(() => {
        if (selector) {
            const element = document.querySelector(selector);

            if (element && element.scrollIntoView) {
                element.scrollIntoView();
            }
        }
    }, timeout);
};

export default defineClientConfig({
  setup(){
    const route = useRoute()

    watch(route, function() {
        scrollToElementAfterTimeout('.sidebar-sub-headers .sidebar-link.active', 0);
    });
    onMounted(() => {
        scrollToElementAfterTimeout(route.hash, 800);
        scrollToElementAfterTimeout('.sidebar-sub-headers .sidebar-link.active', 800);
    });
  },
});
