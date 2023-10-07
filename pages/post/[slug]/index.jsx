import { useRouter } from "next/router";
import Layout from "../../../src/afulink/components/Layout";
import HeaderAfulik from "../../../src/afulink/components/header/Header";
import Footer from "../../../src/afulink/components/Footer";
import Detail from "../../../src/tipsbook/detail";


// 15 minutos
const CACHE_IN_SECONDS_TIME = 900;

const Tipsbook = ({ host, itemsApi, slug }) => {
  const router = useRouter();
  const { id } = router.query;

  const renderAfulik = host === "afu.link";
  const renderCommand = host === "commands.views.page";
  const localhost = host === "localhost:3000";

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <>
      {renderAfulik && (
        <Layout pageTitle={`TipsBook - ${capitalizeFirstLetter(slug.replace(/-/g, ' '))}`} favicon={"/images/logo-tp.svg"}>
          <HeaderAfulik url={"../"} isTipsbook={true} />
          <Detail itemsApi={itemsApi} />
          <Footer />
        </Layout>
      )}
      {renderCommand &&
        (window.location.href = "https://commands.views.page/tipsbo")}
      {localhost && (
        <Layout ppageTitle={`TipsBook - ${capitalizeFirstLetter(slug.replace(/-/g, ' '))}`} favicon={"/images/logo-tp.svg"}>
         <HeaderAfulik url={"../"} isTipsbook={true} />
          <Detail itemsApi={itemsApi} />
          <Footer />
          [console.log(slug)]
        </Layout>
      )}
    </>
  );
};

export default Tipsbook;

async function fetchGitHubAPI({slug}) {
  const res = await fetch(`https://app.dnys.dev/wp-json/wp/v2/posts/?slug=${slug}`);
  if (!res.ok) {
    throw new Error(res.status);
  }

  return res.json();
}

export async function getServerSideProps({req, params}) {
  try {

    const { slug } = params;

    if (!slug) {
      throw new Error('Slug for Program not found');
    }

    const host = req.headers.host;
    const itemsApi = await fetchGitHubAPI({slug: slug});

    // Check if itemsApi is an array or an object and convert it to JSON-serializable data
    const serializableItemsApi = itemsApi ? itemsApi : [];



    return {
      props: {
        itemsApi: serializableItemsApi,
        slug: slug,
        host,
      },
    };
  } catch (e) {
    console.error("Error fetching data:", e);
    return {
      notFound: false,
    };
  }
}
