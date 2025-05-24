import { resolve } from 'node:path';
import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, 'target/ts/bundle.ts'),
            name: 'SweetHome3D',
            // the proper extensions will be added
            fileName: 'SweetHome3D',
        },
        minify: false,
        terserOptions: {
            compress: false,
            mangle: false,
        },
    },
})