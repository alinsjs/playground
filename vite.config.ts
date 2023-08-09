/*
 * @Author: theajack
 * @Date: 2023-04-04 23:20:27
 * @Description: Coding something
 */
import { defineConfig } from 'vite';
// loadEnv
import legacy from '@vitejs/plugin-legacy';
import alins from 'vite-plugin-alins';

// https://vitejs.dev/config/
// @ts-ignore
export default defineConfig(({ mode }) => {
    // command,
    // const env = loadEnv(mode, process.cwd(), '');
    // console.log(mode);
    const isDev = mode === 'development';
    return {
        base: isDev ? '/' : '/fund',
        plugins: [
            legacy({
                targets: [ 'defaults', 'not IE 11' ],
            }),
            alins(),
        ],
        define: {
            __DEV__: mode === 'development',
        },
    };
});
