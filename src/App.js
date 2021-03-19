import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
class App extends Component {
    state = {
        persons: [
            {name:"John", age: 28},
            {name:"Doe", age: 21},
            {name:"Anonymous", age: 23},
        ],
        personNames : [
            "Alice", "Max", "Chandler", "Joey", "Jamie", "Bruce", "Alex", "Mahmut"
        ]
    }

    switchNameHandler = () => {
        let persons = [...this.state.persons];
        let randomName =  this.state.personNames[Math.floor(Math.random() * this.state.personNames.length)];
        persons[Math.floor(Math.random() * persons.length)].name = randomName

        this.setState({
            persons:persons
        })
    }

    render() {
        return (
            <div className="App">
                <div>
                    <h1>Hi, I'm a React App.</h1>
                    <button onClick={this.switchNameHandler}>Switch Names</button>
                    <Person
                        name={this.state.persons[0].name}
                        age={this.state.persons[0].age}
                    />
                    <Person
                        name={this.state.persons[1].name}
                        age={this.state.persons[1].age}
                    >
                        I Like Swimming.
                    </Person>
                    <Person
                        name={this.state.persons[2].name}
                        age={this.state.persons[2].age}
                    />


                </div>
            </div>
        );

        //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, `Hi, I'm a React App!!!`))
    }
}

export default App;
