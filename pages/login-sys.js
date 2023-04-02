import Layout from "../components/Layout";
import Header from "../components/header/Header";
import Certificacao from '../components/certificacao/Certificacao';
import Footer from '../components/Footer';
import Curso from "../components/curso/Curso";
import Login from "../components/login/login";

const Index = () => {
  return (
    <Layout pageTitle="AfuLink Certificação e Treinamentos">
      <Header url={'..'} />
      <Login />
      <Footer />
    </Layout>
  )
}

export default Index;
