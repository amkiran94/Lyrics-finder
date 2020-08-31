import React, { Component } from 'react'
import { Consumer } from '../../Contex'
import axios from 'axios'

class Search extends Component {

    state = {
        trackTitle:""
    }

    handleSubmit = (dispatch, e) =>{
        e.preventDefault()
        axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track=${this.state.trackTitle}&page_size=9&page=1&s_track_rating=desc&apikey=c4996e4d1c68177c90dc864ffca81da3`)
        .then(res => {
            dispatch({
                type:"SEARCH_TRACKS",
                payload:res.data.message.body.track_list
            })

            this.setState({trackTitle:""})
            });
    }

    handlechange = (e) =>{
        this.setState({
            trackTitle: e.target.value
        })
    }
   
    render() {
        return (
            <Consumer>
                {value =>{
                    const {dispatch} = value
                    return(
                        <div className="card card-body mb-4 p-4">
                           <h1 className="dispay-4 text-center">
                               <i className="fas fa-music"> Search For A Song</i>
                               </h1> 
                               <p className="lead text-center"> Get the lyrics for any song</p>
                               <form className="form-group" onSubmit={this.handleSubmit.bind(this,dispatch)}>
                                   <input className="form-control form-control-lg" placeholder="Song Name..." name="trackTitle" value={this.state.trackTitle} onChange={this.handlechange}/>
                                   <button className="btn btn-block btn-dark btn-lg mt-3" type="submit">Search</button>
                               </form>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default Search
