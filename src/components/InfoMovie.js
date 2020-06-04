import React from 'react';

import './styles/InfoMovie.css'

class InfoMovie extends React.Component {
    state={ 
        loading: true,
        error: null,
        data: {} }

  
    componentDidMount() {
        this.fetchMovieInfo()
        console.log(this.props.title)
    }

    fetchMovieInfo = async () => {
        this.setState({loading: true, error: null})

        try{
            const response = await fetch('http://www.omdbapi.com/?apikey=3d381535&t=inception')
            const data = await response.json();
            
            this.setState({
                loading: false,
                data: data,
            });
        } catch (error){
            this.setState({
                loading: false,
                error: error,
            });
        }
    }

     render(){
         return (
            <div className="Info__container">
            <div className="row">

            <div className="col-6">
                <img src={this.state.data.Poster}  className="Info__img" alt="Poster" />
            </div>
            <div className="col-6">
            <ul className="list-unstyled">
                    <li>
                    <p>Título: {this.state.data.Title}</p>
                    <p>Actores: {this.state.data.Actors}</p>
                    <p>País: {this.state.data.Country}</p>
                    <p>Sinopsis: {this.state.data.Plot}</p>
                    <p>Premios: {this.state.data.Awards}</p>
                    </li>
            </ul>
            </div>
            </div>
        </div>
         )
     }
}

export default InfoMovie;