import ArtList from "@/components/ArtPieces";

export default function OverviewPage({ artPieces, onToggleFavorite }) {
  return (
    <>
      <div>
        <h1>Art Gallery</h1>

        <ArtList pieces={artPieces} onToggleFavorite={onToggleFavorite} />
      </div>
    </>
  );
}
