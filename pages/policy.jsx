import Layout from "../src/afulink/components/Layout";
import Header from "../src/afulink/components/header/Header";
import Footer from "../src/afulink/components/Footer";
import PolicyPage from "../src/afulink/policy";

const Policy = () => {
  return (
    <Layout pageTitle="Afulink Informática" favicon={"/images/logo.svg"}>
      <Header url={'..'} />
      <PolicyPage />
      <Footer />
    </Layout>
  )
}

export default Policy;