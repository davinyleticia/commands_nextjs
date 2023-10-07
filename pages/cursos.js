import { useRouter } from "next/router";
import Layout from "../src/afulink/components/Layout";
import HeaderAfulik from "../src/afulink/components/header/Header";
import Footer from "../src/afulink/components/Footer";
import PlayList from "../src/afulink/cursos/playList";


// 15 minutos
const CACHE_IN_SECONDS_TIME = 900;


const Cursos = ({ host, itemsApi }) => {
  const router = useRouter();
  const { id } = router.query;

  const renderAfulik = host === "afu.link";
  const renderCommand = host === "commands.views.page";
  const localhost = host === "localhost:3000";

  return (
    <>
      {renderAfulik && (
        <Layout pageTitle="Cursos" favicon={"/images/logo.svg"}>
          <HeaderAfulik url={"."} isTipsbook={true} />
          <PlayList itemsApi={itemsApi}/>
          <Footer />
        </Layout>
      )}
      {renderCommand && (
        window.location.href = "https://commands.views.page/tipsbo"
      )}
      {localhost && (
        <Layout pageTitle="Cursos" favicon={"/images/logo.svg"}>
        <HeaderAfulik url={"."} isTipsbook={true}/>
        <PlayList itemsApi={itemsApi}/>
        <Footer />
      </Layout>
      )}
    </>
  );
};

export default Cursos;

async function fetchGitHubAPI() {
  const res = await fetch("https://app.dnys.dev/wp-json/wp/v2/posts?categories=5");
  if (!res.ok) {
    throw new Error(res.status);
  }

  return res.json();
}


export async function getServerSideProps(context) {
  try {
    const host = context.req.headers.host;
    const itemsApi = await fetchGitHubAPI();

    // Check if itemsApi is an array or an object and convert it to JSON-serializable data
    const serializableItemsApi = Array.isArray(itemsApi) ? itemsApi : [];

    console.log(serializableItemsApi)

    return {
      props: {
        itemsApi: serializableItemsApi,
        host,
      },
    };
  } catch (e) {
    console.error("Error fetching data:", e);
    return {
      notFound: true,
    };
  }
}