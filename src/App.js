import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state={
    persons:[
      {name:'max', age:280},
      {name:'muller',age:29},
      {name:'lucifer',age:32}
    ],
    showPerson:false
  };
  eventHandler=(newname)=>{
    // console.log('onclick is working');
    this.setState({
      persons:[
        {name:newname, age:280},
        {name:'muller sculler',age:29},
        {name:'lucifer gici',age:32}
      ]
    })
  }
  onChangeHandler=(event)=>{
    this.setState({
      persons:[
        {name:'max', age:280},
        {name:event.target.value,age:29},
        {name:'lucifer gici',age:32}
      ]
    })
  }
  toggleHandler=()=>{
    const show=this.state.showPerson;
    this.setState({showPerson:!show})

  }
  render() {
    const st={
      backgroundColor:"red",
      cursor:'pointer'
    }
    let persons=null;
    if(this.state.showPerson){
      persons=(
        <div>
          {this.state.persons.map(person =>{
            return <Person name={person.name} age={person.age}/>
          })}
      </div>
      );
        
    }
    return (
      <div className="App">
      <h2>Hii and Hello to the world of React....</h2>
      <button style={st} onClick={this.toggleHandler}>Click to Display</button>
      {persons}
      
      </div>
    );
  }
}

export default App;
