import { promises as fs } from 'fs'
import { join } from 'path'
import glob from 'fast-glob'

export async function generateRoutes() {
  const contentDir = join(process.cwd(), 'content')
  
  // Static routes that should always be included
  const staticRoutes = [
    '/',
    '/docs',
    '/build-Apps',
    '/documentation'
  ]

  try {
    // Find all .md files in content directory recursively
    const files = await glob('**/*.md', {
      cwd: contentDir
    })

    // Convert markdown files to routes
    const dynamicRoutes = files.map(file => {
      // Remove .md extension and convert to route path
      const route = '/' + file.replace(/\.md$/, '')
      return route
    })

    // Combine static and dynamic routes
    const allRoutes = [...staticRoutes, ...dynamicRoutes]
    
    // Remove duplicates and filter out any empty routes
    const uniqueRoutes = [...new Set(allRoutes)].filter(Boolean)

    return uniqueRoutes
  } catch (error) {
    console.error('Error generating routes:', error)
    return staticRoutes // Fallback to static routes if there's an error
  }
}