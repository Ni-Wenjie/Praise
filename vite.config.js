import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

/**
 * Vite配置文件
 * 用于开发和生产环境构建
 */
export default defineConfig({
  // 插件配置
  plugins: [vue()],
  
  // 开发服务器配置
  server: {
    port: 5173,
    host: true,
    open: true
  },
  
  // 构建配置
  build: {
    // 输出目录
    outDir: 'dist',
    
    // 静态资源目录
    assetsDir: 'assets',
    
    // 生成源码映射
    sourcemap: false,
    
    // 压缩配置（使用esbuild）
    minify: 'esbuild',
    
    // 代码分割阈值
    chunkSizeWarningLimit: 1000,
    
    // Rollup配置
    rollupOptions: {
      output: {
        // 手动分包
        manualChunks: {
          'vue-vendor': ['vue'],
          'praise-data': ['./src/data/praiseData.js']
        }
      }
    }
  },
  
  // 路径别名
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})
