import vue from '@vitejs/plugin-vue2'

export default {
  plugins: [vue()],
  build: {
    lib: {
      entry: 'index.js',
      name: 'vue-leaflet-antimeridian',
      fileName: 'vue-leaflet-antimeridian',
    },
    rollupOptions: {
      external: ['leaflet'],
      output: {
        globals: {
          leaflet: 'L',
        },
      },
    },
  },
}