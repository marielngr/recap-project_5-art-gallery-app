import Spotlight from "@/components/Spotlight";
import FavoriteButton from "@/components/FavoriteButton";
import { getRandomArtPiece } from "@/utils/getRandomPiece";
import { useState } from "react";

export default function SpotlightPage({
  isFavorite,
  artPieces,
  onToggleFavorite,
}) {
  // const randomIndex = Math.floor(Math.random() * pieces.length);
  // const piece = pieces[randomIndex];
  const piece = getRandomArtPiece(artPieces);
  console.log(piece);

  return (
    <>
      <div>
        <FavoriteButton
          isFavorite={false}
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
