import React, { useState, useEffect } from "react";
import { useAuth } from "../context/authContext";
import NavDos from "./NavDos";
import {
  collection,
  getDocs,
  query,
  where,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../firebaseConfig/firebase";
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom'

// Mostrar las peliculas favoritas seleccionadas por el usuario
const MostrarFavoritas = () => {

  const { user } = useAuth();
  console.log(user.email)
  const [favoritas, setFavoritas] = useState([]);

  //Referencia la db de firebase y la coleccion Favoritas
  // Aplica un filtro where para mostrar exclusivamente las peliculas que coincidan con este usuario
  // El usuario lo extrae del contexto

  const favoritasCollection = query(
    collection(db, "Favoritas"),
    where("id_user", "==", user.email)
  );

  //Funcionabilidad para mostrar los documentos con asincronismo

  const getFavoritas = async () => {
    const data = await getDocs(favoritasCollection);
    //console.log(data.docs);

    setFavoritas(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    console.log(favoritas);
  };

  //Función delete para eliminar registros de Favoritas

  const deleteFavorita = async (id) => {
    const favoritaDoc = doc(db, "Favoritas", id);
    await deleteDoc(favoritaDoc);
    getFavoritas();
  };

  //Configuración sweetalert para eliminar registros
  const confirmDelete = (id) => {
    Swal.fire({
      title: "Remove from favorites?",
      text: "Are you sure to delete it!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Delete!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteFavorita(id);
        Swal.fire("Removed", "The movie was removed.", "Deleted");
      }
    });
  };

  //UseEffect, obener registros

  useEffect(() => {
    getFavoritas();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Volver de Favoritas
  const navigate = useNavigate();
  const volver = (e) => {
    navigate('/')
  };

  // Muestra los datos en estructura

  return ( <>
      <NavDos/>
    <div className="container" id="mostrarfavoritas">
   
      <div className="row">
        <div className="col">
          <table className="table table-dark table-hover">
            <thead>
              <tr>
                <th>id_movie</th>
                <th>title</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className="text-light">
              {favoritas.map((fav) => (
                <tr key={fav.id}>
                  <td key={fav.id_movie} className="text-light">
                    {fav.id_movie}
                  </td>
                  <td key={fav.title} className="text-light">
                    {fav.title}
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        confirmDelete(fav.id);
                      }}
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </>
  );
};

export default MostrarFavoritas;
