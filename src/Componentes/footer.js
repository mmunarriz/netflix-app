import React, { useState, } from "react";
import "./footer.css";

import { Modal } from "react-bootstrap";


function Footer() {
  const [showMovie, setShowMovie] = useState(false);

  const handleShowMovie = () => setShowMovie(true);
  const handleCloseMovie = () => setShowMovie(false);


  return (

    <div className="footer">

      <footer>
        <ul>
          <div>
            <li>
              <a href="https://github.com/abigailarjona/tp-grupo-10">
                <i className="fa-brands fa-github"></i>
              </a>
            </li>

            <li>

              <button
                className="integrantes"
                type="button"
                onClick={handleShowMovie}
              >

                <i className="fa-solid fa-users"></i>
                <p>Integrantes del grupo 10 </p>

              </button>
            </li>
          </div>

          <Modal show={showMovie} onHide={handleCloseMovie}>
            <Modal.Header closeButton>
              Grupo 10, Comision 22804, React JS CaC
            </Modal.Header>
            <Modal.Body>

              <h3>Integrantes:</h3>
              <div id="modal-body">
                <div>
                  <p>Niza Laiker</p>
                  <p>Mariano Munarriz</p>
                  <p>Naira Leal</p>
                  <p>Juan Emiliano Cicirello</p>
                  <p>Abigail Arjona</p>
                  <p>Elizabeth Capuzzi</p>
                  <p>Jorge Zubieta</p>
                  <p>Maria de los Angeles Airala</p>
                  <p>Jazmin Sallis</p>
                </div>

                <div>
                  <a>linkedin</a>
                  <a>linkedin</a>
                  <a>linkedin</a>
                  <a>linkedin</a>
                  <a>linkedin</a>
                  <a>linkedin</a>
                  <a>linkedin</a>
                  <a>linkedin</a>
                  <a>linkedin</a>
                </div>
              </div>

            </Modal.Body>

          </Modal>

          <li>
            <a href="#" id="contactanos">
              <i className="fa-regular fa-envelope"></i>
              Contactanos
            </a>
          </li>
        </ul>
      </footer>
    </div>
  )
};

export default Footer;