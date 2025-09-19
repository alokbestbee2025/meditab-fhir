import { e as eventHandler, c as createError } from '../../_/nitro.mjs';
import fs from 'fs';
import path from 'path';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'better-sqlite3';
import 'node:url';
import 'ipx';
import 'node:crypto';

function slugify(text) {
  return text.toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
}
const docs = eventHandler(() => {
  try {
    const projectRoot = process.cwd();
    const docsDirPath = path.join(projectRoot, "content", "docs");
    const filenames = fs.readdirSync(docsDirPath);
    const navigationData = filenames.filter((file) => file.endsWith(".md")).map((filename) => {
      const fullFilePath = path.join(docsDirPath, filename);
      const fileContent = fs.readFileSync(fullFilePath, "utf-8");
      const toc = [];
      const lines = fileContent.split("\n");
      for (const line of lines) {
        if (line.startsWith("## ") || line.startsWith("### ")) {
          const depth = line.startsWith("## ") ? 2 : 3;
          const text = line.replace(/^#+\s*/, "");
          const id = slugify(text);
          toc.push({ id, depth, text });
        }
      }
      return {
        path: `/docs/${filename.replace(/\.md$/, "")}`,
        toc
      };
    });
    return navigationData;
  } catch (error) {
    console.error("CRITICAL ERROR: Could not read 'content/docs' directory.", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Server error: Could not read content directory."
    });
  }
});

export { docs as default };
//# sourceMappingURL=docs.mjs.map
