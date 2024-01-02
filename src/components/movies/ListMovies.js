import React, { useEffect, useState } from "react";
import { auth, db } from "../../config/firebase";
import {
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
function ListMovies() {
  const [moviesList, setMoviesList] = useState([]);

  const [newMovieTitle, setNewMovieTitle] = useState("");
  const [newMovieReleaseDate, setNewMovieReleaseDate] = useState(0);
  const [newMovieOscarReceived, setNewMovieOscarReceived] = useState(false);

  const [updatedMovieTitle, setUpdatedMovieTitle] = useState("");

  const moviesCollectionRef = collection(db, "movies");
  //   console.log("moviesCollectionRef", moviesCollectionRef);

  const getMoviesList = async () => {
    try {
      const data = await getDocs(moviesCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      //   console.log("dataInsideTheGetData", data);
      //   console.log("docs", filteredData);
      setMoviesList(filteredData);
    } catch (error) {
      console.error("error", error);
    }
  };
  const handleNewMovieAdd = async () => {
    const postBody = {
      title: newMovieTitle,
      releaseDate: newMovieReleaseDate,
      receivedAnOscar: newMovieOscarReceived,
    };
    if (auth !== null && auth.currentUser) {
      postBody.userId = auth.currentUser.uid;
    }
    try {
      await addDoc(moviesCollectionRef, postBody);
      getMoviesList();
    } catch (error) {
      console.error("error", error);
    }
  };
  const handleRemoveMovie = async (id) => {
    const movieDoc = doc(db, "movies", id);
    // console.log("movieDoc", movieDoc);
    try {
      await deleteDoc(movieDoc);
      getMoviesList();
    } catch (error) {
      console.error(error);
    }
  };
  const handleMovieTitleUpdate = async (id) => {
    const movieDoc = doc(db, "movies", id);
    // console.log("movieDoc", movieDoc);
    try {
      await updateDoc(movieDoc, {
        title: updatedMovieTitle,
      });
      getMoviesList();
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getMoviesList();
  }, []);
  return (
    <div>
      ListMovies
      <div>
        <h2>Create a new movie</h2>
        <input
          placeholder="enter movie title"
          onChange={(e) => setNewMovieTitle(e.target.value)}
        />
        <input
          placeholder="enter movie release Date"
          onChange={(e) => setNewMovieReleaseDate(e.target.value)}
        />
        <input
          type="checkbox"
          checked={newMovieOscarReceived}
          onChange={(e) => setNewMovieOscarReceived(e.target.checked)}
        />
        <label>Movie Received an oscar</label>
        <button onClick={handleNewMovieAdd}>Submit Movie</button>
      </div>
      {moviesList.map((movie) => {
        return (
          <div id={movie.id}>
            <h1 style={{ color: movie.receivedAnOscar ? "green" : "red" }}>
              {movie.title}
            </h1>
            <p>Date : {movie.releaseDate}</p>
            <button
              onClick={() => handleRemoveMovie(movie.id)}
              style={{ color: "red" }}
            >
              Delete Movie
            </button>
            <input
              placeholder="new title"
              onChange={(e) => setUpdatedMovieTitle(e.target.value)}
            />
            <button onClick={() => handleMovieTitleUpdate(movie.id)}>
              Update title
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default ListMovies;
