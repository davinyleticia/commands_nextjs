import Layout from "../components/Layout";
import Header from "../components/header/Header";
import Footer from '../components/Footer';
import Services from "../components/services/services";

const Index = () => {
  return (
    <Layout pageTitle="AfuLink Certificação e Treinamentos">
      <Header url={'.'}/>
      <Services />
      <Footer />
    </Layout>
  )
}

export default Index;
