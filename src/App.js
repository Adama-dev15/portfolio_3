import AboutView from "./Composant/AboutView/AboutView";
import ContactView from "./Composant/ContactView/ContactView";
import HeaderWiev from "./Composant/HeaderView/HeaderView";
import PortfolioView from "./Composant/PortfolioView/PortfolioView";
import ResumeView from "./Composant/ResumeView/ResumeView";
import ServicesView from "./Composant/ServicesView/ServicesView";

//Vendor CSS Files
import "./assets/vendor/bootstrap/css/bootstrap.min.css";
import "./assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "./assets/vendor/boxicons/css/boxicons.min.css";
import "./assets/vendor/glightbox/css/glightbox.min.css";
import "./assets/vendor/remixicon/remixicon.css";
import "./assets/vendor/swiper/swiper-bundle.min.css";

//Template Main CSS File
import "./assets/css/style.css";

// Template Main JS File
import "./MyFonction.jsx";

function App() {
  return (
    <div>
      <HeaderWiev />
      <AboutView />
      <ResumeView />
      <ServicesView />
      <PortfolioView />
      <ContactView />
    </div>
  );
}

export default App;
