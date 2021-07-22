import Home from "./view/home/components/Home";
import ProjetList from "./view/projet/components/ProjetList";
import Profil from "./view/profil/components/Profil";
import Footer from "./layout/footer/Footer";


function App() {
  return (
    <div>
      <Home />
      <ProjetList />
      <Profil />
      <Footer />
    </div>
  );
}

export default App;
