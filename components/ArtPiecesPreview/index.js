import Image from "next/image";
import FavoriteButton from "../FavoriteButton";
import Link from "next/link";

export default function ArtPiecesPreview({
  isFavorite,
  imageSource,
  artist,
  name,
  slug,
  width,
  height,
  onToggleFavorite,
}) {
  return (
    <>
      <div>
        <FavoriteButton
          onToggleFavorite={() => onToggleFavorite(slug)}
          isFavorite={isFavorite}
        />
        <Link href={`/art-pieces/${slug}`}>
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
        </Link>
      </div>
    </>
  );
}
