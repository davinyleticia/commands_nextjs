import Layout from "../views/afulink/components/Layout";
import Header from "../views/afulink/components/header/Header";
import Footer from "../views/afulink/Footer";
import PolicyPage from "../views/afulink/policy";

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