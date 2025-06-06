import fs from "fs";

// Paths to your files
const artworksPath = "./src/data/data.json";
const sizesPath = "./src/data/image-sizes.json";
const outputPath = "./src/data/data-with-sizes.json";

// Load data
const artworks = JSON.parse(fs.readFileSync(artworksPath, "utf-8"));
const sizes = JSON.parse(fs.readFileSync(sizesPath, "utf-8"));

// Create a map for quick lookup: file path => {width, height}
const sizeMap = {};
for (const { file, width, height } of sizes) {
  // normalize path by removing leading './' if exists
  const normalized = file.startsWith("./") ? file.slice(2) : file;
  sizeMap[normalized] = { width, height };
}

function enrichImage(src) {
  // Remove leading './' if present to match keys
  const key = src.startsWith("./") ? src.slice(2) : src;
  if (sizeMap[key]) {
    return { src, width: sizeMap[key].width, height: sizeMap[key].height };
  } else {
    console.warn(`⚠️ Size not found for image: ${src}`);
    return src; // fallback to original string
  }
}

// Enrich artworks array
const enriched = artworks.map((art) => {
  const enrichedArt = JSON.parse(JSON.stringify(art)); // deep copy

  // Enrich artist image
  enrichedArt.artist.image = enrichImage(art.artist.image);

  // Enrich images fields
  enrichedArt.images = {
    thumbnail: enrichImage(art.images.thumbnail),
    gallery: enrichImage(art.images.gallery),
    hero: {
      small: enrichImage(art.images.hero.small),
      large: enrichImage(art.images.hero.large),
    },
  };

  return enrichedArt;
});

// Write merged output
fs.writeFileSync(outputPath, JSON.stringify(enriched, null, 2));
console.log(`✅ Merged JSON saved to ${outputPath}`);
