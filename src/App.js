import React, { Component } from 'react';
import './App.css';
import { Card } from 'antd';
class App extends Component{
  state = {
    movie : []
  }

  componentDidMount(){
   this.getMovie(); 
  }

  getMovie(){
    fetch(`https://5f50ca542b5a260016e8bfb0.mockapi.io/api/v1/movies`, {
      method: 'GET'
    })
    .then(response => response.json())
    .then(json => {
      // console.log(json);
      this.setState({
        movie: json
      });
      console.log(this.state.movie);
    })
    .catch(error => console.log("error ", error));
  }
  render(){
    return(
      <div>
        {this.state.movie.map(movies => (
          <Card 
            cover={<img
              alt="example"
              src={movies.image}
              width="300"
            />}
          >
            <p>{movies.title}</p>
          </Card>
        ))}
      </div>
    )
  }
}

export default App;
