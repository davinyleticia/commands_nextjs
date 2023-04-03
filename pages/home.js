import Layout from "../components/Layout";
import Header from "../components/header/Header";
import Hero from "../components/Hero";
import Footer from '../components/Footer';

const Index = () => {
  return (
    <Layout pageTitle="Afulink Informática">
      <Header url={'.'}/>
      <Hero />
      <Footer />
    </Layout>
  )
}

export default Index;
