/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
    ],
    prefix: '',
    theme: {
        container: {
            // you can configure the container to be centered
            center: true,

            // or have default horizontal padding
            padding: '1rem',

            // default breakpoints but with 40px removed
            screens: {
                sm: '100%',
            },

            // screens: {
            //     sm: '600px',
            //     md: '728px',
            //     lg: '984px',
            //     xl: '1240px',
            // },
        },
        extend: {
            colors: {
                'background': 'hsl(var(--background))',
                'foreground': 'hsl(var(--foreground))',
                'card': 'hsl(var(--card))',
                'card-foreground': 'hsl(var(--card-foreground))',
                'popover': 'hsl(var(--popover))',
                'popover-foreground': 'hsl(var(--popover-foreground))',
                'primary': 'hsl(var(--primary))',
                'primary-foreground': 'hsl(var(--primary-foreground))',
                'secondary': 'hsl(var(--secondary))',
                'secondary-foreground': 'hsl(var(--secondary-foreground))',
                'muted': 'hsl(var(--muted))',
                'muted-foreground': 'hsl(var(--muted-foreground))',
                'accent': 'hsl(var(--accent))',
                'accent-foreground': 'hsl(var(--accent-foreground))',
                'destructive': 'hsl(var(--destructive))',
                'destructive-foreground': 'hsl(var(--destructive-foreground))',
                'border': 'hsl(var(--border))',
                'input': 'hsl(var(--input))',
                'ring': 'hsl(var(--ring))',
                'chart1': 'hsl(var(--chart-1))',
                'chart2': 'hsl(var(--chart-2))',
                'chart3': 'hsl(var(--chart-3))',
                'chart4': 'hsl(var(--chart-4))',
                'chart5': 'hsl(var(--chart-5))',
            },
            borderRadius: {
                DEFAULT: 'var(--radius)',
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
            },
        },
    },
    plugins: [require('tailwindcss-animate')],
};
