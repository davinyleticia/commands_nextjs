import Layout from "../views/afulink/Layout";
import Header from "../views/afulink/header/Header";
import Curso from "../views/afulink/Hero";
import Footer from "../views/afulink/Footer";
import Hero from "../views/afulink/Hero";

const Index = () => {
  return (
    <Layout pageTitle="Afulink Informática">
      <Header url={'.'}/>
      <Hero />
      <Curso />
      <About />
      <Footer />
    </Layout>
  )
}

export default Index;
