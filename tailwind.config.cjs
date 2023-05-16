/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

module.exports = {
    darkMode: 'class',
    content: ['./src/**/*.{astro,html,js,md,svelte,ts,vue}'],
    theme: {

        extend: {
            fontFamily: {
                sans: ["Inter"],
            },
            keyframes: {
                wavey: {
                    "0%, 100%": {
                        transform: "scaleY(0.5)"
                    },
                    "50%": {
                        transform: "scaleY(1.5)"
                    }
                }
            },
            // animation-wavey
            animation: {
                wavey: "wavey 1s linear infinite"
            },

        },
    },
    plugins: [
        require("./plugins/openVariant.cjs"),
        require("./plugins/animationDelay.cjs"),
        require("./plugins/tableCaption.cjs"),
    ],
}