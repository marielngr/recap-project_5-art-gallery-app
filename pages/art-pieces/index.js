import ArtList from "@/components/ArtPieces";

export default function OverviewPage({
  artPieces,
  onToggleFavorite,
  artPiecesInfo,
})
 {
  console.log ("1", artPiecesInfo)
  return (
    <>
      <div>
        <h1>Art Gallery</h1>

        <ArtList
          pieces={artPieces}
          onToggleFavorite={onToggleFavorite}
          artPiecesInfo={artPiecesInfo}
        />
      </div>
    </>
  );
}
