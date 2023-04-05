import Layout from "../views/afulink/Layout";
import AboutAfuLink from "../views/afulink/About";
import AboutTipsBook from "../views/tipsbook/About";
import Footer from "../views/afulink/Footer";
import HeaderAfulik from "../views/afulink/header/Header";
import HeaderTipsBook from "../views/tipsbook/header/Header";

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
        <Layout pageTitle="Afulink Informática">
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
