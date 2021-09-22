import "./App.css";
import Row from "./Row.js";
import request from "./request.js";
import Banner from "./Banner.js";
import Nav from "./Nav.js";
function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={request.fetchNetflixOriginals}
        islargerRow
      />

      <Row title="Trending NOW  " fetchUrl={request.fetchTrending} />
      <Row title="TOP RATED" fetchUrl={request.fetchTopRated} />
      <Row title="ACTION MOVIES" fetchUrl={request.fetchActionMovies} />
      <Row title="COMEDY MOVIES" fetchUrl={request.fetchComedyMovies} />
      <Row title="HORROR MOVIES" fetchUrl={request.fetchHorrorMovies} />
      <Row title="ROMANCE MOVIES" fetchUrl={request.fetchRomanceMovies} />
      <Row title="DOCUMENTARY MOVIES" fetchUrl={request.fetchDocumentaries} />
    </div>
  );
}

export default App;
