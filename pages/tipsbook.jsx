import { useRouter } from "next/router";
import Layout from "../views/afulink/Layout";
import HeaderAfulik from "../views/afulink/header/Header";
import Hero from "../views/afulink/Hero";
import Footer from "../views/afulink/Footer";
import HomeCommad from "../views/command/HomeCommand";
import HeaderCommand from "../views/command/partials/Header/HeaderCommand";
import Blog from "../views/afulink/blog";


// 15 minutos
const CACHE_IN_SECONDS_TIME = 900;


const Tipsbook = ({ host, itemsApi }) => {
  const router = useRouter();
  const { id } = router.query;

  const renderAfulik = host === "afu.link";
  const renderCommand = host === "commands.views.page";
  const localhost = host === "localhost:3000";

  return (
    <>
      {renderAfulik && (
        <Layout pageTitle="Afulink Informática" favicon={"/images/logo.svg"}>
          <HeaderAfulik url={"."} />
          <Blog itemsApi={itemsApi}/>
          <Footer />
        </Layout>
      )}
      {renderCommand && (
        <Layout pageTitle="Commads Views Page" favicon={"/images/favicon.svg"}>
          <HeaderCommand />
          <HomeCommad id={id || "bashBasico"} />
        </Layout>
      )}
      {localhost && (
        <Layout pageTitle="Afulink Informática" favicon={"/images/logo.svg"}>
        <HeaderAfulik url={"."} />
        <Blog itemsApi={itemsApi}/>
        <Footer />
      </Layout>
      )}
    </>
  );
};

export default Tipsbook;

async function fetchGitHubAPI() {
  const res = await fetch("https://app.dnys.dev/wp-json/wp/v2/posts/");
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