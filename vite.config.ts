import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	resolve: {
		dedupe: ['vue'],
	},
	// server: {
	//     host: "0.0.0.0",
	//     port: 8080,
	//     open: true,
	//     proxy: {
	//         "/iceberg": {
	//             target: "http://localhost:8078",
	//             changeOrigin: true,
	//             rewrite: (path) => path.replace(/^\/iceberg/, ""),
	//         },
	//     },
	// },
	base: './',
	build: {
		outDir: 'lib',
		lib: {
			entry: 'packages/components/index.ts', //库打包入口
			name: 'ddlazy-ui-plus',
			fileName: (format) => `ddlazy-ui-plus.${format}.js`,
			formats: ['es', 'umd'],
		},
		rollupOptions: {
			external: ['vue'],
			output: {
				exports: 'named',
				globals: {
					vue: 'Vue',
				},
			},
		},
		terserOptions: {
			compress: {
				drop_console: false, //去掉console
				drop_debugger: false, //去掉debugger
			},
		},
		cssCodeSplit: true,
		sourcemap: false,
		minify: 'terser', //esbuild 打包速度快     terser 打包体积小
		assetsInlineLimit: 4000,
	},
});
