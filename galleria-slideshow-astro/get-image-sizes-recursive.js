import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { promisify } from "util";
import { Buffer } from "buffer";
import sizeOf from "image-size";

// ESM path helpers
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// CLI arg
const folderPath = process.argv[2];

if (!folderPath) {
  console.error("❌ Please provide a folder path as an argument.");
  console.error("Usage: node get-image-sizes-recursive.js <folder-path>");
  process.exit(1);
}

const absoluteFolderPath = path.resolve(__dirname, folderPath);
const imageExtensions = [".jpg", ".jpeg", ".png", ".gif", ".bmp", ".webp"];
const results = [];

function walkDir(currentPath) {
  const entries = fs.readdirSync(currentPath);

  entries.forEach((entry) => {
    const entryPath = path.join(currentPath, entry);
    const stat = fs.statSync(entryPath);

    if (stat.isDirectory()) {
      walkDir(entryPath);
    } else if (stat.isFile()) {
      const ext = path.extname(entry).toLowerCase();
      if (imageExtensions.includes(ext)) {
        try {
          const fileBuffer = fs.readFileSync(entryPath);
          const dimensions = sizeOf(fileBuffer); // Pass Buffer, not path
          results.push({
            file: path.relative(absoluteFolderPath, entryPath),
            width: dimensions.width,
            height: dimensions.height,
          });
        } catch (err) {
          console.error(`⚠️ Error processing ${entryPath}: ${err.message}`);
        }
      }
    }
  });
}

walkDir(absoluteFolderPath);

fs.writeFileSync("image-sizes.json", JSON.stringify(results, null, 2));
console.log("✅ Image sizes written to image-sizes.json");
