import SvgHeart from "../SvgHeart";
import { useState } from "react";

export default function FavoriteButton({ isFavorite, onToggleFavorite }) {
  return (
    <button onClick={() => onToggleFavorite()} aria-label="favorite">
      <SvgHeart fill={isFavorite ? "red" : "grey"} />
    </button>
  );
}
