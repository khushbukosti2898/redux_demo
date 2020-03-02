import React from 'react';
import { Button } from 'react-bootstrap';
import { incCount, decCount,resetCount } from './actions'

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.store = this.props.store
    }

    handleInc = () => {
        this.store.dispatch(incCount())
    }

    handleDec = () => {
        this.store.dispatch(decCount())
    }

    handleReset = () => {
        this.store.dispatch(resetCount())
    }
    render() {
        return (<>
            {console.log(this.store.getState())}
            <div className="App">
            <h3>{this.store.getState().count}</h3>
            <Button onClick={this.handleInc} style={{ marginRight: "10px" }}>Increment</Button>
            <Button onClick={this.handleDec} style={{ marginRight: "10px" }}>Decrement</Button>
            <Button onClick={this.handleReset}>Reset</Button>
            </div>
        </>)
    }
}

export default Counter;