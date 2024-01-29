import Spotlight from "@/components/Spotlight";
import useSWR from "swr";
import { getRandomArtPiece } from "@/utils/getRandomPiece";

export default function SpotlightPage() {
  const {
    data: artPieces,
    error,
    isLoading,
  } = useSWR("https://example-apis.vercel.app/api/art");

  //spezifische Errormessage für User
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  // const randomIndex = Math.floor(Math.random() * pieces.length);
  // const piece = pieces[randomIndex];
  const piece = getRandomArtPiece(artPieces);
  console.log(piece);

  return (
    <>
      <div>
        <Spotlight
          image={piece.imageSource}
          width={piece.dimensions.width}
          height={piece.dimensions.height}
          artist={piece.artist}
        />
      </div>
    </>
  );
}
