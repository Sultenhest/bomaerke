const join = require('path').join
const purgecss = require('@fullhuman/postcss-purgecss')

class TailwindExtractor {
    static extract(content) {
        return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
    }
}

const plugins = [
    require('tailwindcss'),
    require('autoprefixer')
]

const whitelisted = []

if (process.env.NODE_ENV === 'production') {
    plugins.push(
        purgecss({
            content: [
                './layouts/**/*.vue',
                './components/**/*.vue',
                './pages/**/*.vue'
            ],
            whitelist: whitelisted,
            extractors: [{
                extractor: TailwindExtractor,
                extensions: ['html', 'vue']
            }]
        })
    );
}

module.exports = {
    plugins
}