import { promises as fs } from 'fs'
import { join } from 'path'
import glob from 'fast-glob'

export async function generateRoutes() {
  const contentDir = join(process.cwd(), 'content')
  
  // Static routes that should always be included
  const staticRoutes = [
    '/',
    '/docs',
    '/build-apps',
    '/documentation'
  ]

  try {
    // Find all .md files in content directory recursively
    const files = await glob('**/*.md', {
      cwd: contentDir
    })

    // Convert markdown files to routes and include payload routes
    const dynamicRoutes = files.flatMap(file => {
      const route = '/' + file.replace(/\.md$/, '')
      return [
        route,
        `${route}/index.html`,
        `${route}.html`,
        `${route}/_payload.json`
      ]
    })

    // Combine static and dynamic routes
    const allRoutes = [...staticRoutes, ...dynamicRoutes]
    
    // Remove duplicates and filter out any empty routes
    const uniqueRoutes = [...new Set(allRoutes)].filter(Boolean)

    return uniqueRoutes
  } catch (error) {
    console.error('Error generating routes:', error)
    return staticRoutes
  }
}