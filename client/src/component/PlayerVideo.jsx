import React, { Component } from 'react'
import ReactPlayer from 'react-player'

export default class PlayerVideo extends Component {
    render() {
        return (
            <div>
                <div className='react-videos'>
        <ReactPlayer
          url={this.video.url}
          title= {this.video.title}
          description= {this.video.description}
          duration= {this.video.duration}
          className='react-player'
          playing
          width='100%'
          height='100%'
        />
      </div>
            </div>
        )
    }
}
