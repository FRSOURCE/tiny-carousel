module.exports = {
    configureWebpack(config) {
        config.plugins.some((plugin, index) => {
            return plugin.options?.filename === 'demo.html' ? config.plugins.splice(index, 1) : false;
        });
    }
}
