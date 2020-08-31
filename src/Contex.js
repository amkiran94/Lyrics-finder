import React, { Component } from 'react'
import axios from 'axios'

const Context = React.createContext();

const reducer = (state, action) =>{
    switch(action.type){
        case'SEARCH_TRACKS':
        return{
            ...state,
            track_list:action.payload,
            heading:'Search Results'
        }
        default:
            return state;
    }
}

export class Provider extends Component {

    state = {
        track_list: [],
        heading:"Top Tracks",
        dispatch: action => this.setState(state => reducer(state, action))
    }

    componentDidMount(){
        axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=9&country=ind&f_has_lyrics=1&apikey=c4996e4d1c68177c90dc864ffca81da3`).then(res =>{
            this.setState({track_list:res.data.message.body.track_list})
        }).catch(err =>{
            console.log(err)
        })
    }
    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;