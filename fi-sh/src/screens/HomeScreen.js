import React from "react";
import NavbarComponent from "../NavbarComponent";
import Banner from "../Banner";
import "./HomeScreen.css";
import requests from "../Requests";
import Row from "../Row";

function HomeScreen() {
  return (
    <div className="homeScreen">
      <NavbarComponent />
      <Banner />
      <Row
        title="Trending Movies"
        fetchUrl={requests.fetchTrending}
        isLargeRow
      />
      <Row title="Top Rated Movies" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentares} />
      <Row title="Comedy Shows" fetchUrl={requests.fetchComedyShows} />
      <Row title="Romance Shows" fetchUrl={requests.fetchRomanceShows} />
    </div>
  );
}

export default HomeScreen;
