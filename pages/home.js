import Layout from "../views/afulink/Layout";
import HeaderAfulik from "../views/afulink/header/Header";
import Hero from "../views/afulink/Hero";
import Footer from "../views/afulink/Footer";
import HomeTipsBook from "../views/tipsbook/HomeTipsBook/HomeTipsBook";
import HeaderTipsBook from "../views/tipsbook/header/Header";

const is_render = (url, options) => {
  let result;

  result = options && url;
  result = options && url;
  result = options && url;
  result = options === url;

  return result;
};

const Index = (host) => {
  console.log(host);

  return (
    <>
      {is_render(host.host, "afu.link") && (
        <Layout pageTitle="Afulink Informática">
          <HeaderAfulik url={"."} />
          <Hero />
          <Footer />
        </Layout>
      )}

      {is_render(host.host, "tipsbook.info") && (
        <Layout pageTitle="Afulink Informática">
          <HeaderTipsBook url={"."} />
          <HomeTipsBook />
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
