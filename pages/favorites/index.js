import ArtList from "@/components/ArtPieces";

export default function FavoriteListingPage({artPieces, onToggleFavorite, artPiecesInfo}) {

  const filteredList = artPieces.filter ((piece) =>
   artPiecesInfo.find ((artPieceInfo) => artPieceInfo.slug
    === piece.slug&&artPieceInfo.isFavorite));

  return <ArtList pieces={filteredList} onToggleFavorite={onToggleFavorite} artPiecesInfo={artPiecesInfo}/>;
}
