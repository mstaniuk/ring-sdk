import { resolve } from 'path'
import { defineConfig } from 'vite'
import dtsPlugin from "vite-plugin-dts";

export default defineConfig({
  build: {
    manifest: true,
    minify: true,
    reportCompressedSize: true,
    lib: {
      entry: resolve(__dirname, 'lib/index.ts'),
      name: 'RingSDK',
      fileName: 'ring-sdk',
    },
  },
  plugins: [dtsPlugin()],
})
