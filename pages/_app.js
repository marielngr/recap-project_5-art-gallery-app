import Layout from "@/components/Layout";
import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import useSWR from "swr";
import { useState } from "react";

const fetcher = async (url) => {
  const res = await fetch(url);

  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
};
export default function App({ Component, pageProps }) {
  const {
    data: artPieces,
    error,
    isLoading,
  } = useSWR("https://example-apis.vercel.app/api/art", fetcher);

  const [artPiecesInfo, setArtPiecesInfo] = useState([]);

  function handleToggleFavorite(slug) {
    setArtPiecesInfo(
      artPiecesInfo.map((artPiece) =>
        artPiece.slug === slug
          ? { ...artPiece, isFavorite: !artPiece.isFavorite }
          : isFavorite
      )
    );
  }

  return (
    <Layout>
      <GlobalStyle />

      <SWRConfig
        value={{
          fetcher,
        }}
      >
        {error && <div>failed to load</div>}
        {isLoading && <div>loading...</div>}
        {artPieces && (
          <Component
            artPieces={artPieces}
            artPiecesInfo={artPiecesInfo}
            onToggleFavorite={handleToggleFavorite}
            {...pageProps}
          />
        )}
      </SWRConfig>
    </Layout>
  );
}
