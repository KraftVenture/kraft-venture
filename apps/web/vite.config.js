import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
    root: __dirname,
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@/app': path.resolve(__dirname, './src/app'),
            '@/features': path.resolve(__dirname, './src/features'),
            '@/shared': path.resolve(__dirname, './src/shared'),
            '@/routes': path.resolve(__dirname, './src/routes'),
            '@/assets': path.resolve(__dirname, './src/assets'),
        },
    },
});

