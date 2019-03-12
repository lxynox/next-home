const withImages = require('next-images')

module.exports = withImages({
    inlineImageLimit: 16384,

    exportPathMap() {
        return {
            '/about': { page: '/about' }
        }
    },

    webpack(config) {
        // Fixes npm packages that depend on `fs` module
        config.node = {
            fs: 'empty'
        }

        return config
    }
})
