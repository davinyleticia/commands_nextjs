import { useRouter } from "next/router";
import Layout from "../views/afulink/components/Layout";
import HeaderAfulik from "../views/afulink/components/header/Header";
import Hero from "../views/afulink/Hero";
import Footer from "../views/afulink/components/Footer";
import HomeCommad from "../views/command/HomeCommand";
import HeaderCommand from "../views/command/partials/Header/HeaderCommand";

const Index = ({ host }) => {
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
          <Hero />
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
