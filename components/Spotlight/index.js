import Image from "next/image";
import useSWR from "swr";

export default function Spotlight({ spotlightImage, artist, width, height }) {
  return (
    <>
      <div>
        <Image
          src={spotlightImage}
          width={width * 0.1}
          height={height * 0.1}
          alt="picture"
        ></Image>
        <p>by {artist}</p>
      </div>
    </>
  );
}
