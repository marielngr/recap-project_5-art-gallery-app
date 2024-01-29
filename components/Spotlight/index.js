import Image from "next/image";
import useSWR from "swr";

export default function Spotlight() {
  const {
    data: pieces,
    error,
    isLoading,
  } = useSWR("https://example-apis.vercel.app/api/art");

  //spezifische Errormessage für User
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  console.log(pieces);
  return (
    <>
      <div>
        <Image
          src={pieces.imageSource}
          width={pieces.width * 0.1}
          height={pieces.height * 0.1}
          alt="picture"
        ></Image>
        <p>by {pieces.artist}</p>
      </div>
    </>
  );
}
