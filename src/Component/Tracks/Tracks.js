import React, { Component } from 'react'
import Trackss from './Tracklist'
import { Consumer } from '../../Contex'

export class Tracks extends Component {
    render() {
        return (
            <Consumer>
                {value => {
                    const { track_list, heading } = value
                    console.log(track_list, heading)
                    return (
                        <React.Fragment>
                            <h3 className="text-center mb-4">{heading}</h3>
                            <div className="row">
                                {track_list.map(item => (
                                    <Trackss key={item.track.track_id} track={item.track} />
                                ))}
                            </div>
                        </React.Fragment>

                    )
                }}
            </Consumer>
        )
    }
}

export default Tracks
