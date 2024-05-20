import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ mode }) => {
  const env = Object.assign(process.env, loadEnv(mode, process.cwd(), ''))
  const processEnvValues = {
    'process.env': Object.entries(env).reduce((prev, [key, val]) => {
      return {
        ...prev,
        [key]: val,
      }
    }, {}),
  }

  return {
    plugins: [react(), tsconfigPaths()],
    server: {
      host: false,
    },
    preview: {
      port: 4000,
      host: true,
    },
    define: processEnvValues,
    test: {
      reporters: ['html'],
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: (id) => {
            if (id.includes('node_modules')) {
              if (id.includes('react-icons')) {
                return 'vendor_aws'
              }
              return 'vendor'
            }
          },
        },
      },
    },
  }
})
