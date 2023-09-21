/*
 * @Author: theajack
 * @Date: 2023-04-04 23:20:27
 * @Description: Coding something
 */
import { defineConfig } from 'vite';
// loadEnv
import legacy from '@vitejs/plugin-legacy';
import alins from 'vite-plugin-alins';
// import alins from './src/dist/vite-plugin/vite-plugin-alins.esm.min';

// https://vitejs.dev/config/
// @ts-ignore
export default defineConfig(({ mode }) => {
    const isDev = mode === 'development';
    return {
        base: isDev ? '/' : '/playground',

        server: {
            port: 5174
        },

        plugins: [
            legacy({
                targets: [ 'defaults', 'not IE 11' ],
            }),
            alins(),
        ],
        define: {
            __DEV__: `${isDev}`,
            __DEBUG__: `${false}`,
            __VERSION__: '"0.0.34"',
        },
        build: {
            rollupOptions: {
                output: {
                    dir: 'docs',
                }
            }
        },
        resolve: {
            alias: {
                'src': '/src',
                'alins': '/alins/packages/client-core',
                'alins-router': '/src/packages/router/index.ts',
                'alins-store': '/src/packages/store/index.ts',
                'alins-style': '/src/packages/style/index.ts',
                'alins-ui': '/src/packages/ui/index.ts',
                'alins-reactive': '/alins/packages/client-reactive',
                'alins-utils': '/alins/packages/client-utils',
                'alins-compiler-web': '/alins/packages/compiler-web',
                'alins-compiler-core': '/alins/packages/compiler-core',
            }
        },
    };
});
