import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// base must be "/<repo>/" for project Pages sites.
export default defineConfig({ plugins: [react()], base: process.env.SITE_BASE || './' })
