import type { Config } from 'tailwindcss';
const config: Config = { darkMode: 'class', content: ['./app/**/*.{ts,tsx}','./components/**/*.{ts,tsx}'], theme: { extend: { colors: { ink: '#14251f', moss: '#1f5949', sand: '#f6f4ee', ochre: '#b97b35' }, fontFamily: { sans: ['var(--font-inter)'], serif: ['var(--font-newsreader)'] } } }, plugins: [] };
export default config;
