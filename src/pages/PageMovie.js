import React from 'react';
import "../components/styles/SearchMovie.css"

import NavBar from '../components/NavBar'
import SearchMovie from '../components/SearchMovie'
import InfoMovie from '../components/InfoMovie'

class PageMovie extends React.Component {
    state={
        mtitle: ''
    }

    handleChange = e => {
        this.setState({
            mtitle: e.target.value
        })
    }

     render(){
         return (
            <div className="Search">
                <NavBar />
                <SearchMovie onChange={this.handleChange}/>
                <InfoMovie title={this.state.mtitle}/>
            </div>
         )
     }
}

export default PageMovie;