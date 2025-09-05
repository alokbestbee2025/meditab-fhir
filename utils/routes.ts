// utils/routes.ts
import { join } from 'path'
import glob from 'fast-glob'

export async function generateRoutes(): Promise<string[]> {
  const contentDir = join(process.cwd(), 'content')

  // static routes you always want
  const staticRoutes = [
    '/',
    '/docs/provenance/read',
    '/build-apps',
    '/documentation'
  ]

  try {
    const files = await glob('**/*.md', {
      cwd: contentDir,
      dot: false,
      onlyFiles: true,
      ignore: ['**/node_modules/**', '**/.git/**', '**/README.md'] // adjust ignores if needed
    })

    const dynamicRoutes = files.map((rawPath) => {
      // normalize to forward slashes for safety
      const pathPosix = rawPath.replace(/\\/g, '/')
      // drop extension
      let route = '/' + pathPosix.replace(/\.md$/i, '')
      // handle index.md -> parent directory
      route = route.replace(/\/index$/i, '') || '/'
      // normalize: collapse multiple slashes, lowercase
      route = route.replace(/\/+/g, '/').toLowerCase()
      return route
    })

    const all = [...staticRoutes, ...dynamicRoutes]
    const unique = [...new Set(all)].filter(Boolean)
    return unique
  } catch (err) {
    console.error('Error generating routes:', err)
    return ['/'] // safe fallback
  }
}
