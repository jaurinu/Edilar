import React from 'react';
import './styles/CardMovie.css'

class CardMovie extends React.Component {
   
     render(){

        if (this.props.Title === undefined){
           return(
            <div className="Card__container">
            <div className="row Card__text__not__found">
            No se encontraron datos
            </div>
            </div>
           )
           }else{
        return (
            <div className="Card__container">
            <div className="row">
            <div className="col-6">
                <img src={this.props.Poster}  className="Card__img" alt="Poster" />
            </div>
            <div className="col-6">
            <ul className="list-unstyled">
                <li><p>Título: {this.props.Title}</p></li>
                <li><p>Actores: {this.props.Actors}</p></li>
                <li><p>País: {this.props.Country}</p></li>
                <li><p>Sinopsis: {this.props.Plot}</p></li>
                <li><p>Premios: {this.props.Awards}</p></li>
            </ul>
            </div>
            </div>
            </div>
        )
        }
     }
}

export default CardMovie;