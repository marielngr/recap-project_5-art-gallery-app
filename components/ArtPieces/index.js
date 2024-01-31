import ArtPiecesPreview from "../ArtPiecesPreview";

export default function ArtList({ pieces, onToggleFavorite }) {
  return (
    <ul>
      {pieces?.map((piece) => (
        <li key={piece.slug}>
          <ArtPiecesPreview
            name={piece.name}
            artist={piece.artist}
            slug={piece.slug}
            imageSource={piece.imageSource}
            width={piece.dimensions.width}
            height={piece.dimensions.height}
            onToggleFavorite={onToggleFavorite}
          />
        </li>
      ))}
    </ul>
  );
}
