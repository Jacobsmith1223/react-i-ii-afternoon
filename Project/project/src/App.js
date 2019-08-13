import React,{Component} from 'react';
import './App.css';
import data from './data'
import Next from './components/Next'
import Previous from './components/Previous'

class App extends Component {
  constructor(){
    super();

   this.state={
     people:data,
     person: 0

   }
  }

  changePersonInc = () => {
    let i = this.state.person
    if(i < 24){
      this.setState({person: i++})
    }
  }

  changePersonDec = () => {
    let i = this.state.person
    if(i > 0){
      this.setState({person: i--})
    }
  }

  render(){
  return (
     <div className="Big">
      <header className="Head">Home</header>
      
      <div className="display">
      <p className="numbers">{this.state.people[this.state.person].id}/25</p>
      <p className="names">{this.state.people[this.state.person].name.first} {this.state.people[this.state.person].name.last}</p>
      <p><strong>From:</strong> {this.state.people[this.state.person].city}, {this.state.people[this.state.person].country}</p>
      <p><strong>Job Title:</strong> {this.state.people[this.state.person].employer}</p>
      <p><strong>Employer:</strong> {this.state.people[this.state.person].title}</p>
      <ol>
        <strong>Favorite Movies</strong>
        <li>{this.state.people[this.state.person].favoriteMovies[0]}</li>
        <li>{this.state.people[this.state.person].favoriteMovies[1]}</li>
        <li>{this.state.people[this.state.person].favoriteMovies[2]}</li>
      </ol>
      
      </div>
      
      <div className="flexStuff">
      <Previous dec={this.changePersonDec} />
      <Next inc={this.changePersonInc} />
      </div>

     </div>
    );
  }
}

export default App;
