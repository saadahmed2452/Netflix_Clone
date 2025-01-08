import { useEffect, useState } from "react"
import "./Home.scss"
import axios from "axios"
import { Link } from "react-router-dom"
import { BiPlay } from "react-icons/bi"
import {AiOutlinePlus} from "react-icons/ai"



const apiKey = "32a02a43b9f50027200ab07438e984ae"
const url = "https://api.themoviedb.org/3"
const imgUrl = "https://image.tmdb.org/t/p/w500" //img url from images of documentation
const upComing = "upcoming"
const nowPlaying = "now_playing"
const popular = "popular"
const topRated = "top_rated"


const Card = ({img})=>(<img className="card" src={img} alt="cover"/>

)

const Row = ({
  tittle,
  arr=[],
})=>(
  
  <div className="row">

    <h2>{tittle}</h2>

    <div className="cardDiv">
      {
        arr.map((item,index)=>(
          <Card key={index} img={`${imgUrl}/${item.poster_path}`}/>
        ))
      }

    
    
    </div>
  </div>
)










const Home = () => {

  const [upcomingMovies, setupcomingMovies]=useState([]);
  const [nowPlayingMovies, setnowPlayingMovies]=useState([]);
  const [popularMovies, setpopularMovies]=useState([]);
  const [topRatedMovies, settopRatedMovies]=useState([]);
  const [genre, setgenre]=useState([]);




  useEffect (()=>{
    const fetchUpcoming = async()=>{
     const {data: {results}} = await axios.get(`${url}/movie/${upComing}?api_key=${apiKey} `)   //its not same in my case of platform need to discuss.
     setupcomingMovies(results); 
    };
    fetchUpcoming();
    const fetchnowPlaying = async()=>{
      const {data: {results}} = await axios.get(`${url}/movie/${nowPlaying}?api_key=${apiKey} `)   //its not same in my case of platform need to discuss.
      setnowPlayingMovies(results); 
     };
     fetchnowPlaying();
    const fetchpopular = async()=>{
      const {data: {results}} = await axios.get(`${url}/movie/${popular}?api_key=${apiKey} `)   //its not same in my case of platform need to discuss.
      setpopularMovies(results); 
     };
     fetchpopular();
    const fetchtopRated = async()=>{
      const {data: {results}} = await axios.get(`${url}/movie/${topRated}?api_key=${apiKey} `)   //its not same in my case of platform need to discuss.
      settopRatedMovies(results); 
     };
     fetchtopRated();
     const getallgenres = async()=>{
      const {data: {genres}} = await axios.get(`${url}/genre/movie/list?api_key=${apiKey} `)   //its not same in my case of platform need to discuss.
      setgenre(genres); 
      
     };
     getallgenres();

  },[])



  
  return (
    <section className="Home">
      <div className="banner" style={{
        backgroundImage : popularMovies[3]? `url(${`${imgUrl}/${popularMovies[3].poster_path}`})` :"rgb(16,16,16)"
      }}> 
        {popularMovies[3] && <h1>{popularMovies[3].original_title}</h1>}
        {popularMovies[0] && <p>{popularMovies[3].overview}</p>}
        <div>
        <button><BiPlay/>Play </button>
        <button>My List <AiOutlinePlus/></button>
        </div>

        {/* <img src={`${imgUrl}/${popularMovies[3].poster_path}`} alt=""/> */}
      </div>
      <Row tittle={"Upcoming "} arr={upcomingMovies}  />
      <Row tittle={"Now Playing "} arr={nowPlayingMovies}  />
      <Row tittle={"Popular "} arr={popularMovies}  />
      <Row tittle={"Top Rated "} arr={topRatedMovies}  />
      <div className="genreBox">
        {genre.map((item) => (
          <Link key={item.id} to={`/genre/${item.id}`}>{item.name}</Link>
        )

        )}


      </div>
      
      
      {/* <Row tittle={"Popular on Netflix"}   />
      <Row tittle={"TV Shows"}   />
      <Row tittle={"Recently Added"}   />
      <Row tittle={"My List"}   /> */}

    </section>
    
      
      
    
  )
}

export default Home
