/** @format */

import styles from "./Css/App.module.css";

import Sidebar from "./component/Sidebar";
import Header from "./component/Header";
import Home from "./component/Home";
import Footer from "./component/Footer";
import Realtors from "./component/Realtors";
import Gallery from "./component/Gallery";
import Story from "./component/Story";
import Features from "./component/Features";

function App() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Header />
      <Realtors />
      <Features />
      <Story />
      <Home />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
