import SvgHeart from "../SvgHeart";

export default function FavoriteButton({ isFavorite, onToggleFavorite }) {
  return (
    <button onClick={() => onToggleFavorite()} aria-label="favorite">
      <SvgHeart fill={isFavorite ? "red" : "grey"} />
    </button>
  );
}
