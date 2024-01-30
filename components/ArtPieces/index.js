import ArtPiecesPreview from "../ArtPiecesPreview";
import Link from "next/link";

export default function ArtList({ pieces }) {
  return (
    <ul>
      {pieces?.map((piece) => (
        <li key={piece.slug}>
          <Link href={`/art-pieces/${piece.slug}`}>
            <ArtPiecesPreview
              name={piece.name}
              artist={piece.artist}
              slug={piece.slug}
              imageSource={piece.imageSource}
              width={piece.dimensions.width}
              height={piece.dimensions.height}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}
