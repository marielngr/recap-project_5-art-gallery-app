import Spotlight from "@/components/Spotlight";
import FavoriteButton from "@/components/FavoriteButton";
import { getRandomArtPiece } from "@/utils/getRandomPiece";

export default function SpotlightPage({
  artPieces,
  onToggleFavorite,
  artPiecesInfo,
}) {
  // const randomIndex = Math.floor(Math.random() * pieces.length);
  // const piece = pieces[randomIndex];
  const piece = getRandomArtPiece(artPieces);
  console.log(piece);

  return (
    <>
      <div>
        <FavoriteButton
          //isFavorite noch aus ArtPiecesInfo holen
          isFavorite={true}
          onToggleFavorite={() => onToggleFavorite(piece.slug)}
        />
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
