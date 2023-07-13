import Layout from "../views/afulink/Layout";
import Header from "../views/afulink/header/Header";
import Footer from "../views/afulink/Footer";
import PolicyPage from "../views/afulink/policy";

const Policy = () => {
  return (
    <Layout pageTitle="Afulink Informática">
      <Header url={'..'} />
      <PolicyPage />
      <Footer />
    </Layout>
  )
}

export default Policy;