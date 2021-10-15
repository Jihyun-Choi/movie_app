import React from "react";
import "./Detail.css";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    if (location.state) { 
      return (
        <div className="detail__container">
          <h2>{location.state.title}</h2>    
          <span>{location.state.year} | </span>
          <span>{location.state.genres}</span> 
                        
          <p>{location.state.summary}</p>     

          <img src={location.state.poster} className="detail__poster" alt = {location.state.title} />
       </div>  



          //  <div class="movies">            
          //   {movies.map(movie => ( 
          //     <Movie
          //       key={location.state.id}
          //       id={location.state.id}
          //       year={location.state.year} 
          //       title={location.state.title}
          //       summary={location.state.summary}
          //       poster={location.state.poster}
          //       genres={location.state.genres}
          //     />
          //   ))}
          // </div>

      );

    } else {
      return null;
    }
  }
}
export default Detail;