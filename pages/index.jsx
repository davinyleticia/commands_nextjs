import { useRouter } from 'next/navigation'
import Layout from "../views/afulink/Layout";
import HeaderAfulik from "../views/afulink/header/Header";
import Hero from "../views/afulink/Hero";
import Footer from "../views/afulink/Footer";
import HomeCommad from "../views/command/HomeCommand";
import HeaderCommand from "../views/command/partials/Header/HeaderCommand";

const is_render = (url, options) => {
  let result;

  result = options && url;
  result = options && url;
  result = options && url;
  result = options && url;
  result = options === url;

  return result;
};

const Index = (host) => {
  const router = useRouter();
  const { id } = router.query;

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
      {is_render(host.host, "command.views.page") && (
        <Layout pageTitle="Commad Find" favicon={'/images/favicon.svg'}>
          <HeaderCommand />
          <HomeCommad />
        </Layout>
      )}
      {is_render(host.host, "localhost:3000") && (
       <Layout pageTitle="Commad Find" favicon={'/images/favicon.svg'}>
          <HeaderCommand />
          <HomeCommad id={id} />
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
