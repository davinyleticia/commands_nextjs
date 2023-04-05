import Layout from "../views/afulink/Layout";
import Header from "../views/afulink/header/Header";
import Curso from "../views/afulink/Hero";
import Certificacao from "../views/afulink/certificacao/Certificacao"
import Footer from "../views/afulink/Footer";

const Index = () => {
  return (
    <Layout pageTitle="Afulink Informática">
      <Header url={'..'} />
      <Curso />
      <Certificacao />
      <Footer />
    </Layout>
  )
}

export default Index;
