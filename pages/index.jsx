import { useRouter } from "next/router";
import Layout from "../src/components/Layout";
import HomeCommad from "../src/components/HomeCommand";
import HeaderCommand from "../src/components/partials/Header/HeaderCommand";

const Index = ({ host }) => {
  const router = useRouter();
  const { id } = router.query;

  const renderCommand = host === "commands.viewpage.ink";
  const localhost = host === "localhost:3000";

  return (
    <>
      {renderCommand && (
        <Layout pageTitle="Commands.ViewsPage.ink" favicon={"/images/favicon.svg"}>
          <HeaderCommand url={"."} />
          <HomeCommad id={id} />
        </Layout>
      )}

      {localhost && (
        <Layout pageTitle="Commands.ViewPage.ink" favicon={"/images/favicon.svg"}>
          <HeaderCommand url={"."} />
          <HomeCommad id={id} />
        </Layout>
      )}
    </>
  );
};
export default Index;



export async function getServerSideProps(context) {
  try {
    const host = context.req.headers.host;

    return {
      props: {
     
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
