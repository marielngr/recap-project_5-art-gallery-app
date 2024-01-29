import Image from "next/image";

export default function Spotlight({ imageSource, artist, width, height }) {
  return (
    <>
      <div>
        <Image
          src={imageSource}
          width={width * 0.1}
          height={height * 0.1}
          alt="picture"
        ></Image>
        <p>by {artist}</p>
      </div>
    </>
  );
}
