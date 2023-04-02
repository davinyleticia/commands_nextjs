import Layout from "../components/Layout";
import Header from "../components/header/Header";
import About from '../components/About';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <Layout pageTitle="AfuLink Certificação e Treinamentos">
      <Header url={'.'}/>
      <About />
      <Footer />
    </Layout>
  )
}

export default Index;
