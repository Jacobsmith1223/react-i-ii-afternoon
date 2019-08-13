import React,{Component} from 'react'
import './previous.css'


class Previous extends Component{
    render() {
        return (
          <button className="button" onClick={this.props.dec}>
             previous
          </button>
        )
      }
    }

export default Previous