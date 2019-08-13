import React,{Component} from 'react'
import './next.css'

class Next extends Component{
    render() {
        return (
          <div className="next">
              <button className="button" onClick={this.props.inc}>
                Next >
              </button>
          </div>
        )
      }
    }

export default Next