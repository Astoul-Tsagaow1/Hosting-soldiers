import React ,{Component} from 'react';
import './App.css';
import axios from 'axios';
import {BrowserRouter , Link , Switch , Route} from 'react-router-dom';
class App extends Component{
  url = "/api";
  state = {data : ''};

  clickHandler = () =>{
    console.log("clicked");
    axios.get("/api")
    .then(res => {
      console.log(res.data);
      this.setState({data : res.data.res});
  })
    .catch(err => console.log(err));
  }
  render(){
    return (
      <div>
        <h2>Hello World</h2>
        <button onClick = {this.clickHandler}>Click Me</button>
        <p>{this.state.data}</p>
      </div>
      // <BrowserRouter>
      //   <Link to = '/'>Home|</Link>
      //   <Link to = '/'>Logup Soldiers|</Link>
      //   <Link to = '/'>Logup Family|</Link>
      //   <Link to = '/'>Login|</Link>
      //   <Link to = '/'>About|</Link>
      // </BrowserRouter> 
    );
  }
 
}

export default App;
