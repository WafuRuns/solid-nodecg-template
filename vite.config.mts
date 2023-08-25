import { defineConfig } from 'vite';
import solid from 'vite-plugin-solid';
import NodeCGPlugin from 'vite-plugin-nodecg';

export default defineConfig({
    server: {
        port: 5173,
    },
    plugins: [
        solid(),
        NodeCGPlugin({
            inputs: {
                './src/graphics/*.{ts,tsx}': './src/graphics/template.html',
                './src/dashboard/*.{ts,tsx}': './src/dashboard/template.html',
            },
        }),
    ],
});
