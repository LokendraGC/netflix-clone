import './App.css';
import Banner from './Banner.js';
import Navbar from './Navbar.js';
import Row from './Row.js';
import requests from './requests.js';

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Banner />
      <Row title="Netflix Original" fetchUrl={requests.fetchNetflixOriginal} isLargeRow/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentries" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
