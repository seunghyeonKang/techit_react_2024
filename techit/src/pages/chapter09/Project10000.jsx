import { useState } from "react";
import "./10000prjOrigin/reset.css";
import "./Style.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Modal from "./components/modal/Modal";

export default function Project10000() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div id="app-10000">
      <Header />
      <Main modalOpen={setModalShow} />
      <Footer />
      {modalShow && <Modal modalClose={setModalShow} />}
    </div>
  );
}
