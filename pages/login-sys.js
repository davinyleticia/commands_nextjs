import Layout from "../views/afulink/components/Layout";
import Header from "../views/afulink/components/header/Header";
import Login from "../views/afulink/login/login";
import Footer from "../views/afulink/components/Footer";

const Index = () => {
  return (
    <Layout pageTitle="Afulink Informática" favicon={"/images/logo.svg"}>
      <Header url={'..'} />
      <Login />
      <Footer />
    </Layout>
  )
}

export default Index;
