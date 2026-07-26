/** @type {import('tailwindcss').Config} */
// OBrava · Tailwind config
// Tokens extraídos del Manual de Marca OBrava Digital System v1.0:
// - Construction Orange (#F26522) + Deep Charcoal + Technical White + Brand Yellow
// - Estilo neo-brutalista: bordes afilados (radius 0), sombras duras (4–8px offset)
// - Tipografía: Inter (display + bold/extra) + JetBrains Mono (data/etiquetas)
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        surface: '#faf9f9',
        'surface-dim': '#dadada',
        'surface-bright': '#faf9f9',
        'surface-container-lowest': '#ffffff',
        'surface-container-low': '#f4f3f3',
        'surface-container': '#eeeeee',
        'surface-container-high': '#e8e8e8',
        'surface-container-highest': '#e2e2e2',
        'on-surface': '#1a1c1c',
        'on-surface-variant': '#594138',
        outline: '#8d7166',
        'outline-variant': '#e1bfb3',
        primary: '#a63b00',
        'primary-container': '#f26522',
        'on-primary-container': '#4f1800',
        'inverse-primary': '#ffb599',
        secondary: '#5b5d72',
        'secondary-container': '#e0e0fa',
        tertiary: '#5e5e5b',
        'tertiary-container': '#92918d',
        background: '#faf9f9',
        'surface-variant': '#e2e2e2',
        // OBrava brand tokens (semantic)
        'obrava-orange': '#f26522',
        'obrava-orange-dim': '#d95820',
        'obrava-orange-bright': '#ffb599',
        'obrava-yellow': '#ffcc00',
        'obrava-black': '#000000',
        'obrava-gray': '#1a1a1a',
        'obrava-gray-2': '#2c2e31',
        'obrava-silver': '#333333',
        'obrava-white': '#ffffff',
        'obrava-paper': '#f7fafd',
      },
      fontFamily: {
        display: ['Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'display-xl': ['72px', { lineHeight: '76px', letterSpacing: '-0.04em', fontWeight: '800' }],
        'headline-lg': ['48px', { lineHeight: '52px', letterSpacing: '-0.02em', fontWeight: '700' }],
        'headline-md': ['32px', { lineHeight: '38px', fontWeight: '700' }],
        'headline-sm': ['24px', { lineHeight: '28px', fontWeight: '700' }],
        'headline-lg-mobile': ['36px', { lineHeight: '40px', fontWeight: '700' }],
        'body-lg': ['18px', { lineHeight: '28px', fontWeight: '400' }],
        'body-md': ['16px', { lineHeight: '24px', fontWeight: '400' }],
        'label-bold': ['14px', { lineHeight: '20px', letterSpacing: '0.05em', fontWeight: '700' }],
      },
      spacing: {
        'stack-sm': '12px',
        'stack-md': '32px',
        'stack-lg': '80px',
        'margin-mobile': '16px',
        'margin-desktop': '64px',
        gutter: '24px',
      },
      borderRadius: {
        DEFAULT: '0',
        sm: '0',
        md: '0',
        lg: '0',
        xl: '0',
        full: '9999px',
      },
      boxShadow: {
        brutal: '8px 8px 0px 0px #f26522',
        'brutal-hover': '4px 4px 0px 0px #f26522',
        'brutal-white': '8px 8px 0px 0px #ffffff',
        'brutal-black': '8px 8px 0px 0px #000000',
        'brutal-small': '4px 4px 0px 0px #f26522',
        'brutal-small-black': '4px 4px 0px 0px #000000',
        'brutal-small-white': '4px 4px 0px 0px #ffffff',
      },
      letterSpacing: {
        'wider-x': '0.15em',
      },
    },
  },
  plugins: [],
};
