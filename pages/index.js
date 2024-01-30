import Spotlight from "@/components/Spotlight";
import { getRandomArtPiece } from "@/utils/getRandomPiece";
import useSWR from "swr";

export default function SpotlightPage() {
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art"
  );

  //spezifische Errormessage für User
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  const spotlightGallery = data ? getRandomArtPiece(data) : null;
  return (
    <>
      <div>
        {spotlightGallery && (
          <Spotlight
            spotlightImage={spotlightGallery.imageSource}
            artist={spotlightGallery.artist}
            width={spotlightGallery.dimensions.width}
            height={spotlightGallery.dimensions.height}
          ></Spotlight>
        )}
      </div>
    </>
  );
}
