import SvgHeart from "../SvgHeart";

export default function FavoriteButton({ isFavorite, onToggleFavorite, slug }) {
  return (
    <button onClick={() => onToggleFavorite(slug)} aria-label="favorite">
      <SvgHeart fill={isFavorite ? "red" : "grey"} />
    </button>
  );
}
