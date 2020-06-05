import React from 'react';
import "./styles/SearchMovie.css"
import CardMovie from './CardMovie'


class SearchMovie extends React.Component {
    state = {
        mtitle: '',
        loading: true,
        error: null,
        data: {} 
    }

    handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
    }

    handleClick = (e) => {
        console.log('clicked'); 
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('submitted');
        console.log(this.state.mtitle);
        this.fetchMovieInfo()
        this.setState.mtitle = ''
    }

    fetchMovieInfo = async () => {
        this.setState({loading: true, error: null})
        try{
            
            const urlBase = 'https://www.omdbapi.com/?apikey=3d381535&t'
            const keyMovie =  this.state.mtitle
            const url = `${urlBase}=${keyMovie}`

            const response = await fetch(url)
            console.log(response);
            const data = await response.json();
            console.log(data);
            
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

    render() {
          return ( 
            <div>
            <div className="Search__movie">
            <form onSubmit={this.handleSubmit} autoComplete="off" >
                <div className= "form-group">
                    <label>Título de la película</label>
                    <input onChange={this.handleChange} className="form-control" type="text" name="mtitle" value={this.state.name} />
                </div>
                    <button onClick={this.handleClick} className="btn btn-primary">Buscar</button>
            </form>
            </div>
        <div>
        <div>
    <CardMovie 
        Mtitle={this.state.mtitle}
        Poster= {this.state.data.Poster}
        Title= {this.state.data.Title}
        Actors= {this.state.data.Actors}
        Country= {this.state.data.Country}
        Plot= {this.state.data.Plot}
        Awards= {this.state.data.Awards}
        />
</div>
    </div>
        </div>
        )
    }
}

export default SearchMovie