import ArtPiecesPreview from "../ArtPiecesPreview";

export default function ArtList({ pieces }) {
  return (
    <ul>
      {pieces?.map((piece) => (
        <li key={piece.slug}>
          <ArtPiecesPreview
            name={piece.name}
            artist={piece.artist}
            slug={piece.slug}
            imageSource={piece.imageSource}
          />
        </li>
      ))}
    </ul>
  );
}
