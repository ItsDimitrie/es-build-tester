const fs = require("fs");
const path = require("path");
const { build } = require("esbuild");

const distDir = path.resolve(__dirname, "dist");

let version = 1;
if (fs.existsSync(distDir)) {
  const versions = fs
    .readdirSync(distDir)
    .map((name) => /^v(\d+)$/.exec(name))
    .filter(Boolean)
    .map((match) => Number(match[1]));
  if (versions.length > 0) {
    version = Math.max(...versions) + 1;
  }
}

const versionFolder = `v${version}`;
const outputPath = path.join(distDir, versionFolder, "embed.js");

fs.mkdirSync(path.dirname(outputPath), { recursive: true });

build({
  entryPoints: ["src/EmbedLoader.ts"],
  bundle: true,
  minify: true,
  format: "iife",
  outfile: outputPath,
});
