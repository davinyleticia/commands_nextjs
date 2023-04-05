import Layout from "../views/afulink/Layout";
import Header from "../views/afulink/header/Header";
import Login from "../views/afulink/login/login";
import Footer from "../views/afulink/Footer";

const Index = () => {
  return (
    <Layout pageTitle="Afulink Informática">
      <Header url={'..'} />
      <Login />
      <Footer />
    </Layout>
  )
}

export default Index;
