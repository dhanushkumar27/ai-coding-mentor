import Header from "../components/common/Header/Header";
import Footer from "../components/common/Footer/Footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />

      <main className="container my-4">
        {children}
      </main>

      <Footer />
    </>
  );
};

export default MainLayout;
