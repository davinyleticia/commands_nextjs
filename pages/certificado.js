import Layout from "../components/Layout";
import Header from "../components/header/Header";
import Certificacao from '../components/certificacao/Certificacao';
import Footer from '../components/Footer';
import Curso from "../components/curso/Curso";

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
