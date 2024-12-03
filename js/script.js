tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            animation: {
                gradient: 'gradientBG 3s ease infinite',
                snow: 'snowfall 10s linear infinite',
                rain: 'rainfall 2s linear infinite',
            },
            keyframes: {
                gradientBG: {
                    '0%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                    '100%': { backgroundPosition: '0% 50%' },
                },
            },
        },
    },
};