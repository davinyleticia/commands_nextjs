import { useRouter } from "next/router";
import Layout from "../src/afulink/components/Layout";
import HeaderAfulik from "../src/afulink/components/header/Header";
import Hero from "../src/afulink/Hero";
import Footer from "../src/afulink/components/Footer";
import HomeCommad from "../src/command/HomeCommand";
import HeaderCommand from "../src/command/partials/Header/HeaderCommand";
import Blog from "../src/tipsbook";

const Index = ({ host }) => {
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
          <HeaderCommand url={"."} id={id}/>
          <HomeCommad />
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

export async function getServerSideProps(context) {
  const host = context.req.headers.host;

  return {
    props: { host }, // will be passed to the page component as props
  };
}

export default Index;
