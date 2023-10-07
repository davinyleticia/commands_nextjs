import { useRouter } from "next/router";
import Layout from "../src/afulink/components/Layout";
import HeaderAfulik from "../src/afulink/components/header/Header";
import Hero from "../src/afulink/Hero";
import Footer from "../src/afulink/components/Footer";
import HomeCommad from "../src/command/HomeCommand";
import HeaderCommand from "../src/command/partials/Header/HeaderCommand";
import Blog from "../src/tipsbook";

const Index = ({ host, itemsApi }) => {
  const router = useRouter();
  const { id } = router.query;

  const renderAfulik = host === "afu.link";
  const renderCommand = host === "commands.views.page";
  const renderTipsbook = host == "tipsbook.com.br"
  const localhost = host === "localhost:3000";

  return (
    <>
      {renderAfulik && (
        <Layout pageTitle="Afulink Informática" favicon={"/images/logo.svg"}>
          <HeaderAfulik url={"."} />
          <Hero />
          <Footer />
        </Layout>
      )}
      {renderCommand && (
        <Layout pageTitle="Commands Views Page" favicon={"/images/favicon.svg"}>
          <HeaderCommand url={"."}/>
          <HomeCommad id={id} />
        </Layout>
      )}
      {renderTipsbook && (
        <Layout pageTitle="TipsBook" favicon={"/images/logo-tp.svg"}>
          <HeaderAfulik url={"."} isTipsbook={true} />
          <Blog itemsApi={itemsApi}/>
          <Footer />
        </Layout>
      )}
      {localhost && (
        <Layout pageTitle="Afulink Informática" favicon={"/images/logo.svg"}>
          <HeaderAfulik url={"."} />
          <Hero />
          <Footer />
        </Layout>
      )}
    </>
  );
};

export default Index;

async function fetchGitHubAPI() {
  const res = await fetch("https://app.dnys.dev/wp-json/wp/v2/posts?categories=1");
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
