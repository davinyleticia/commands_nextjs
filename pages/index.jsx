import { useRouter } from "next/router";
import Layout from "../views/afulink/Layout";
import HeaderAfulik from "../views/afulink/header/Header";
import Hero from "../views/afulink/Hero";
import Footer from "../views/afulink/Footer";
import HomeCommad from "../views/command/HomeCommand";
import HeaderCommand from "../views/command/partials/Header/HeaderCommand";
import { useEffect } from "react";

const Index = ({host}) => {
  const router = useRouter();
  const { id } = router.query;

  const renderAfulik = host === "afu.link";
  const renderCommand = host === "command.views.page";
  const localhost =  host === "localhost:3000";

  return (
    <>
      {renderAfulik && (
        <Layout pageTitle="Afulink Informática" favicon={'/images/logo.svg'}>
          <HeaderAfulik url={"."} />
          <Hero />
          <Footer />
        </Layout>
      )}
      {renderCommand && (
        <Layout pageTitle="Commad Find" favicon={"/images/favicon.svg"}>
          <HeaderCommand />
          <HomeCommad id={id || 'bashBasico'} />
        </Layout>
      )}
      {localhost && (
        <Layout pageTitle="Commad Find" favicon={"/images/favicon.svg"}>
          <HeaderCommand />
          <HomeCommad id={id || 'bashBasico'} />
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
