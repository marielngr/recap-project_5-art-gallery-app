import Spotlight from "@/components/Spotlight";
import useSWR from "swr";

export default function SpotlightPage() {
  const {
    data: artPieces,
    error,
    isLoading,
  } = useSWR("https://example-apis.vercel.app/api/art");

  console.log(artPieces);

  //spezifische Errormessage für User
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return (
    <>
      <div>
        <Spotlight pieces={artPieces} />
      </div>
    </>
  );
}
