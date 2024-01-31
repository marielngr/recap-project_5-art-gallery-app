import SvgHeart from "../SvgHeart";
import { useState } from "react";

export default function FavoriteButton({ isFavorite, slug, onToggleFavorite }) {
  // const [artPiecesInfo, setArtPiecesInfo] = useState([]);

  // function handleToggleFavorite(slug) {
  //   setArtPiecesInfo((artPiecesInfo) => {
  //     const piece = artPiecesInfo.find((piece) => piece.slug === slug);
  //     if (piece) {
  //       return artPiecesInfo.map((piece) =>
  //         piece.slug === slug
  //           ? { ...piece, isFavorite: !piece.isFavorite }
  //           : piece
  //       );
  //     }
  //   });
  // }
  return (
    <button onClick={() => onToggleFavorite(slug)} aria-label="favorite">
      <SvgHeart fill={isFavorite ? "red" : "grey"} />
    </button>
  );
}
