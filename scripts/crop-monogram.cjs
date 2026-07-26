// scripts/crop-monogram.cjs
// Recorta el PNG del banner 3D para sacar solo el monograma (sin el texto "OBrava" abajo).
// Input:  src/assets/logos/ob-monogram-3d.png  (1024x1024 con monograma arriba + texto abajo)
// Output: src/assets/logos/ob-monogram-3d-mark.png (solo el monograma, con bordes limpios)
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const SRC = path.resolve(__dirname, '..', 'src', 'assets', 'logos', 'ob-monogram-3d.png');
const OUT = path.resolve(__dirname, '..', 'src', 'assets', 'logos', 'ob-monogram-3d-mark.png');

async function main() {
  const meta = await sharp(SRC).metadata();
  console.log(`Input: ${SRC}`);
  console.log(`  dimensions: ${meta.width}x${meta.height}`);

  // El monograma 3D ocupa aprox el 63% superior. Crop:
  //   top  : 0
  //   left : 0
  //   width: 1024
  //   height: ~645  (deja el monograma completo sin el wordmark)
  const cropH = Math.round(meta.height * 0.63);
  console.log(`Cropping top ${cropH}px`);

  await sharp(SRC)
    .extract({ left: 0, top: 0, width: meta.width, height: cropH })
    .png({ compressionLevel: 9 })
    .toFile(OUT);

  const outMeta = await sharp(OUT).metadata();
  console.log(`Output: ${OUT}`);
  console.log(`  dimensions: ${outMeta.width}x${outMeta.height} · ${(fs.statSync(OUT).size / 1024).toFixed(1)} KB`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
