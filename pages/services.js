import Layout from "../views/afulink/Layout";
import Header from "../views/afulink/header/Header";
import Services from "../views/afulink/Hero";
import Footer from "../views/afulink/Footer";

const Index = () => {
  return (
    <Layout pageTitle="Afulink Informática">
      <Header url={'.'}/>
      <Services />
      <Footer />
    </Layout>
  )
}

export default Index;
