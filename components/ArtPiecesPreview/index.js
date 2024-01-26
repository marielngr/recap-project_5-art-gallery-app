import Image from "next/image";

export default function ArtPiecesPreview({ imageSource, artist, name, slug }) {
  return (
    <>
      <h2>{name}</h2>
      <h3>{artist}</h3>
      <div>
        <Image
          //src={`https://example-apis.vercel.app/assets/art/${slug}.jpg`}
          src={imageSource}
          width={340}
          height={240}
          alt="picture"
        ></Image>
      </div>
    </>
  );
}
