import React, { Component } from 'react'

export default class Calculate extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.state = {
            firstNumber: "",
            secondNumber: "",
            addNumbers: "Answer",
           
        }
    }
    handleChange = (e) => {
        return this.setState({ firstNumber: e.target.value })
    }
    handleChange2 = (e) => {
        return this.setState({ secondNumber: e.target.value })
    }
    handleSubmit(e) {
        return e.preventDefault()
    }

    handleClick() {
        const add = Number(this.state.firstNumber) + Number(this.state.secondNumber)
        this.setState({ addNumbers: add })
      

        this.setState({ firstNumber: "" })
        this.setState({ secondNumber: "" })

    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input placeholder="FIRSTNUMBER"
                        name="" typ="number"
                        value={this.state.firstNumber}
                        onChange={this.handleChange} /> + {" "}
                    <input placeholder="second NUMBER"
                        typ="number" value={this.state.secondNumber}
                        onChange={this.handleChange2.bind(this)} />
                    <button onClick={this.handleClick.bind(this)}>Calculate</button>
                    <h1>{this.state.addNumbers}</h1>
                </form>
            </div>
        )
    }
}
