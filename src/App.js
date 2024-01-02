import "./App.css";
import { Auth } from "./components/Auth";
import ImageComponent from "./components/ImageComponent";
import ListMovies from "./components/movies/ListMovies";

function App() {
  return (
    <div className="App">
      <h1>Firebase React app</h1>
      <Auth />
      <ListMovies />
      <ImageComponent />
    </div>
  );
}

export default App;
