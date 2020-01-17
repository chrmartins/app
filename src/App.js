import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      pokemon: []
    };
  }

  componentDidMount(){
    let url = 'https://pokeapi.co/api/v2/pokemon/1';
    fetch(url)
    .then((resposta)=> resposta.json())
    .then((json)=> {
      let state = this.state;
      state.pokemon = json;
      this.setState(state);
      console.log(json)
    })
  }

  render(){
    return (
      <div className="container">

        {this.state.pokemon.map((item)=>{
          return(
            <div key={ item.id } className="card">
              <strong className="nome">{ item.name }</strong>
              {/* <img src={ item.capa } className="capa" alt="imagem"/>
              <a className="botao" href="#">Detalhe</a> */}
            </div>
          )
        })}
        
      </div>
    );
  }  
}

export default App;
