import React from "react"
import PropTypes from "prop-types"
function Food({name, index, rating}) {  
  return <h1>I like {name}, index={index}, rating={rating}/5.0</h1>;
}


Food.propTypes = {
name: PropTypes.string.isRequired,
index: PropTypes.number.isRequired,
rating: PropTypes.number.isRequired,
}
const foodILike = [ 
{
  id:1,
    name: "potato",
    index: 1,
    rating: 4.9,
},
{
  id:2,
  name: "chocolate",
  index: 2,
  rating: 4.8,
}]

function renderFood(dish) {
  console.log(dish)
  return <Food key={dish.id} name={dish.name} index={dish.index} rating={dish.rating}/>
}
function App() {
  return (
    <div>
        {foodILike.map(renderFood)}
    </div>
    
  );
}

export default App;