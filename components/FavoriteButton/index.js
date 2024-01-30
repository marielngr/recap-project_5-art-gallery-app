import SvgHeart from "../SvgHeart"

export default function FavoriteButton({isFavorite}) {
    return (
        <button
        onClick={() => onToggleFavorite(slug)}
        aria-label="favorite">
<SvgHeart fill={isFavorite? "red" : "grey"}/>
        </button>
    )
}