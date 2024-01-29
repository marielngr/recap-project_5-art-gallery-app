import Layout from "@/components/Layout";
import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import useSWR from "swr";

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
  //spezifische Errormessage für User
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return (
    <Layout>
      <GlobalStyle />

      <SWRConfig
        value={{
          fetcher,
        }}
      >
        <Component artPieces={artPieces} {...pageProps} />
      </SWRConfig>
    </Layout>
  );
}
