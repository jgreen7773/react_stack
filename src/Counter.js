import React, { Component } from 'react'
import { ThemeContext } from './App'

export default class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: props.initialCount
        }
    }

    render() {
        console.log("Render Counter")
        return (
            <ThemeContext.Consumer>
                {style => (
                    <div>
                        <button style={style} onClick={() => this.changeCount (-1)}>-</button>
                        <span>{ this.state.count }</span>
                        <button style={style} onClick={() => this.changeCount (1)}>+</button>
                    </div>
                )}
            </ThemeContext.Consumer>
        )
    }

    changeCount(amount) {
        // be aware that using setState vs. prevState will differentiate asynchronously

        // be aware that when you use prevState, you must use the function version, but setState may be used like so....
        // this.setState({ count: this.state.count + amount })

        // working code below

        this.setState(prevState => { 
            return { count: prevState.count + amount }
        })
    }
}
