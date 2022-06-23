import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Carousel from './components/Carousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CONST from './data/constants';
import Footer from './components/Footer';
import Loading from './components/Loading';



const App = () => {

  const { URL, APISTRING } = CONST;

  const [movies, setMovies] = useState();
  const [series, setSeries] = useState();
  const [loading, setLoading] = useState();

  useEffect(() => {
    const fetchData = async () => {

      const movies = await fetch(`${URL}/discover/movie${APISTRING}&sort_by=popularity.desc`)
      const moviesData = await movies.json();
      setMovies(moviesData);

      const series = await fetch(`${URL}/discover/tv${APISTRING}&sort_by=popularity.desc`)
      const seriesData = await series.json();
      setSeries(seriesData);



    };

    fetchData();
  }, [])

  //useEffect(() => movies && console.log(movies), [movies])



  return (
    <div className="m-auto antialised font-sans text-center bg-black text-white">
      {loading && (
        <>
          <Loading />
          <NavBar />
        </>
      )}

      {!loading && (
        <>
          {movies && <Hero {...movies?.results[0]} />}
          <NavBar />
          <Carousel title="Filmes populares" data={movies?.results} />
          <Carousel title="Séries populares" data={series?.results} />
          <Carousel title="Placeholder" />
          <Footer />

        </>
      )}

    </div >
  )
}


export default App;
