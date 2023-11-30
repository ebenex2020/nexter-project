/** @format */

import styles from "./Css/App.module.css";

import Sidebar from "./component/Sidebar";
import Header from "./component/Header";
import Home from "./component/Home";
import Footer from "./component/Footer";
import Realtors from "./component/Realtors";
import Gallery from "./component/Gallery";
import StoryPictures from "./component/StoryPictures";
import Features from "./component/Features";
import StoryMessage from "./component/StoryMessage";

function App() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Header />
      <Realtors />
      <Features />
      <StoryPictures />
      <StoryMessage />
      <Home />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
