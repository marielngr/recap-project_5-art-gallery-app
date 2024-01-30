import Image from "next/image";
import Link from "next/link";

export default function ArtPieceDetails({
  image,
  title,
  artist,
  year,
  genre,
  width,
  height,
}) {
  return (
    <>
      <h2>{title}</h2>
      <Image
        src={image}
        width={width * 0.1}
        height={height * 0.1}
        alt="picture"
      ></Image>
      <p>
        <strong>Artist: </strong>
        {artist}
      </p>
      <p>
        <strong>Year: </strong>
        {year}
      </p>
      <p>
        <strong>Genre: </strong>
        {genre}
      </p>
      <button type="button">
        <Link href="/art-pieces">Back to Art Gallery</Link>
      </button>
    </>
  );
}
