import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // Si usas React, ajusta según tu caso

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '/assets': '/src/assets',
    },
  },
});
