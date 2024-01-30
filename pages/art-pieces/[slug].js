import useSWR from "swr";
import { useRouter } from "next/router";
import Link from "next/link";
import ArtPieceDetails from "@/components/ArtPieceDetails";

export default function DetailsPage({ artPieces }) {
  const router = useRouter();
  const { slug } = router.query;
  console.log(artPieces);
  /*if (!pieces) {
    return null;
}*/

  const piece = artPieces.find((piece) => piece.slug === slug);

  if (!piece) {
    return null;
  }

  return (
    <>
      <ArtPieceDetails
        title={piece.name}
        artist={piece.artist}
        genre={piece.genre}
        width={piece.dimensions.width}
        height={piece.dimensions.height}
        year={piece.year}
        image={piece.imageSource}
      ></ArtPieceDetails>
    </>
  );
}
