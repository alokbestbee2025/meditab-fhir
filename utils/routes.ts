import { promises as fs } from 'fs'
import { join } from 'path'
import glob from 'fast-glob'

export async function generateRoutes() {
  const contentDir = join(process.cwd(), 'content')
  
  // Static routes that should always be included
  const staticRoutes = [
    '/',
    '/build-apps',
    '/documentation'
  ]

  try {
    // Find all .md files in content directory recursively
    const files = await glob('**/*.md', {
      cwd: contentDir
    })

    // Convert markdown files to routes - simpler approach
    const dynamicRoutes = files.map(file => {
      // Remove .md and convert to route path
      return '/' + file.replace(/\.md$/, '').toLowerCase()
    })

    // Combine and deduplicate routes
    const allRoutes = [...new Set([...staticRoutes, ...dynamicRoutes])]
    
    return allRoutes
  } catch (error) {
    console.error('Error generating routes:', error)
    return staticRoutes
  }
}