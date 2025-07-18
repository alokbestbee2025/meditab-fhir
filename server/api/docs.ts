// server/api/get-doc-paths.get.ts

import fs from 'fs';
import path from 'path';

/**
 * A simple function to generate a URL-friendly slug from a heading text.
 * Example: "My Awesome Heading!" becomes "my-awesome-heading"
 */
function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, ''); // Trim - from end of text
}

export default eventHandler(() => {
  try {
    const projectRoot = process.cwd();
    const docsDirPath = path.join(projectRoot, 'content', 'docs');
    const filenames = fs.readdirSync(docsDirPath);

    // Instead of just returning paths, we will build a richer object.
    const navigationData = filenames
      .filter(file => file.endsWith('.md'))
      .map(filename => {
        const fullFilePath = path.join(docsDirPath, filename);
        
        // Read the entire content of the markdown file.
        const fileContent = fs.readFileSync(fullFilePath, 'utf-8');
        
        const toc = [];
        const lines = fileContent.split('\n');

        // Manually parse the file line by line to find headings for the TOC.
        // We are looking for lines starting with '##' or '###'.
        for (const line of lines) {
          if (line.startsWith('## ') || line.startsWith('### ')) {
            const depth = line.startsWith('## ') ? 2 : 3;
            // Remove the leading '## ' or '### ' to get the clean text.
            const text = line.replace(/^#+\s*/, '');
            const id = slugify(text);
            
            toc.push({ id, depth, text });
          }
        }
        
        // Construct the final object for this document.
        return {
          path: `/docs/${filename.replace(/\.md$/, '')}`,
          toc: toc
        };
      });
      
    return navigationData;

  } catch (error) {
    console.error("CRITICAL ERROR: Could not read 'content/docs' directory.", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Server error: Could not read content directory.",
    });
  }
});