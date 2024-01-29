import ArtList from "@/components/ArtPieces";
import Navigation from "@/components/Navigation";
import useSWR from "swr";

export default function OverviewPage() {
  const {
    data: artPieces,
    error,
    isLoading,
  } = useSWR("https://example-apis.vercel.app/api/art");

  console.log(artPieces);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return (
    <>
      <div>
        <h1>Art Gallery</h1>
        <ArtList pieces={artPieces} />
      </div>
      <Navigation />
    </>
  );
}
