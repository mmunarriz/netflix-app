import { Modal, Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { useAuth } from "../context/authContext";
import "../App.css";
import "./Banner.css";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig/firebase";
import Swal from "sweetalert2";
const base_url = "https://image.tmdb.org/t/p/original/";
const API_IMG = "https://image.tmdb.org/t/p/w500/";

const Banner = ({
  id,
  title,
  poster_path,
  backdrop_path,
  vote_average,
  release_date,
  overview,
}) => {

  const [movie, setMovie] = useState({});
  const page = "100"
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=191528030c357419329af1198edbcb24&language=en-US&&page=${page}`
    )

      .then((res) => res.json())
      .then((data) => {
        console.log(movie);
        setMovie(data.results[Math.floor(Math.random() * data.results.length)]);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { user } = useAuth();

  const [showMovie, setShowMovie] = useState(false);

  const handleShowMovie = () => setShowMovie(true);
  const handleCloseMovie = () => setShowMovie(false);

  //2 referenciamos la bd con su coleccion

  const favoritasCollection = collection(db, "Favoritas");

  //3 declaramos una función para almacenar


  const confirmFavorite = async (id, title) => {
    await addDoc(favoritasCollection, {
      id_movie: id,
      id_user: user.email,
      title: title,
    });
  };

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url('${base_url}${movie?.backdrop_path}')`,
      }}
    >
      <div className="banner--fadeBottom">

        <div className="banner__contents">

          <h1 className="banner__title">
            {movie?.name || movie?.title || movie?.orginal_name}
          </h1>

          <div>
            <p className="banner__description">{movie?.overview}</p>
          </div>

          <div className="botones-descripcion">

            <div className="banner__buttons">
              <button
                className="banner__button"
                type="button"
                onClick={() => {
                  confirmFavorite(movie?.id, movie?.title);
                }}
              >
                Add  <i className="fa-solid fa-star"></i>
              </button>

              <button
                className="banner__button"
                type="button"
                onClick={handleShowMovie}
              >
                <i className="fa-solid fa-plus"></i> Info
              </button>
            </div>


            <Modal show={showMovie} onHide={handleCloseMovie}>
              <Modal.Header closeButton>
              </Modal.Header>
              <Modal.Body>
                <img
                  className="card-img-top"
                  style={{ width: "100%", alignSelf: "center" }}
                  src={API_IMG + movie?.backdrop_path}
                  alt="img"
                />
                <h3>{movie?.name || movie?.title || movie?.orginal_name}</h3>
                <h4>Vote average: {movie?.vote_average}</h4>
                <h5>Release date: {movie?.release_date}</h5>
                <h6>Overview</h6>
                <p>{movie?.overview}</p>
              </Modal.Body>
              <Modal.Footer className="footer-card">
                <button
                  className="css-button css-button-3d--yellow"
                  type="button"
                  onClick={() => {
                    confirmFavorite(movie?.id, movie?.title);
                  }}
                >
                  <i className="fa-solid fa-star"></i> Add favorites
                </button>
                <Button variant="secondary" className="close-button css-button" onClick={handleCloseMovie}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>

          </div>

        </div>

      </div>
    </header>
  );
}


export default Banner;