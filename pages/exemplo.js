import Layout from "../components/Layout";
import Header from "../components/header/Header";
import Hero from "../components/Hero";
import Curso from '../components/curso/Curso';
import About from '../components/About';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <Layout pageTitle="AfuLink Tecnologia">
      <Header url={'.'}/>
      <Hero />
      <Curso />
      <About />
      <Footer />
    </Layout>
  )
}

export default Index;
