import ArtList from "@/components/ArtPieces";
import Spotlight from "@/components/Spotlight";
import useSWR from "swr";

export default function HomePage() {
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
    <div>
      <Spotlight pieces={artPieces} />
      <h1>Art Gallery</h1>
      <ArtList pieces={artPieces} />
    </div>
  );
}
