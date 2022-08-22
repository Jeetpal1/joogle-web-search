import Head from "next/head";
import { useRouter } from "next/router";
import Header from "../components/Header";
import SearchResults from "../components/SearchResults";
import Response from "../Response";

function Search({results}) {
    const router = useRouter();
    console.log(results)
  return (
    <div>
      <Head>
        <title>{router.query.term} - Joogle Search</title>
        <link rel="stylesheet" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />
      <SearchResults results={results} />
      {/* Search Results */}
    </div>
  );
}

export default Search;

export async function getServerSideProps(context) {
  const useDummyData = false;
  const startIndex = context.query.start || '0'


console.log(`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`)

  const data = useDummyData? Response: await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
  ).then((response) => response.json());

  // After the server has rendered
  // pass the gotten results to the client
  return {
    props: {
      results: data,
    },
  };
}
