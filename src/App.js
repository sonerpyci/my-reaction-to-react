import React, {Component} from 'react';
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
        ],
        showPersons : false
    }

    switchNameHandler = (event) => {
        let persons = [...this.state.persons];
        let randomName =  this.state.personNames[Math.floor(Math.random() * this.state.personNames.length)];
        if (event && event.target)
            randomName = event.target.value;

        persons[Math.floor(Math.random() * persons.length)].name = randomName

        this.setState({
            persons:persons
        })
    }
    switchAgeHandler = () => {
        let persons = [...this.state.persons];
        persons[Math.floor(Math.random() * persons.length)].age = [Math.floor(Math.random() * 30)]
        this.setState({
            persons:persons
        })
    }

    togglePersonsHandler = () => {
        this.setState({
            showPersons : !this.state.showPersons
        })
    }

    render() {
        let persons = null;
        if (this.state.showPersons) {
            persons = (
                <div>
                    {
                        this.state.persons.map(x =>  {
                            return (
                                <Person
                                    name={x.name}
                                    age={x.age}
                                    click={this.switchAgeHandler.bind(this, "customParameterIfNeeded")}
                                    onChangeHandler={this.switchNameHandler}
                                />
                            )
                        })
                    }
                </div>
            );
        }

        return (
            <div className="App">

                <div>
                    <h1>Hi, I'm a React App.</h1>
                    <button onClick={() => this.switchNameHandler("customParameterIfNeeded")}>
                        Switch Names
                    </button>
                    <button onClick={this.togglePersonsHandler}>
                        Toggle Visibility
                    </button>
                    {persons}
                </div>
            </div>
        );

        //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, `Hi, I'm a React App!!!`))
    }
}

export default App;
