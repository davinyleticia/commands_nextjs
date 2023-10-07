import { useRouter } from "next/router";
import Layout from "../src/afulink/components/Layout";
import HeaderAfulik from "../src/afulink/components/header/Header";
import Hero from "../src/afulink/Hero";
import Footer from "../src/afulink/components/Footer";
import HomeCommad from "../src/command/HomeCommand";

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
        <Layout pageTitle="Commands Views Page" favicon={"/images/favicon.svg"}>
          <HeaderCommand url={"."} />
          <HomeCommad />
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
