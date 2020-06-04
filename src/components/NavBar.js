import React from 'react';
import "./styles/SearchMovie.css"

class NavBar extends React.Component {
     render(){
         return (
            <div className="Search__header">
                <h1 className="container-fluid">Busca tu película favorita</h1>
            </div>
         )
     }
}

export default NavBar;