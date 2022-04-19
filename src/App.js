import React, {Component} from "react";
import './App.css';
import nextId from "react-id-generator";
import Form from "./components/Form";
import Clock from "./components/Clock";

const copyArrayOfObjects = (arr) => arr.map(obj => {
    return {...obj};
});

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            clocks: [
                {cityName: 'New York', timeZone: '-4', id: nextId()},
                {cityName: 'Moscow', timeZone: '3', id: nextId()},
                {cityName: 'London', timeZone: '0', id: nextId()},
            ]
        }
        this.handleAdd = this.handleAdd.bind(this);
        this.handleDelete = this.handleDelete.bind(this);

    }

    handleAdd(e, cityName, timeZone) {
        e.preventDefault();
        this.setState({
            clocks: [
                ...copyArrayOfObjects(this.state.clocks),
                {
                    cityName: cityName,
                    timeZone: timeZone,
                    id: nextId()
                }
            ]
        });
    }

    handleDelete(id) {
        this.setState(prevState => {
            const newClocks = prevState.clocks.filter(clock => clock.id !== id);
            return {
                clocks: newClocks
            }
        })
    }

    render() {
        const {clocks} = this.state;
        return (
            <div className="App">
                <Form handleAdd={this.handleAdd}/>
                <div className="clocks-wrapper">
                    {clocks.map((clock) => <Clock key={clock.id} clock={clock} handleDelete={this.handleDelete}/>)}
                </div>
            </div>
        );
    }
}

export default App;
