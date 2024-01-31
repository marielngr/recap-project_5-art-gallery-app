import Image from "next/image";
import FavoriteButton from "../FavoriteButton";

export default function ArtPiecesPreview({
  imageSource,
  artist,
  name,
  slug,
  width,
  height,
  handleToggleFavorites,
}) {
  return (
    <>
      <div>
        <FavoriteButton onToggleFavorite={handleToggleFavorites} />

        <Image
          //src={`https://example-apis.vercel.app/assets/art/${slug}.jpg`}
          src={imageSource}
          width={width * 0.1}
          height={height * 0.1}
          alt="picture"
        ></Image>
        <p>
          {`"${name}"`} by {artist}
        </p>
      </div>
    </>
  );
}
