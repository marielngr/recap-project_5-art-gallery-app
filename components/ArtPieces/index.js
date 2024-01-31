import ArtPiecesPreview from "../ArtPiecesPreview";
export function isArtPieceFavorite(artPiecesInfo, slug) {
  const info = artPiecesInfo.find((artPieceInfo) => artPieceInfo.slug === slug);
  if (info === undefined) {
    return false;
  } else {
    return info.isFavorite;
  }
}

export default function ArtList({ pieces, onToggleFavorite, artPiecesInfo }) {
  return (
    <ul>
      {pieces?.map((piece) => {
        return (
          <li key={piece.slug}>
            <ArtPiecesPreview
              name={piece.name}
              artist={piece.artist}
              slug={piece.slug}
              imageSource={piece.imageSource}
              width={piece.dimensions.width}
              height={piece.dimensions.height}
              onToggleFavorite={onToggleFavorite}
              isFavorite={isArtPieceFavorite(artPiecesInfo, piece.slug)}
            />
          </li>
        );
      })}
    </ul>
  );
}
