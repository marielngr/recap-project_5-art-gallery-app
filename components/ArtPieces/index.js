export default function ArtList({ pieces }) {
  return (
    <ul>
      {pieces?.map((piece) => (
        <li key={piece.slug}>{piece.name}</li>
      ))}
    </ul>
  );
}
