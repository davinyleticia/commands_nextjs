import Layout from "../components/Layout";
import Header from "../components/header/Header";
import Certificacao from '../components/certificacao/Certificacao';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <Layout pageTitle="AfuLink Certificação e Treinamentos">
      <Header url={'..'} />
      <Certificacao />
      <Footer />
    </Layout>
  )
}

export default Index;
