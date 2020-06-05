import React from 'react';
import "../components/styles/SearchMovie.css"

import NavBar from '../components/NavBar'
import SearchMovie from '../components/SearchMovie'


class PageMovie extends React.Component {
  

       

     render(){
         return (
            <div className="Search">
                <NavBar />
                <SearchMovie />
                
            </div>
         )


     }
}

export default PageMovie;