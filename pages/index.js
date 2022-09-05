import Layout from "../components/Layout";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Service from '../components/Service';
import About from '../components/About';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <Layout pageTitle="AfuLink Treinamentos">
      <Header url={'.'}/>
      <Hero />
      <Service />
      <About />
      <Footer />
    </Layout>
  )
}

export default Index;
