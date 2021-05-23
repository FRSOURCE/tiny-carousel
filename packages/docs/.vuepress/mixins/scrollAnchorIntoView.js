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

module.exports = {
    mounted () {
        this.$watch('$route', function() {
            scrollToElementAfterTimeout('.sidebar-sub-headers .sidebar-link.active', 0);
        });
        scrollToElementAfterTimeout(this.$route.hash, 800);
        scrollToElementAfterTimeout('.sidebar-sub-headers .sidebar-link.active', 800);
    }
};
