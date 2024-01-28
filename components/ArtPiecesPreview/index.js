import Image from "next/image";

export default function ArtPiecesPreview({ imageSource, artist, name, slug }) {
  return (
    <>
      <h2>{name}</h2>
      <h3>{artist}</h3>
      <div style={{ display: "flex" }}>
        <Image
          //src={`https://example-apis.vercel.app/assets/art/${slug}.jpg`}
          src={imageSource}
          width={200}
          height={200}
          alt="picture"
          // sizes="50vW"
          style={{
            width: "10%",
            height: "auto",
          }}
        ></Image>
      </div>
    </>
  );
}
