import Layout from "../components/Layout";
import Header from "../components/Header";
import Feature from '../components/Feature';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <Layout pageTitle="AfuLink Treinamentos">
      <Header url={'..'} />
      <Feature/>
      <Footer />
    </Layout>
  )
}

export default Index;
