module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            animation: {
                'gradient-move': 'gradient-move 3s ease',
            }
        },
        keyframes: {
            'gradient-move': {
                '0%, 100%': {backgroundPosition: '0% 50%'},
                '50%': {backgroundPosition: '100% 50%'},
            },
        },
    },
    plugins: [],
}