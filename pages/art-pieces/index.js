import ArtList from "@/components/ArtPieces";
import Link from "next/link";

export default function OverviewPage({ artPieces }) {
  return (
    <>
      <div>
        <h1>Art Gallery</h1>

        <ArtList pieces={artPieces} />
      </div>
    </>
  );
}
