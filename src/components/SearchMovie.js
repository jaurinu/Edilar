import React from 'react';
import "./styles/SearchMovie.css"

class SearchMovie extends React.Component {

    handleClick = e => {
        console.log("button was clicked");
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log('button was submitted');
        console.log(this.props.mtitle)
        
    }

    render() {
        return ( 
        <div className="Search__movie">
            
            <form onSubmit={this.handleSubmit}>
                <div className= "form-group">
                    <label>Título de la película</label>
                    <input onChange={this.props.onChange} className="form-control" type="text" id="t" name="mtitle" value={this.props.mtitle}/>
                </div>
                    <button onClick={this.handleClick} className="btn btn-primary">Buscar</button>
            </form>

            
        </div>
        )
    }
}

export default SearchMovie