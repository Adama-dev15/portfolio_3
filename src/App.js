import AboutView from "./Composant/AboutView/AboutView";
import ContactView from "./Composant/ContactView/ContactView";
import HeaderWiev from "./Composant/HeaderView/HeaderView";
import PortfolioView from "./Composant/PortfolioView/PortfolioView";
import ResumeView from "./Composant/ResumeView/ResumeView";
import ServicesView from "./Composant/ServicesView/ServicesView";

//Favicons
import "./assets/img/favicon.png";
import "./assets/img/apple-touch-icon.png";

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
//import "./assets/js/main.js";
import "./MyFonction.jsx";

//Vendor JS Files
import "./assets/vendor/purecounter/purecounter_vanilla.js";
import "./assets/vendor/bootstrap/js/bootstrap.bundle.min.js";
import "./assets/vendor/glightbox/js/glightbox.min.js";
import "./assets/vendor/isotope-layout/isotope.pkgd.min.js";
import "./assets/vendor/swiper/swiper-bundle.min.js";
import "./assets/vendor/waypoints/noframework.waypoints.js";
import "./assets/vendor/php-email-form/validate.js";

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
