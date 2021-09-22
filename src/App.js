import React from "react"; 
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

class App extends React.Component {
  state = {
    isLoading: true,
    movies : []
  }; 
  getMovies = async () => {
    const {
      data: {
        data: { movies } //,가 있어도 되고 없어도 되고??
      }//, 무슨 차이죠??
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating")
    this.setState({ movies, isLoading: false })
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (  //괄호와 대괄호가 중구난방, 내눈엔 너무 더러운데 이게 최선인가?
      <section class="container">
        {isLoading ? (
          <div class="loader">
            <span class="loader__text">Loading...</span>
          </div> 
        ) : (
          <div class="movie">            
            {movies.map(movie => ( 
              <Movie
                key={movie.id}
                id={movie.id} 
                year={movie.year}  
                title={movie.title}  
                summary={movie.summary}  
                poster={movie.medium_cover_image} 
              />
            ))}
          </div>
        )}
     </section>
    );
  }
}

export default App;