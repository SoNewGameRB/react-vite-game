// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/react-vite-game/'  // 將 'react-vite-game' 替換為你的儲存庫名稱
});
