import Image from "next/image";

export default function ArtPiecesPreview({
  imageSource,
  artist,
  name,
  slug,
  width,
  height,
}) {
  return (
    <>
      <h2>{name}</h2>
      <h3>{artist}</h3>
      <div>
        <Image
          //src={`https://example-apis.vercel.app/assets/art/${slug}.jpg`}
          src={imageSource}
          width={width * 0.1}
          height={height * 0.1}
          alt="picture"
        ></Image>
      </div>
    </>
  );
}
