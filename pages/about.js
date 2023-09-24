import Layout from "../views/afulink/components/Layout";
import AboutAfuLink from "../views/afulink/About";
import Footer from "../views/afulink/components/Footer";
import HeaderAfulik from "../views/afulink/components/header/Header";

const is_render = (url, options) => {
  let result;

  result = options && url;
  result = options && url;
  result = options && url;
  result = options === url;

  return result;
};

const About = (host) => {
  console.log(host);

  return (
    <>
      {is_render(host.host, "afu.link") && (
        <Layout pageTitle="Afulink Informática">
          <HeaderAfulik url={"."} />
          <AboutAfuLink />
          <Footer />
        </Layout>
      )}

      {is_render(host.host, "tipsbook.info") && (
        <Layout pageTitle="TipsBook">
          <HeaderTipsBook url={"."} />
          <AboutTipsBook />
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

export default About;
