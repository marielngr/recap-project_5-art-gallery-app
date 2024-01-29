import Spotlight from "@/components/Spotlight";

import { getRandomArtPiece } from "@/utils/getRandomPiece";

export default function SpotlightPage({ artPieces }) {
  // const randomIndex = Math.floor(Math.random() * pieces.length);
  // const piece = pieces[randomIndex];
  const piece = getRandomArtPiece(artPieces);
  console.log(piece);

  return (
    <>
      <div>
        <Spotlight
          image={piece.imageSource}
          width={piece.dimensions.width}
          height={piece.dimensions.height}
          artist={piece.artist}
        />
      </div>
    </>
  );
}
